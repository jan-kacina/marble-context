"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scannedCodes$ = exports.initCodeScanner = void 0;
const serialport_1 = __importDefault(require("serialport"));
const readline_1 = __importDefault(require("readline"));
const rxjs_1 = require("rxjs");
const delimiter = process.env.RCMAN_CODE_SCANNER_DELIMITER || 'CRLF';
const vendorId = process.env.RCMAN_CODE_SCANNER_VENDOR_ID || '0000';
const productId = process.env.RCMAN_CODE_SCANNER_PRODUCT_ID || '0000';
const mockPath = process.env.RCMAN_CODE_SCANNER_MOCK_PATH || 'COM99';
const mockOnly = Boolean(JSON.parse(process.env.RCMAN_CODE_SCANNER_MOCK_ONLY || 'true'));
let port;
const scannedCodesSubject$ = new rxjs_1.Subject();
const scannedCodes$ = scannedCodesSubject$.asObservable();
exports.scannedCodes$ = scannedCodes$;
const connect = async () => {
    try {
        if (mockOnly) {
            // mock serial port
            // TODO: [JK] haven't found types for binding-mock
            // eslint-disable-next-line global-require, import/no-extraneous-dependencies
            const MockBinding = require('@serialport/binding-mock');
            serialport_1.default.Binding = MockBinding;
            MockBinding.createPort(mockPath, { echo: true, record: true, readyData: '' });
            // input from console
            console.log(`Scanner is being mocked on "${mockPath}"...`);
            console.log('Type code value and hit Enter.');
            const rl = readline_1.default.createInterface({
                input: process.stdin,
                output: process.stdout,
            });
            rl.on('line', (input) => {
                if (port) {
                    port.write(`${input}${delimiter}`);
                }
                else {
                    console.error('Mock port not opened yet.');
                }
            });
        }
        const reconnectTimeout = 2500;
        const ports = await serialport_1.default.list();
        // console.log(ports)
        const foundPort = mockOnly
            ? ports.find((p) => p.path === mockPath)
            : ports.find((p) => p.vendorId === vendorId && p.productId === productId);
        // check port is available
        if (!foundPort) {
            console.log(`Port does not exists, will retry in ${reconnectTimeout / 1000} seconds...`);
            setTimeout(connect, reconnectTimeout);
            return;
        }
        port = new serialport_1.default(foundPort.path);
        port.on('error', (error) => console.error(`Serial port error: ${error}`));
        port.on('open', (data) => {
            console.log(`Scanner connected on "${foundPort.path} - ${data}..."`);
        });
        port.on('close', (data) => {
            console.log(`Serial port closed - ${data}`);
            setTimeout(connect, reconnectTimeout);
        });
        // port.on('data', data => {
        //   console.log(`DATA - ${data}`)
        // })
        const codes = port.pipe(new serialport_1.default.parsers.Readline({ delimiter }));
        codes.on('data', (code) => scannedCodesSubject$.next(code));
        console.log(`Connecting scanner on "${foundPort.path}..."`);
    }
    catch (e) {
        console.error(`Error during scanner initialization: ${e}`);
    }
};
const initCodeScanner = async () => {
    await connect();
};
exports.initCodeScanner = initCodeScanner;
//# sourceMappingURL=code-scanner.js.map
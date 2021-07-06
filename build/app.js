"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const datasources_1 = require("./datasources");
const main = async () => {
    await datasources_1.initCodeScanner();
    datasources_1.scannedCodes$.subscribe((code) => console.log(`Scanned code: ${code}`));
    console.log('App started.');
};
main();
//# sourceMappingURL=app.js.map
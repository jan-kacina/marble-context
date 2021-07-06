"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const determineSlaves = async () => {
    const filePath = '/sys/bus/w1/devices/w1_bus_master1/w1_master_slaves';
    const fileContent = await fs_1.promises.readFile(filePath);
    console.log(fileContent.toString().split('\n'));
};
setInterval(determineSlaves, 500);
//# sourceMappingURL=1wire.js.map
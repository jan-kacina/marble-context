"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const rxjs_1 = require("rxjs");
const createUser = (cmd) => {
    console.log(`JK: ${cmd}`);
    return rxjs_1.of({ id: 'JK_ID' });
};
exports.createUser = createUser;
//# sourceMappingURL=user.model.js.map
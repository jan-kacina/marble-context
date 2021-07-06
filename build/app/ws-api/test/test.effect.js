"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello$ = void 0;
const core_1 = require("@marblejs/core");
const operators_1 = require("rxjs/operators");
const hello$ = (event$) => event$.pipe(core_1.matchEvent('HELLO'), operators_1.mapTo({ type: 'HELLO', payload: 'Hello, world!' }));
exports.hello$ = hello$;
//# sourceMappingURL=test.effect.js.map
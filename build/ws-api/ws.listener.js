"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listener = exports.logger$ = void 0;
const websockets_1 = require("@marblejs/websockets");
const operators_1 = require("rxjs/operators");
const test_effect_1 = require("./test/test.effect");
const logger$ = (event$) => event$.pipe(operators_1.tap((e) => console.log(`${JSON.stringify(e)}`)));
exports.logger$ = logger$;
const effects = [
    test_effect_1.hello$,
    // effect1$,
    // effect2$,
    // ...
];
const middlewares = [
    exports.logger$,
    //   middleware1$,
    //   middleware2$,
    //   // ...
];
// export const listener = webSocketListener({ effects, middlewares });
const listener = websockets_1.webSocketListener({ effects, middlewares });
exports.listener = listener;
//# sourceMappingURL=ws.listener.js.map
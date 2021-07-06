"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropagateLoginStatus = exports.PropagateLoginStatusToken = void 0;
const core_1 = require("@marblejs/core");
const tokens_1 = require("../ws-api/tokens");
const login_status_1 = require("../streams/login-status");
class PropagateLoginStatus {
    // eslint-disable-next-line class-methods-use-this
    run() {
        login_status_1.loginStatus$.subscribe((state) => {
            console.log(`Emission begin: ${state}`);
            core_1.createReader((ask) => core_1.useContext(tokens_1.WebSocketServerToken)(ask).clients.forEach((client) => {
                console.log(`Context begin: ${client.protocol}`);
                client.send({ type: 'login-state', payload: state });
                console.log(`Context begin: ${client.protocol}`);
            }));
            console.log(`Emission end: ${state}`);
        });
    }
}
exports.PropagateLoginStatus = PropagateLoginStatus;
const PropagateLoginStatusToken = core_1.createContextToken('PropagateLoginStatus');
exports.PropagateLoginStatusToken = PropagateLoginStatusToken;
//# sourceMappingURL=propagate-login-status.js.map
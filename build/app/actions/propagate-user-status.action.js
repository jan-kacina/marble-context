"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropagateUserStatus = exports.PropagateUserStatusToken = exports.propagateUserStatus = void 0;
const core_1 = require("@marblejs/core");
const operators_1 = require("rxjs/operators");
const user_status_1 = require("../state/user-status");
const base_action_1 = require("./base-action");
const tokens_1 = require("../ws-api/tokens");
class PropagateUserStatus extends base_action_1.BaseAction {
    constructor() {
        super(user_status_1.userStatus.state$.pipe(operators_1.tap((state) => console.log(`B1: ${state.value.state.authStatus}`)), operators_1.tap((state) => core_1.createReader((ask) => core_1.useContext(tokens_1.WebSocketServerToken)(ask).clients.forEach((client) => {
            console.log('B2');
            client.send({ type: 'user-state', payload: state.value });
            console.log('B3');
        }))), operators_1.tap((state) => console.log(`B4: ${state.value.state.authStatus}`))), 
        // (state) => connectedSockets.send({ type: 'user-state', payload: state.value }),
        (state) => {
            console.log('A1');
            core_1.createReader((ask) => core_1.useContext(tokens_1.WebSocketServerToken)(ask).clients.forEach((client) => {
                console.log('A2');
                client.send({ type: 'user-state', payload: state.value });
                console.log('A3');
            }));
            console.log('A4');
        });
    }
}
exports.PropagateUserStatus = PropagateUserStatus;
const propagateUserStatus = new PropagateUserStatus();
exports.propagateUserStatus = propagateUserStatus;
const PropagateUserStatusToken = core_1.createContextToken('PropagateUserStatus');
exports.PropagateUserStatusToken = PropagateUserStatusToken;
//# sourceMappingURL=propagate-user-status.action.js.map
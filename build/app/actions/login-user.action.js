"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const code_scanner_1 = require("../datasources/code-scanner");
const auth_action_1 = require("../state/auth-action");
const user_status_1 = require("../state/user-status");
const base_action_1 = require("./base-action");
const evaluateAsync = (t, val) => new Promise((resolve) => {
    setTimeout(() => {
        resolve(val === 'aaa');
    }, t);
});
class LoginUser extends base_action_1.BaseAction {
    constructor() {
        super(rxjs_1.combineLatest([
            auth_action_1.authAction.actions$.pipe(operators_1.timestamp()),
            code_scanner_1.scannedCodes$.pipe(operators_1.timestamp()),
        ]).pipe(operators_1.map(([action, code]) => ({ action, code })), 
        // when user is not logged in
        operators_1.filter(() => user_status_1.userStatus.isUserNotLoggedIn), 
        // and login is requested
        operators_1.filter(({ action }) => action.value === auth_action_1.AuthActionType.LOGIN_INIT), 
        // restrict time window between login initiation and ibutton put on reader
        operators_1.filter(({ action, code }) => {
            const timeDiff = code.timestamp - action.timestamp;
            return timeDiff > 0; // && timeDiff < 5000
        }), 
        // evaluate code validity
        operators_1.switchMap(({ code }) => evaluateAsync(100, code.value)), 
        // allow only valid code
        operators_1.filter((result) => result === true)), () => { user_status_1.userStatus.loginUser('Pepa', 'Obsluha', '1234567890'); });
    }
}
const loginUser = new LoginUser();
exports.loginUser = loginUser;
//# sourceMappingURL=login-user.action.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutUser = void 0;
const operators_1 = require("rxjs/operators");
const auth_action_1 = require("../state/auth-action");
const user_status_1 = require("../state/user-status");
const base_action_1 = require("./base-action");
class LogoutUser extends base_action_1.BaseAction {
    constructor() {
        super(auth_action_1.authAction.actions$.pipe(
        // when user is logged in
        operators_1.filter(() => user_status_1.userStatus.isUserLoggedIn), 
        // and logout is requested
        operators_1.filter((action) => action === auth_action_1.AuthActionType.LOGOUT)), () => user_status_1.userStatus.logoutUser());
    }
}
const logoutUser = new LogoutUser();
exports.logoutUser = logoutUser;
//# sourceMappingURL=logout-user.action.js.map
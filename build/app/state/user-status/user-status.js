"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userStatus = void 0;
const rxjs_1 = require("rxjs");
const base_state_object_1 = require("../common/base-state-object");
var AuthStatus;
(function (AuthStatus) {
    AuthStatus["LOGGED_IN"] = "LOGGED_IN";
    AuthStatus["NOT_LOGGED_IN"] = "NOT_LOGGED_IN ";
    AuthStatus["INVALID"] = "INVALID";
})(AuthStatus || (AuthStatus = {}));
class UserStatus extends base_state_object_1.BaseStateObject {
    constructor(initialState) {
        super(initialState);
        this.authStatusSubject$ = new rxjs_1.BehaviorSubject(initialState.authStatus);
        this.setChangeObservables([this.authStatusSubject$]);
    }
    get isUserLoggedIn() {
        return this.state.authStatus === AuthStatus.LOGGED_IN;
    }
    get isUserNotLoggedIn() {
        return this.state.authStatus === AuthStatus.NOT_LOGGED_IN;
    }
    loginUser(firstName, lastName, chipNumber) {
        this.state.authStatus = AuthStatus.LOGGED_IN;
        this.state.firstName = firstName;
        this.state.lastName = lastName;
        this.state.chipNumber = chipNumber;
        this.authStatusSubject$.next(this.state.authStatus);
    }
    logoutUser() {
        this.state.authStatus = AuthStatus.NOT_LOGGED_IN;
        this.state.firstName = undefined;
        this.state.lastName = undefined;
        this.state.chipNumber = undefined;
        this.authStatusSubject$.next(this.state.authStatus);
    }
}
const userStatus = new UserStatus({ authStatus: AuthStatus.NOT_LOGGED_IN });
exports.userStatus = userStatus;
//# sourceMappingURL=user-status.js.map
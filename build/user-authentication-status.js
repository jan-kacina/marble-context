"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentUserAuthenticationStatus = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
var UserAuthenticationStatus;
(function (UserAuthenticationStatus) {
    UserAuthenticationStatus["LOGGED_OUT"] = "LOGGED_OUT";
    UserAuthenticationStatus["LOGGED_IN"] = "LOGGED_IN";
})(UserAuthenticationStatus || (UserAuthenticationStatus = {}));
class CurrentUserAuthenticationStatus {
    constructor() {
        this.userAuthenticationSubject$ = new rxjs_1.BehaviorSubject(UserAuthenticationStatus.LOGGED_OUT);
    }
    get isUserLoggedIn() {
        return this.isUserAuthenticationStatus(UserAuthenticationStatus.LOGGED_IN);
    }
    get isUserLoggedOut() {
        return this.isUserAuthenticationStatus(UserAuthenticationStatus.LOGGED_OUT);
    }
    get userAuthenticationStatus$() {
        return this.userAuthenticationSubject$.asObservable().pipe(operators_1.timestamp());
    }
    isUserAuthenticationStatus(expected) {
        return this.userAuthenticationSubject$.getValue() === expected;
    }
    loginUser() {
        this.userAuthenticationSubject$.next(UserAuthenticationStatus.LOGGED_IN);
    }
    logoutUser() {
        this.userAuthenticationSubject$.next(UserAuthenticationStatus.LOGGED_OUT);
    }
}
const currentUserAuthenticationStatus = new CurrentUserAuthenticationStatus();
exports.currentUserAuthenticationStatus = currentUserAuthenticationStatus;
//# sourceMappingURL=user-authentication-status.js.map
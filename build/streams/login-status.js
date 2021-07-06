"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginStatus$ = exports.logoutUser = exports.loginUser = void 0;
const rxjs_1 = require("rxjs");
const loginStatusSubject$ = new rxjs_1.BehaviorSubject(false);
const loginStatus$ = loginStatusSubject$.asObservable();
exports.loginStatus$ = loginStatus$;
const loginUser = () => {
    loginStatusSubject$.next(true);
};
exports.loginUser = loginUser;
const logoutUser = () => {
    loginStatusSubject$.next(false);
};
exports.logoutUser = logoutUser;
//# sourceMappingURL=login-status.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authAction = exports.AuthActionType = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
var AuthActionType;
(function (AuthActionType) {
    AuthActionType["NONE"] = "NONE";
    AuthActionType["LOGIN_INIT"] = "LOGIN_INIT";
    AuthActionType["LOGIN_CANCEL"] = "LOGIN_CANCEL";
    AuthActionType["LOGOUT"] = "LOGOUT";
})(AuthActionType || (AuthActionType = {}));
exports.AuthActionType = AuthActionType;
class AuthAction {
    constructor() {
        this.actionsSubject$ = new rxjs_1.BehaviorSubject(AuthActionType.NONE);
    }
    get actions$() {
        return this.actionsSubject$.asObservable().pipe(operators_1.timestamp());
    }
    newAction(actionType) {
        this.actionsSubject$.next(actionType);
    }
}
const authAction = new AuthAction();
exports.authAction = authAction;
//# sourceMappingURL=auth-action.js.map
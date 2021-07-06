"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authAction = exports.AuthActionType = void 0;
const rxjs_1 = require("rxjs");
const base_state_object_1 = require("../common/base-state-object");
var AuthActionType;
(function (AuthActionType) {
    AuthActionType["NONE"] = "NONE";
    AuthActionType["LOGIN_INIT"] = "LOGIN_INIT";
    AuthActionType["LOGIN_CANCEL"] = "LOGIN_CANCEL";
    AuthActionType["LOGOUT"] = "LOGOUT";
})(AuthActionType || (AuthActionType = {}));
exports.AuthActionType = AuthActionType;
class AuthAction extends base_state_object_1.BaseStateObject {
    constructor(initialState) {
        super(initialState);
        this.actionsSubject$ = new rxjs_1.BehaviorSubject(initialState.type);
        this.setChangeObservables([this.actionsSubject$]);
    }
    get actions$() {
        return this.actionsSubject$.asObservable();
    }
    newAction(actionType) {
        this.actionsSubject$.next(actionType);
    }
}
const authAction = new AuthAction({ type: AuthActionType.NONE });
exports.authAction = authAction;
//# sourceMappingURL=auth-action.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStateObservables$ = exports.BaseStateObject = void 0;
const guid_typescript_1 = require("guid-typescript");
const lodash_1 = require("lodash");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class BaseStateObject {
    constructor(initialState) {
        this.synteticId = guid_typescript_1.Guid.create().toString();
        this.state = initialState;
        this.stateSubject$ = new rxjs_1.BehaviorSubject(this.state);
    }
    get state$() {
        return this.stateSubject$.pipe(operators_1.map((state) => ({ id: this.synteticId, state })), operators_1.timestamp());
    }
    setChangeObservables(changeObservables) {
        if (!changeObservables || changeObservables.length === 0) {
            throw new Error('WARN: setChangeObservables called with incorrect input parameter');
        }
        // merge operator behaves weirdly (emits only once) when only one observable is passed in
        const mergedObservable = changeObservables.length > 1
            ? rxjs_1.merge(changeObservables)
            : changeObservables[0];
        mergedObservable.subscribe(() => {
            this.stateSubject$.next(this.state);
        });
    }
    getStateDeepClone() {
        return lodash_1.cloneDeep(this.state);
    }
}
exports.BaseStateObject = BaseStateObject;
const getStateObservables$ = (stateObjects) => {
    const changedObservables = Array.from(stateObjects.values()).map((o) => o.state$);
    return rxjs_1.merge(changedObservables).pipe(operators_1.mergeMap((changed) => changed), operators_1.scan((states, state) => states.set(state.value.id, state.value.state), new Map()));
};
exports.getStateObservables$ = getStateObservables$;
//# sourceMappingURL=base-state-object.js.map
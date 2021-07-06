"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseAction = void 0;
class BaseAction {
    constructor(condition$, effect) {
        this.condition$ = condition$;
        this.effect = effect;
    }
    register() {
        if (!this.subscription) {
            this.subscription = this.condition$.subscribe((t) => this.effect(t));
        }
    }
    unregister() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
exports.BaseAction = BaseAction;
//# sourceMappingURL=base-action.js.map
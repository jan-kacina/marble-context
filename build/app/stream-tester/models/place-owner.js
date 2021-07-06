"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceOwner = void 0;
const rxjs_1 = require("rxjs");
class PlaceOwner {
    constructor(placeIds) {
        this.placeSubjects = new Map();
        placeIds.forEach((placeId) => {
            const placeSubject = new rxjs_1.BehaviorSubject({ id: placeId, createdOn: Date.now(), status: 'default' });
            this.placeSubjects.set(placeId, placeSubject);
        });
        this.placesChanges$ = rxjs_1.merge(...this.placeSubjects.values());
    }
    setPlaceStatus(placeId, status) {
        const placeSubject = this.placeSubjects.get(placeId);
        if (placeSubject) {
            const place = placeSubject.getValue();
            place.status = status;
            placeSubject.next(place);
        }
    }
}
exports.PlaceOwner = PlaceOwner;
//# sourceMappingURL=place-owner.js.map
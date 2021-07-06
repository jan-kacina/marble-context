"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.placeRepository$ = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const create_new_place_1 = require("./create-new-place");
const placeRepository$ = new rxjs_1.Subject();
exports.placeRepository$ = placeRepository$;
const places = new Map();
const createNewPlaceHandler$ = create_new_place_1.createNewPlace$.pipe(operators_1.map((cmd) => {
    const place = {
        id: cmd.placeId,
        createdOn: Date.now(),
        status: 'unknown',
    };
    return place;
}), operators_1.tap((place) => places.set(place.id, place)), 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
operators_1.tap((_) => placeRepository$.next(places)));
createNewPlaceHandler$.subscribe();
//# sourceMappingURL=place-repository.js.map
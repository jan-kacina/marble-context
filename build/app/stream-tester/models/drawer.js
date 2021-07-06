"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drawer = void 0;
const Array_1 = require("fp-ts/lib/Array");
const place_owner_1 = require("./place-owner");
class Drawer {
    constructor(id, options) {
        this.id = id;
        const placeIds = new Array();
        Array_1.range(1, options.numberOfPlaces).forEach((i) => {
            placeIds.push(this.getPlaceId(i));
        });
        this.placeOwner = new place_owner_1.PlaceOwner(placeIds);
    }
    get placesChanges$() {
        return this.placeOwner.placesChanges$;
    }
    getPlaceId(placeIndex) {
        return `${this.id}_Place${placeIndex}`;
    }
    setPlaceStatus(placeId, status) {
        this.placeOwner.setPlaceStatus(placeId, status);
    }
}
exports.Drawer = Drawer;
//# sourceMappingURL=drawer.js.map
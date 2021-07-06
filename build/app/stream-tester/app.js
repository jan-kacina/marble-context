"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Array_1 = require("fp-ts/lib/Array");
const models_1 = require("./models");
const drawers = new Array();
const numberOfDrawers = 4;
Array_1.range(1, numberOfDrawers).forEach((i) => {
    drawers.push(new models_1.Drawer(`Drawer${i}`, { numberOfPlaces: 60 }));
});
const logPlaceChange = (place) => {
    console.log(`Place ${place.id} status ${place.status}`);
};
const drawer0 = drawers[0];
const drawer1 = drawers[1];
drawer0.placesChanges$.subscribe(logPlaceChange);
drawer1.placesChanges$.subscribe(logPlaceChange);
drawer0.setPlaceStatus(drawer0.getPlaceId(1), 'new');
drawer0.setPlaceStatus(drawer0.getPlaceId(2), 'new');
drawer1.setPlaceStatus(drawer1.getPlaceId(60), 'new');
//# sourceMappingURL=app.js.map
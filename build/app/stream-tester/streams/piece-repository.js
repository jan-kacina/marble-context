"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pieceCreated$ = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const create_new_piece_1 = require("./create-new-piece");
const pieceCreated$ = new rxjs_1.Subject();
exports.pieceCreated$ = pieceCreated$;
const pieces = new Map();
const createNewPieceHandler$ = create_new_piece_1.createNewPiece$.pipe(operators_1.map((cmd) => {
    const piece = {
        id: cmd.pieceId,
        createdOn: Date.now(),
        placeId: cmd.placeId,
        status: 'ready',
    };
    return piece;
}), operators_1.tap((piece) => pieces.set(piece.id, piece)), operators_1.tap((piece) => pieceCreated$.next(piece)));
createNewPieceHandler$.subscribe();
//# sourceMappingURL=piece-repository.js.map
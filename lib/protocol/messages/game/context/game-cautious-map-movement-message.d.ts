/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import GameMapMovementMessage = require('./game-map-movement-message');
declare class GameCautiousMapMovementMessage extends GameMapMovementMessage {
    static ID: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameCautiousMapMovementMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameCautiousMapMovementMessage(param1: ICustomDataInput): void;
}
export = GameCautiousMapMovementMessage;

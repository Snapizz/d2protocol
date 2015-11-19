/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import GameMapMovementRequestMessage = require('./game-map-movement-request-message');
declare class GameCautiousMapMovementRequestMessage extends GameMapMovementRequestMessage {
    static ID: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameCautiousMapMovementRequestMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameCautiousMapMovementRequestMessage(param1: ICustomDataInput): void;
}
export = GameCautiousMapMovementRequestMessage;

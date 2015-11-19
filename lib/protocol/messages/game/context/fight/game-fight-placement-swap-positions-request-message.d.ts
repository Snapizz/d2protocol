/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GameFightPlacementPositionRequestMessage = require('./game-fight-placement-position-request-message');
declare class GameFightPlacementSwapPositionsRequestMessage extends GameFightPlacementPositionRequestMessage {
    static ID: number;
    requestedId: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameFightPlacementSwapPositionsRequestMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameFightPlacementSwapPositionsRequestMessage(param1: ICustomDataInput): void;
}
export = GameFightPlacementSwapPositionsRequestMessage;

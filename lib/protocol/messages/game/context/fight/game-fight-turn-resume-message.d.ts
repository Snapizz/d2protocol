/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GameFightTurnStartMessage = require('./game-fight-turn-start-message');
declare class GameFightTurnResumeMessage extends GameFightTurnStartMessage {
    static ID: number;
    remainingTime: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameFightTurnResumeMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameFightTurnResumeMessage(param1: ICustomDataInput): void;
}
export = GameFightTurnResumeMessage;

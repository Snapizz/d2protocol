/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import TreasureHuntDigRequestAnswerMessage = require('./treasure-hunt-dig-request-answer-message');
declare class TreasureHuntDigRequestAnswerFailedMessage extends TreasureHuntDigRequestAnswerMessage {
    static ID: number;
    wrongFlagCount: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_TreasureHuntDigRequestAnswerFailedMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_TreasureHuntDigRequestAnswerFailedMessage(param1: ICustomDataInput): void;
}
export = TreasureHuntDigRequestAnswerFailedMessage;

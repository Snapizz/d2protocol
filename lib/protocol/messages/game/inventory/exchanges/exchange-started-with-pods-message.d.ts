/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import ExchangeStartedMessage = require('./exchange-started-message');
declare class ExchangeStartedWithPodsMessage extends ExchangeStartedMessage {
    static ID: number;
    firstCharacterId: number;
    firstCharacterCurrentWeight: number;
    firstCharacterMaxWeight: number;
    secondCharacterId: number;
    secondCharacterCurrentWeight: number;
    secondCharacterMaxWeight: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ExchangeStartedWithPodsMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ExchangeStartedWithPodsMessage(param1: ICustomDataInput): void;
}
export = ExchangeStartedWithPodsMessage;

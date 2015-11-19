/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import ExchangeCraftResultMessage = require('./exchange-craft-result-message');
declare class ExchangeCraftResultWithObjectIdMessage extends ExchangeCraftResultMessage {
    static ID: number;
    objectGenericId: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ExchangeCraftResultWithObjectIdMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ExchangeCraftResultWithObjectIdMessage(param1: ICustomDataInput): void;
}
export = ExchangeCraftResultWithObjectIdMessage;

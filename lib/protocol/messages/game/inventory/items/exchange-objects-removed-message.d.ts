/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import ExchangeObjectMessage = require('../exchanges/exchange-object-message');
declare class ExchangeObjectsRemovedMessage extends ExchangeObjectMessage {
    static ID: number;
    objectUID: number[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ExchangeObjectsRemovedMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ExchangeObjectsRemovedMessage(param1: ICustomDataInput): void;
}
export = ExchangeObjectsRemovedMessage;

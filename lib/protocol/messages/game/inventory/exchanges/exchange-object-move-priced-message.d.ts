/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import ExchangeObjectMoveMessage = require('./exchange-object-move-message');
declare class ExchangeObjectMovePricedMessage extends ExchangeObjectMoveMessage {
    static ID: number;
    price: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ExchangeObjectMovePricedMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ExchangeObjectMovePricedMessage(param1: ICustomDataInput): void;
}
export = ExchangeObjectMovePricedMessage;

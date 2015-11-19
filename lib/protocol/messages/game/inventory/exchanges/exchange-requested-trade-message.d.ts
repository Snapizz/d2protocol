/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import ExchangeRequestedMessage = require('./exchange-requested-message');
declare class ExchangeRequestedTradeMessage extends ExchangeRequestedMessage {
    static ID: number;
    source: number;
    target: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ExchangeRequestedTradeMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ExchangeRequestedTradeMessage(param1: ICustomDataInput): void;
}
export = ExchangeRequestedTradeMessage;

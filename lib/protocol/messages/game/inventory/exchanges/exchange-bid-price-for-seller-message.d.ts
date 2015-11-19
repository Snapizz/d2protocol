/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import ExchangeBidPriceMessage = require('./exchange-bid-price-message');
declare class ExchangeBidPriceForSellerMessage extends ExchangeBidPriceMessage {
    static ID: number;
    allIdentical: boolean;
    minimalPrices: number[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ExchangeBidPriceForSellerMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ExchangeBidPriceForSellerMessage(param1: ICustomDataInput): void;
}
export = ExchangeBidPriceForSellerMessage;

/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import ExchangeBidHouseInListAddedMessage = require('./exchange-bid-house-in-list-added-message');
declare class ExchangeBidHouseInListUpdatedMessage extends ExchangeBidHouseInListAddedMessage {
    static ID: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ExchangeBidHouseInListUpdatedMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ExchangeBidHouseInListUpdatedMessage(param1: ICustomDataInput): void;
}
export = ExchangeBidHouseInListUpdatedMessage;

/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import ObjectItemToSell = require('./object-item-to-sell');
declare class ObjectItemToSellInBid extends ObjectItemToSell implements INetworkType {
    static ID: number;
    unsoldDelay: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ObjectItemToSellInBid(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ObjectItemToSellInBid(param1: ICustomDataInput): void;
}
export = ObjectItemToSellInBid;

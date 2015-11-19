/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import ObjectEffect = require('./effects/object-effect');
declare class BidExchangerObjectInfo implements INetworkType {
    static ID: number;
    objectUID: number;
    effects: ObjectEffect[];
    prices: number[];
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_BidExchangerObjectInfo(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_BidExchangerObjectInfo(param1: ICustomDataInput): void;
}
export = BidExchangerObjectInfo;

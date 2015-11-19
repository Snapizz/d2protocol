/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
declare class SellerBuyerDescriptor implements INetworkType {
    static ID: number;
    quantities: number[];
    types: number[];
    taxPercentage: number;
    taxModificationPercentage: number;
    maxItemLevel: number;
    maxItemPerAccount: number;
    npcContextualId: number;
    unsoldDelay: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_SellerBuyerDescriptor(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_SellerBuyerDescriptor(param1: ICustomDataInput): void;
}
export = SellerBuyerDescriptor;

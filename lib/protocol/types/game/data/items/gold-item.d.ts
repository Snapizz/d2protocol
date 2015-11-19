/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import Item = require('./item');
declare class GoldItem extends Item implements INetworkType {
    static ID: number;
    sum: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GoldItem(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GoldItem(param1: ICustomDataInput): void;
}
export = GoldItem;

/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import ObjectItemMinimalInformation = require('./object-item-minimal-information');
declare class ObjectItemToSellInNpcShop extends ObjectItemMinimalInformation implements INetworkType {
    static ID: number;
    objectPrice: number;
    buyCriterion: string;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ObjectItemToSellInNpcShop(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ObjectItemToSellInNpcShop(param1: ICustomDataInput): void;
}
export = ObjectItemToSellInNpcShop;

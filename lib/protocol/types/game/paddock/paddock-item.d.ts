/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import ObjectItemInRolePlay = require('../context/roleplay/object-item-in-role-play');
import ItemDurability = require('../mount/item-durability');
declare class PaddockItem extends ObjectItemInRolePlay implements INetworkType {
    static ID: number;
    durability: ItemDurability;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_PaddockItem(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_PaddockItem(param1: ICustomDataInput): void;
}
export = PaddockItem;

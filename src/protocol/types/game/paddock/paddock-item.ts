/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import ObjectItemInRolePlay = require('../context/roleplay/object-item-in-role-play');
import ItemDurability = require('../mount/item-durability');

class PaddockItem extends ObjectItemInRolePlay implements INetworkType {
    public static ID: number = 185;

    durability: ItemDurability;

    constructor() {
        this.durability = new ItemDurability();
        super();
    }

    public getTypeId(): number {
        return PaddockItem.ID;
    }

    public reset(): void {
        this.durability = new ItemDurability();
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_PaddockItem(param1);
    }

    public serializeAs_PaddockItem(param1: ICustomDataOutput): void {
        super.serializeAs_ObjectItemInRolePlay(param1);
        this.durability.serializeAs_ItemDurability(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PaddockItem(param1);
    }

    public deserializeAs_PaddockItem(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.durability = new ItemDurability();
        this.durability.deserialize(param1);

    }
}

export = PaddockItem;

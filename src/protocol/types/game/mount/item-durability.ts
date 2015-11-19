/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class ItemDurability implements INetworkType {
    public static ID: number = 168;

    durability: number;
    durabilityMax: number;

    constructor() {
        this.durability = 0;
        this.durabilityMax = 0;
    }

    public getTypeId(): number {
        return ItemDurability.ID;
    }

    public reset(): void {
        this.durability = 0;
        this.durabilityMax = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ItemDurability(param1);
    }

    public serializeAs_ItemDurability(param1: ICustomDataOutput): void {
        param1.writeShort(this.durability);
        param1.writeShort(this.durabilityMax);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ItemDurability(param1);
    }

    public deserializeAs_ItemDurability(param1: ICustomDataInput): void {
        this.durability = param1.readShort();
        this.durabilityMax = param1.readShort();

    }
}

export = ItemDurability;

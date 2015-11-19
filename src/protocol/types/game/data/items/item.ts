/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class Item implements INetworkType {
    public static ID: number = 7;



    constructor() {

    }

    public getTypeId(): number {
        return Item.ID;
    }

    public reset(): void {

    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_Item(param1);
    }

    public serializeAs_Item(param1: ICustomDataOutput): void {

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_Item(param1);
    }

    public deserializeAs_Item(param1: ICustomDataInput): void {

    }
}

export = Item;

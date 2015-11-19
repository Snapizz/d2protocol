/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import ShortcutObject = require('./shortcut-object');

class ShortcutObjectItem extends ShortcutObject implements INetworkType {
    public static ID: number = 371;

    itemUID: number;
    itemGID: number;

    constructor() {
        this.itemUID = 0;
        this.itemGID = 0;
        super();
    }

    public getTypeId(): number {
        return ShortcutObjectItem.ID;
    }

    public reset(): void {
        this.itemUID = 0;
        this.itemGID = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ShortcutObjectItem(param1);
    }

    public serializeAs_ShortcutObjectItem(param1: ICustomDataOutput): void {
        super.serializeAs_ShortcutObject(param1);
        param1.writeInt(this.itemUID);
        param1.writeInt(this.itemGID);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ShortcutObjectItem(param1);
    }

    public deserializeAs_ShortcutObjectItem(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.itemUID = param1.readInt();
        this.itemGID = param1.readInt();

    }
}

export = ShortcutObjectItem;

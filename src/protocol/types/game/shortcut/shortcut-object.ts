/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import Shortcut = require('./shortcut');

class ShortcutObject extends Shortcut implements INetworkType {
    public static ID: number = 367;



    constructor() {

        super();
    }

    public getTypeId(): number {
        return ShortcutObject.ID;
    }

    public reset(): void {

    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ShortcutObject(param1);
    }

    public serializeAs_ShortcutObject(param1: ICustomDataOutput): void {
        super.serializeAs_Shortcut(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ShortcutObject(param1);
    }

    public deserializeAs_ShortcutObject(param1: ICustomDataInput): void {
        super.deserialize(param1);

    }
}

export = ShortcutObject;

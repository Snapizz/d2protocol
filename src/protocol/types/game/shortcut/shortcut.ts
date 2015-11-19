/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class Shortcut implements INetworkType {
    public static ID: number = 369;

    slot: number;

    constructor() {
        this.slot = 0;
    }

    public getTypeId(): number {
        return Shortcut.ID;
    }

    public reset(): void {
        this.slot = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_Shortcut(param1);
    }

    public serializeAs_Shortcut(param1: ICustomDataOutput): void {
        if (this.slot < 0 || this.slot > 99) {
            throw new Error('Forbidden value (' + this.slot + ') on element slot.');
        }
        param1.writeByte(this.slot);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_Shortcut(param1);
    }

    public deserializeAs_Shortcut(param1: ICustomDataInput): void {
        this.slot = param1.readByte();
        if (this.slot < 0 || this.slot > 99) {
            throw new Error('Forbidden value (' + this.slot + ') on element of Shortcut.slot.');
        }

    }
}

export = Shortcut;

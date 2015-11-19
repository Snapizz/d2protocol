/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class UpdateMountBoost implements INetworkType {
    public static ID: number = 356;

    type: number;

    constructor() {
        this.type = 0;
    }

    public getTypeId(): number {
        return UpdateMountBoost.ID;
    }

    public reset(): void {
        this.type = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_UpdateMountBoost(param1);
    }

    public serializeAs_UpdateMountBoost(param1: ICustomDataOutput): void {
        param1.writeByte(this.type);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_UpdateMountBoost(param1);
    }

    public deserializeAs_UpdateMountBoost(param1: ICustomDataInput): void {
        this.type = param1.readByte();
        if (this.type < 0) {
            throw new Error('Forbidden value (' + this.type + ') on element of UpdateMountBoost.type.');
        }

    }
}

export = UpdateMountBoost;

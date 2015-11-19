/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class AchievementObjective implements INetworkType {
    public static ID: number = 404;

    id: number;
    maxValue: number;

    constructor() {
        this.id = 0;
        this.maxValue = 0;
    }

    public getTypeId(): number {
        return AchievementObjective.ID;
    }

    public reset(): void {
        this.id = 0;
        this.maxValue = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_AchievementObjective(param1);
    }

    public serializeAs_AchievementObjective(param1: ICustomDataOutput): void {
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element id.');
        }
        param1.writeVarInt(this.id);
        if (this.maxValue < 0) {
            throw new Error('Forbidden value (' + this.maxValue + ') on element maxValue.');
        }
        param1.writeVarShort(this.maxValue);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AchievementObjective(param1);
    }

    public deserializeAs_AchievementObjective(param1: ICustomDataInput): void {
        this.id = param1.readVarUhInt();
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element of AchievementObjective.id.');
        }
        this.maxValue = param1.readVarUhShort();
        if (this.maxValue < 0) {
            throw new Error('Forbidden value (' + this.maxValue + ') on element of AchievementObjective.maxValue.');
        }

    }
}

export = AchievementObjective;

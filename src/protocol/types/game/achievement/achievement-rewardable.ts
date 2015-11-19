/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class AchievementRewardable implements INetworkType {
    public static ID: number = 412;

    id: number;
    finishedlevel: number;

    constructor() {
        this.id = 0;
        this.finishedlevel = 0;
    }

    public getTypeId(): number {
        return AchievementRewardable.ID;
    }

    public reset(): void {
        this.id = 0;
        this.finishedlevel = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_AchievementRewardable(param1);
    }

    public serializeAs_AchievementRewardable(param1: ICustomDataOutput): void {
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element id.');
        }
        param1.writeVarShort(this.id);
        if (this.finishedlevel < 0 || this.finishedlevel > 200) {
            throw new Error('Forbidden value (' + this.finishedlevel + ') on element finishedlevel.');
        }
        param1.writeByte(this.finishedlevel);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AchievementRewardable(param1);
    }

    public deserializeAs_AchievementRewardable(param1: ICustomDataInput): void {
        this.id = param1.readVarUhShort();
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element of AchievementRewardable.id.');
        }
        this.finishedlevel = param1.readUnsignedByte();
        if (this.finishedlevel < 0 || this.finishedlevel > 200) {
            throw new Error('Forbidden value (' + this.finishedlevel + ') on element of AchievementRewardable.finishedlevel.');
        }

    }
}

export = AchievementRewardable;

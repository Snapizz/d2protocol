/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class StatisticData implements INetworkType {
    public static ID: number = 484;

    actionId: number;

    constructor() {
        this.actionId = 0;
    }

    public getTypeId(): number {
        return StatisticData.ID;
    }

    public reset(): void {
        this.actionId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_StatisticData(param1);
    }

    public serializeAs_StatisticData(param1: ICustomDataOutput): void {
        if (this.actionId < 0) {
            throw new Error('Forbidden value (' + this.actionId + ') on element actionId.');
        }
        param1.writeVarShort(this.actionId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_StatisticData(param1);
    }

    public deserializeAs_StatisticData(param1: ICustomDataInput): void {
        this.actionId = param1.readVarUhShort();
        if (this.actionId < 0) {
            throw new Error('Forbidden value (' + this.actionId + ') on element of StatisticData.actionId.');
        }

    }
}

export = StatisticData;

/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import StatisticData = require('./statistic-data');

class StatisticDataShort extends StatisticData implements INetworkType {
    public static ID: number = 488;

    value: number;

    constructor() {
        this.value = 0;
        super();
    }

    public getTypeId(): number {
        return StatisticDataShort.ID;
    }

    public reset(): void {
        this.value = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_StatisticDataShort(param1);
    }

    public serializeAs_StatisticDataShort(param1: ICustomDataOutput): void {
        super.serializeAs_StatisticData(param1);
        param1.writeShort(this.value);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_StatisticDataShort(param1);
    }

    public deserializeAs_StatisticDataShort(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.value = param1.readShort();

    }
}

export = StatisticDataShort;

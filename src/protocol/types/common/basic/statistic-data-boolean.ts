/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import StatisticData = require('./statistic-data');

class StatisticDataBoolean extends StatisticData implements INetworkType {
    public static ID: number = 482;

    value: boolean;

    constructor() {
        this.value = false;
        super();
    }

    public getTypeId(): number {
        return StatisticDataBoolean.ID;
    }

    public reset(): void {
        this.value = false;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_StatisticDataBoolean(param1);
    }

    public serializeAs_StatisticDataBoolean(param1: ICustomDataOutput): void {
        super.serializeAs_StatisticData(param1);
        param1.writeBoolean(this.value);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_StatisticDataBoolean(param1);
    }

    public deserializeAs_StatisticDataBoolean(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.value = param1.readBoolean();

    }
}

export = StatisticDataBoolean;

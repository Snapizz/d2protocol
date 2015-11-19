/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import StatisticData = require('./statistic-data');

class StatisticDataString extends StatisticData implements INetworkType {
    public static ID: number = 487;

    value: string;

    constructor() {
        this.value = '';
        super();
    }

    public getTypeId(): number {
        return StatisticDataString.ID;
    }

    public reset(): void {
        this.value = '';
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_StatisticDataString(param1);
    }

    public serializeAs_StatisticDataString(param1: ICustomDataOutput): void {
        super.serializeAs_StatisticData(param1);
        param1.writeUTF(this.value);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_StatisticDataString(param1);
    }

    public deserializeAs_StatisticDataString(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.value = param1.readUTF();

    }
}

export = StatisticDataString;

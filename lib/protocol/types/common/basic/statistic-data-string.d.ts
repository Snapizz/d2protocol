/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import StatisticData = require('./statistic-data');
declare class StatisticDataString extends StatisticData implements INetworkType {
    static ID: number;
    value: string;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_StatisticDataString(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_StatisticDataString(param1: ICustomDataInput): void;
}
export = StatisticDataString;

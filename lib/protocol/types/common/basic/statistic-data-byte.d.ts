/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import StatisticData = require('./statistic-data');
declare class StatisticDataByte extends StatisticData implements INetworkType {
    static ID: number;
    value: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_StatisticDataByte(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_StatisticDataByte(param1: ICustomDataInput): void;
}
export = StatisticDataByte;

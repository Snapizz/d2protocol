/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import AchievementObjective = require('./achievement-objective');
declare class AchievementStartedObjective extends AchievementObjective implements INetworkType {
    static ID: number;
    value: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_AchievementStartedObjective(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_AchievementStartedObjective(param1: ICustomDataInput): void;
}
export = AchievementStartedObjective;

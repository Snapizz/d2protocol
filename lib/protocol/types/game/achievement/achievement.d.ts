/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import AchievementObjective = require('./achievement-objective');
import AchievementStartedObjective = require('./achievement-started-objective');
declare class Achievement implements INetworkType {
    static ID: number;
    id: number;
    finishedObjective: AchievementObjective[];
    startedObjectives: AchievementStartedObjective[];
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_Achievement(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_Achievement(param1: ICustomDataInput): void;
}
export = Achievement;

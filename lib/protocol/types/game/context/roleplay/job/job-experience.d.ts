/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
declare class JobExperience implements INetworkType {
    static ID: number;
    jobId: number;
    jobLevel: number;
    jobXP: number;
    jobXpLevelFloor: number;
    jobXpNextLevelFloor: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_JobExperience(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_JobExperience(param1: ICustomDataInput): void;
}
export = JobExperience;

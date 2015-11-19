/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import SkillActionDescription = require('../../../interactive/skill/skill-action-description');
declare class JobDescription implements INetworkType {
    static ID: number;
    jobId: number;
    skills: SkillActionDescription[];
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_JobDescription(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_JobDescription(param1: ICustomDataInput): void;
}
export = JobDescription;

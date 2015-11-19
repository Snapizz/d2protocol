/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
declare class JobCrafterDirectoryEntryJobInfo implements INetworkType {
    static ID: number;
    jobId: number;
    jobLevel: number;
    free: boolean;
    minLevel: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_JobCrafterDirectoryEntryJobInfo(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_JobCrafterDirectoryEntryJobInfo(param1: ICustomDataInput): void;
}
export = JobCrafterDirectoryEntryJobInfo;

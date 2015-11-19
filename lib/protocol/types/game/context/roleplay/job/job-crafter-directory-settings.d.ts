/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
declare class JobCrafterDirectorySettings implements INetworkType {
    static ID: number;
    jobId: number;
    minLevel: number;
    free: boolean;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_JobCrafterDirectorySettings(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_JobCrafterDirectorySettings(param1: ICustomDataInput): void;
}
export = JobCrafterDirectorySettings;

/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import JobCrafterDirectoryEntryPlayerInfo = require('./job-crafter-directory-entry-player-info');
import JobCrafterDirectoryEntryJobInfo = require('./job-crafter-directory-entry-job-info');
declare class JobCrafterDirectoryListEntry implements INetworkType {
    static ID: number;
    playerInfo: JobCrafterDirectoryEntryPlayerInfo;
    jobInfo: JobCrafterDirectoryEntryJobInfo;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_JobCrafterDirectoryListEntry(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_JobCrafterDirectoryListEntry(param1: ICustomDataInput): void;
}
export = JobCrafterDirectoryListEntry;

/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import JobCrafterDirectoryEntryPlayerInfo = require('./job-crafter-directory-entry-player-info');
import JobCrafterDirectoryEntryJobInfo = require('./job-crafter-directory-entry-job-info');

class JobCrafterDirectoryListEntry implements INetworkType {
    public static ID: number = 196;

    playerInfo: JobCrafterDirectoryEntryPlayerInfo;
    jobInfo: JobCrafterDirectoryEntryJobInfo;

    constructor() {
        this.playerInfo = new JobCrafterDirectoryEntryPlayerInfo();
        this.jobInfo = new JobCrafterDirectoryEntryJobInfo();
    }

    public getTypeId(): number {
        return JobCrafterDirectoryListEntry.ID;
    }

    public reset(): void {
        this.playerInfo = new JobCrafterDirectoryEntryPlayerInfo();
        this.jobInfo = new JobCrafterDirectoryEntryJobInfo();
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_JobCrafterDirectoryListEntry(param1);
    }

    public serializeAs_JobCrafterDirectoryListEntry(param1: ICustomDataOutput): void {
        this.playerInfo.serializeAs_JobCrafterDirectoryEntryPlayerInfo(param1);
        this.jobInfo.serializeAs_JobCrafterDirectoryEntryJobInfo(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_JobCrafterDirectoryListEntry(param1);
    }

    public deserializeAs_JobCrafterDirectoryListEntry(param1: ICustomDataInput): void {
        this.playerInfo = new JobCrafterDirectoryEntryPlayerInfo();
        this.playerInfo.deserialize(param1);
        this.jobInfo = new JobCrafterDirectoryEntryJobInfo();
        this.jobInfo.deserialize(param1);

    }
}

export = JobCrafterDirectoryListEntry;

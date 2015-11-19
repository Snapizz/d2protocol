/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class JobCrafterDirectoryEntryJobInfo implements INetworkType {
    public static ID: number = 195;

    jobId: number;
    jobLevel: number;
    free: boolean;
    minLevel: number;

    constructor() {
        this.jobId = 0;
        this.jobLevel = 0;
        this.free = false;
        this.minLevel = 0;
    }

    public getTypeId(): number {
        return JobCrafterDirectoryEntryJobInfo.ID;
    }

    public reset(): void {
        this.jobId = 0;
        this.jobLevel = 0;
        this.free = false;
        this.minLevel = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_JobCrafterDirectoryEntryJobInfo(param1);
    }

    public serializeAs_JobCrafterDirectoryEntryJobInfo(param1: ICustomDataOutput): void {
        if (this.jobId < 0) {
            throw new Error('Forbidden value (' + this.jobId + ') on element jobId.');
        }
        param1.writeByte(this.jobId);
        if (this.jobLevel < 1 || this.jobLevel > 200) {
            throw new Error('Forbidden value (' + this.jobLevel + ') on element jobLevel.');
        }
        param1.writeByte(this.jobLevel);
        param1.writeBoolean(this.free);
        if (this.minLevel < 0 || this.minLevel > 255) {
            throw new Error('Forbidden value (' + this.minLevel + ') on element minLevel.');
        }
        param1.writeByte(this.minLevel);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_JobCrafterDirectoryEntryJobInfo(param1);
    }

    public deserializeAs_JobCrafterDirectoryEntryJobInfo(param1: ICustomDataInput): void {
        this.jobId = param1.readByte();
        if (this.jobId < 0) {
            throw new Error('Forbidden value (' + this.jobId + ') on element of JobCrafterDirectoryEntryJobInfo.jobId.');
        }
        this.jobLevel = param1.readUnsignedByte();
        if (this.jobLevel < 1 || this.jobLevel > 200) {
            throw new Error('Forbidden value (' + this.jobLevel + ') on element of JobCrafterDirectoryEntryJobInfo.jobLevel.');
        }
        this.free = param1.readBoolean();
        this.minLevel = param1.readUnsignedByte();
        if (this.minLevel < 0 || this.minLevel > 255) {
            throw new Error('Forbidden value (' + this.minLevel + ') on element of JobCrafterDirectoryEntryJobInfo.minLevel.');
        }

    }
}

export = JobCrafterDirectoryEntryJobInfo;

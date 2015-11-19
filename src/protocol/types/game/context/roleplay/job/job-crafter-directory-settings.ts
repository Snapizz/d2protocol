/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class JobCrafterDirectorySettings implements INetworkType {
    public static ID: number = 97;

    jobId: number;
    minLevel: number;
    free: boolean;

    constructor() {
        this.jobId = 0;
        this.minLevel = 0;
        this.free = false;
    }

    public getTypeId(): number {
        return JobCrafterDirectorySettings.ID;
    }

    public reset(): void {
        this.jobId = 0;
        this.minLevel = 0;
        this.free = false;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_JobCrafterDirectorySettings(param1);
    }

    public serializeAs_JobCrafterDirectorySettings(param1: ICustomDataOutput): void {
        if (this.jobId < 0) {
            throw new Error('Forbidden value (' + this.jobId + ') on element jobId.');
        }
        param1.writeByte(this.jobId);
        if (this.minLevel < 0 || this.minLevel > 255) {
            throw new Error('Forbidden value (' + this.minLevel + ') on element minLevel.');
        }
        param1.writeByte(this.minLevel);
        param1.writeBoolean(this.free);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_JobCrafterDirectorySettings(param1);
    }

    public deserializeAs_JobCrafterDirectorySettings(param1: ICustomDataInput): void {
        this.jobId = param1.readByte();
        if (this.jobId < 0) {
            throw new Error('Forbidden value (' + this.jobId + ') on element of JobCrafterDirectorySettings.jobId.');
        }
        this.minLevel = param1.readUnsignedByte();
        if (this.minLevel < 0 || this.minLevel > 255) {
            throw new Error('Forbidden value (' + this.minLevel + ') on element of JobCrafterDirectorySettings.minLevel.');
        }
        this.free = param1.readBoolean();

    }
}

export = JobCrafterDirectorySettings;

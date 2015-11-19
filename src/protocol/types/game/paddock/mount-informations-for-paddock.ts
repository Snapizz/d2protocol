/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class MountInformationsForPaddock implements INetworkType {
    public static ID: number = 184;

    modelId: number;
    name: string;
    ownerName: string;

    constructor() {
        this.modelId = 0;
        this.name = '';
        this.ownerName = '';
    }

    public getTypeId(): number {
        return MountInformationsForPaddock.ID;
    }

    public reset(): void {
        this.modelId = 0;
        this.name = '';
        this.ownerName = '';
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_MountInformationsForPaddock(param1);
    }

    public serializeAs_MountInformationsForPaddock(param1: ICustomDataOutput): void {
        if (this.modelId < 0) {
            throw new Error('Forbidden value (' + this.modelId + ') on element modelId.');
        }
        param1.writeByte(this.modelId);
        param1.writeUTF(this.name);
        param1.writeUTF(this.ownerName);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_MountInformationsForPaddock(param1);
    }

    public deserializeAs_MountInformationsForPaddock(param1: ICustomDataInput): void {
        this.modelId = param1.readByte();
        if (this.modelId < 0) {
            throw new Error('Forbidden value (' + this.modelId + ') on element of MountInformationsForPaddock.modelId.');
        }
        this.name = param1.readUTF();
        this.ownerName = param1.readUTF();

    }
}

export = MountInformationsForPaddock;

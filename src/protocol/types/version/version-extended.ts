/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../boolean-byte-wrapper');
import Version = require('./version');

class VersionExtended extends Version implements INetworkType {
    public static ID: number = 393;

    install: number;
    technology: number;

    constructor() {
        this.install = 0;
        this.technology = 0;
        super();
    }

    public getTypeId(): number {
        return VersionExtended.ID;
    }

    public reset(): void {
        this.install = 0;
        this.technology = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_VersionExtended(param1);
    }

    public serializeAs_VersionExtended(param1: ICustomDataOutput): void {
        super.serializeAs_Version(param1);
        param1.writeByte(this.install);
        param1.writeByte(this.technology);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_VersionExtended(param1);
    }

    public deserializeAs_VersionExtended(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.install = param1.readByte();
        if (this.install < 0) {
            throw new Error('Forbidden value (' + this.install + ') on element of VersionExtended.install.');
        }
        this.technology = param1.readByte();
        if (this.technology < 0) {
            throw new Error('Forbidden value (' + this.technology + ') on element of VersionExtended.technology.');
        }

    }
}

export = VersionExtended;

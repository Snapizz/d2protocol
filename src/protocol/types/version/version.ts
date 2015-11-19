/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../boolean-byte-wrapper');

class Version implements INetworkType {
    public static ID: number = 11;

    major: number;
    minor: number;
    release: number;
    revision: number;
    patch: number;
    buildType: number;

    constructor() {
        this.major = 0;
        this.minor = 0;
        this.release = 0;
        this.revision = 0;
        this.patch = 0;
        this.buildType = 0;
    }

    public getTypeId(): number {
        return Version.ID;
    }

    public reset(): void {
        this.major = 0;
        this.minor = 0;
        this.release = 0;
        this.revision = 0;
        this.patch = 0;
        this.buildType = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_Version(param1);
    }

    public serializeAs_Version(param1: ICustomDataOutput): void {
        if (this.major < 0) {
            throw new Error('Forbidden value (' + this.major + ') on element major.');
        }
        param1.writeByte(this.major);
        if (this.minor < 0) {
            throw new Error('Forbidden value (' + this.minor + ') on element minor.');
        }
        param1.writeByte(this.minor);
        if (this.release < 0) {
            throw new Error('Forbidden value (' + this.release + ') on element release.');
        }
        param1.writeByte(this.release);
        if (this.revision < 0) {
            throw new Error('Forbidden value (' + this.revision + ') on element revision.');
        }
        param1.writeInt(this.revision);
        if (this.patch < 0) {
            throw new Error('Forbidden value (' + this.patch + ') on element patch.');
        }
        param1.writeByte(this.patch);
        param1.writeByte(this.buildType);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_Version(param1);
    }

    public deserializeAs_Version(param1: ICustomDataInput): void {
        this.major = param1.readByte();
        if (this.major < 0) {
            throw new Error('Forbidden value (' + this.major + ') on element of Version.major.');
        }
        this.minor = param1.readByte();
        if (this.minor < 0) {
            throw new Error('Forbidden value (' + this.minor + ') on element of Version.minor.');
        }
        this.release = param1.readByte();
        if (this.release < 0) {
            throw new Error('Forbidden value (' + this.release + ') on element of Version.release.');
        }
        this.revision = param1.readInt();
        if (this.revision < 0) {
            throw new Error('Forbidden value (' + this.revision + ') on element of Version.revision.');
        }
        this.patch = param1.readByte();
        if (this.patch < 0) {
            throw new Error('Forbidden value (' + this.patch + ') on element of Version.patch.');
        }
        this.buildType = param1.readByte();
        if (this.buildType < 0) {
            throw new Error('Forbidden value (' + this.buildType + ') on element of Version.buildType.');
        }

    }
}

export = Version;

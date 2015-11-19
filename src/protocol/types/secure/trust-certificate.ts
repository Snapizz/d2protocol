/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../boolean-byte-wrapper');

class TrustCertificate implements INetworkType {
    public static ID: number = 377;

    id: number;
    hash: string;

    constructor() {
        this.id = 0;
        this.hash = '';
    }

    public getTypeId(): number {
        return TrustCertificate.ID;
    }

    public reset(): void {
        this.id = 0;
        this.hash = '';
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_TrustCertificate(param1);
    }

    public serializeAs_TrustCertificate(param1: ICustomDataOutput): void {
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element id.');
        }
        param1.writeInt(this.id);
        param1.writeUTF(this.hash);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_TrustCertificate(param1);
    }

    public deserializeAs_TrustCertificate(param1: ICustomDataInput): void {
        this.id = param1.readInt();
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element of TrustCertificate.id.');
        }
        this.hash = param1.readUTF();

    }
}

export = TrustCertificate;

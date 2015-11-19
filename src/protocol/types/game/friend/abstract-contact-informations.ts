/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class AbstractContactInformations implements INetworkType {
    public static ID: number = 380;

    accountId: number;
    accountName: string;

    constructor() {
        this.accountId = 0;
        this.accountName = '';
    }

    public getTypeId(): number {
        return AbstractContactInformations.ID;
    }

    public reset(): void {
        this.accountId = 0;
        this.accountName = '';
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_AbstractContactInformations(param1);
    }

    public serializeAs_AbstractContactInformations(param1: ICustomDataOutput): void {
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element accountId.');
        }
        param1.writeInt(this.accountId);
        param1.writeUTF(this.accountName);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AbstractContactInformations(param1);
    }

    public deserializeAs_AbstractContactInformations(param1: ICustomDataInput): void {
        this.accountId = param1.readInt();
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element of AbstractContactInformations.accountId.');
        }
        this.accountName = param1.readUTF();

    }
}

export = AbstractContactInformations;

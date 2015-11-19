/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class ServerSessionConstant implements INetworkType {
    public static ID: number = 430;

    id: number;

    constructor() {
        this.id = 0;
    }

    public getTypeId(): number {
        return ServerSessionConstant.ID;
    }

    public reset(): void {
        this.id = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ServerSessionConstant(param1);
    }

    public serializeAs_ServerSessionConstant(param1: ICustomDataOutput): void {
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element id.');
        }
        param1.writeVarShort(this.id);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ServerSessionConstant(param1);
    }

    public deserializeAs_ServerSessionConstant(param1: ICustomDataInput): void {
        this.id = param1.readVarUhShort();
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element of ServerSessionConstant.id.');
        }

    }
}

export = ServerSessionConstant;

/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import ServerSessionConstant = require('./server-session-constant');

class ServerSessionConstantLong extends ServerSessionConstant implements INetworkType {
    public static ID: number = 429;

    value: number;

    constructor() {
        this.value = 0;
        super();
    }

    public getTypeId(): number {
        return ServerSessionConstantLong.ID;
    }

    public reset(): void {
        this.value = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ServerSessionConstantLong(param1);
    }

    public serializeAs_ServerSessionConstantLong(param1: ICustomDataOutput): void {
        super.serializeAs_ServerSessionConstant(param1);
        if (this.value < -9.007199254740992E15 || this.value > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.value + ') on element value.');
        }
        param1.writeDouble(this.value);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ServerSessionConstantLong(param1);
    }

    public deserializeAs_ServerSessionConstantLong(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.value = param1.readDouble();
        if (this.value < -9.007199254740992E15 || this.value > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.value + ') on element of ServerSessionConstantLong.value.');
        }

    }
}

export = ServerSessionConstantLong;

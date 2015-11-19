/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import ServerSessionConstant = require('./server-session-constant');

class ServerSessionConstantInteger extends ServerSessionConstant implements INetworkType {
    public static ID: number = 433;

    value: number;

    constructor() {
        this.value = 0;
        super();
    }

    public getTypeId(): number {
        return ServerSessionConstantInteger.ID;
    }

    public reset(): void {
        this.value = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ServerSessionConstantInteger(param1);
    }

    public serializeAs_ServerSessionConstantInteger(param1: ICustomDataOutput): void {
        super.serializeAs_ServerSessionConstant(param1);
        param1.writeInt(this.value);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ServerSessionConstantInteger(param1);
    }

    public deserializeAs_ServerSessionConstantInteger(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.value = param1.readInt();

    }
}

export = ServerSessionConstantInteger;

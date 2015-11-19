/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import ServerSessionConstant = require('./server-session-constant');

class ServerSessionConstantString extends ServerSessionConstant implements INetworkType {
    public static ID: number = 436;

    value: string;

    constructor() {
        this.value = '';
        super();
    }

    public getTypeId(): number {
        return ServerSessionConstantString.ID;
    }

    public reset(): void {
        this.value = '';
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ServerSessionConstantString(param1);
    }

    public serializeAs_ServerSessionConstantString(param1: ICustomDataOutput): void {
        super.serializeAs_ServerSessionConstant(param1);
        param1.writeUTF(this.value);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ServerSessionConstantString(param1);
    }

    public deserializeAs_ServerSessionConstantString(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.value = param1.readUTF();

    }
}

export = ServerSessionConstantString;

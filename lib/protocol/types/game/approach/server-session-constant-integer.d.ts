/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import ServerSessionConstant = require('./server-session-constant');
declare class ServerSessionConstantInteger extends ServerSessionConstant implements INetworkType {
    static ID: number;
    value: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ServerSessionConstantInteger(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ServerSessionConstantInteger(param1: ICustomDataInput): void;
}
export = ServerSessionConstantInteger;

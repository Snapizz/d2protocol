/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../custom-data-wrapper';
declare class Version implements INetworkType {
    static ID: number;
    major: number;
    minor: number;
    release: number;
    revision: number;
    patch: number;
    buildType: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_Version(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_Version(param1: ICustomDataInput): void;
}
export = Version;

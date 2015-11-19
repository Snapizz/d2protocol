/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../custom-data-wrapper';
import Version = require('./version');
declare class VersionExtended extends Version implements INetworkType {
    static ID: number;
    install: number;
    technology: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_VersionExtended(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_VersionExtended(param1: ICustomDataInput): void;
}
export = VersionExtended;

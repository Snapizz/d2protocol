/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../custom-data-wrapper';
declare class TrustCertificate implements INetworkType {
    static ID: number;
    id: number;
    hash: string;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_TrustCertificate(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_TrustCertificate(param1: ICustomDataInput): void;
}
export = TrustCertificate;

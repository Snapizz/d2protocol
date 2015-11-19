/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
declare class PrismSubareaEmptyInfo implements INetworkType {
    static ID: number;
    subAreaId: number;
    allianceId: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_PrismSubareaEmptyInfo(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_PrismSubareaEmptyInfo(param1: ICustomDataInput): void;
}
export = PrismSubareaEmptyInfo;

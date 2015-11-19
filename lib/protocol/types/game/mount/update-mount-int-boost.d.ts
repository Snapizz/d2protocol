/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import UpdateMountBoost = require('./update-mount-boost');
declare class UpdateMountIntBoost extends UpdateMountBoost implements INetworkType {
    static ID: number;
    value: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_UpdateMountIntBoost(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_UpdateMountIntBoost(param1: ICustomDataInput): void;
}
export = UpdateMountIntBoost;

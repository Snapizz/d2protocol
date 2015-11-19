/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
declare class MountInformationsForPaddock implements INetworkType {
    static ID: number;
    modelId: number;
    name: string;
    ownerName: string;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_MountInformationsForPaddock(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_MountInformationsForPaddock(param1: ICustomDataInput): void;
}
export = MountInformationsForPaddock;

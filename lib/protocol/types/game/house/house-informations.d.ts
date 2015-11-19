/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
declare class HouseInformations implements INetworkType {
    static ID: number;
    houseId: number;
    doorsOnMap: number[];
    ownerName: string;
    isOnSale: boolean;
    isSaleLocked: boolean;
    modelId: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_HouseInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_HouseInformations(param1: ICustomDataInput): void;
}
export = HouseInformations;

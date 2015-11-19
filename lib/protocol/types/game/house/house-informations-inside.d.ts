/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
declare class HouseInformationsInside implements INetworkType {
    static ID: number;
    houseId: number;
    modelId: number;
    ownerId: number;
    ownerName: string;
    worldX: number;
    worldY: number;
    price: number;
    isLocked: boolean;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_HouseInformationsInside(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_HouseInformationsInside(param1: ICustomDataInput): void;
}
export = HouseInformationsInside;

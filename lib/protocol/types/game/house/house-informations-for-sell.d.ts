/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
declare class HouseInformationsForSell implements INetworkType {
    static ID: number;
    modelId: number;
    ownerName: string;
    ownerConnected: boolean;
    worldX: number;
    worldY: number;
    subAreaId: number;
    nbRoom: number;
    nbChest: number;
    skillListIds: number[];
    isLocked: boolean;
    price: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_HouseInformationsForSell(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_HouseInformationsForSell(param1: ICustomDataInput): void;
}
export = HouseInformationsForSell;

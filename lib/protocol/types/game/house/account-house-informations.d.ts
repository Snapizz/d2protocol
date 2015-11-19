/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
declare class AccountHouseInformations implements INetworkType {
    static ID: number;
    houseId: number;
    modelId: number;
    worldX: number;
    worldY: number;
    mapId: number;
    subAreaId: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_AccountHouseInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_AccountHouseInformations(param1: ICustomDataInput): void;
}
export = AccountHouseInformations;

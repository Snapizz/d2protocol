/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
declare class PaddockInformationsForSell implements INetworkType {
    static ID: number;
    guildOwner: string;
    worldX: number;
    worldY: number;
    subAreaId: number;
    nbMount: number;
    nbObject: number;
    price: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_PaddockInformationsForSell(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_PaddockInformationsForSell(param1: ICustomDataInput): void;
}
export = PaddockInformationsForSell;

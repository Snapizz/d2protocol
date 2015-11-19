/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
declare class HouseInformationsForGuild implements INetworkType {
    static ID: number;
    houseId: number;
    modelId: number;
    ownerName: string;
    worldX: number;
    worldY: number;
    mapId: number;
    subAreaId: number;
    skillListIds: number[];
    guildshareParams: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_HouseInformationsForGuild(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_HouseInformationsForGuild(param1: ICustomDataInput): void;
}
export = HouseInformationsForGuild;

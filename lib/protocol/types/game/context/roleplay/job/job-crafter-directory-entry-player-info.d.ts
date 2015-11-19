/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import PlayerStatus = require('../../../character/status/player-status');
declare class JobCrafterDirectoryEntryPlayerInfo implements INetworkType {
    static ID: number;
    playerId: number;
    playerName: string;
    alignmentSide: number;
    breed: number;
    sex: boolean;
    isInWorkshop: boolean;
    worldX: number;
    worldY: number;
    mapId: number;
    subAreaId: number;
    status: PlayerStatus;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_JobCrafterDirectoryEntryPlayerInfo(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_JobCrafterDirectoryEntryPlayerInfo(param1: ICustomDataInput): void;
}
export = JobCrafterDirectoryEntryPlayerInfo;

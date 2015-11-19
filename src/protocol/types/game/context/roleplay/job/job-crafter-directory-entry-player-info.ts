/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import PlayerStatus = require('../../../character/status/player-status');
import PlayableBreedEnum = require('../../../../../enums/playable-breed-enum');
import ProtocolTypeManager = require('../../../../../protocol-type-manager');

class JobCrafterDirectoryEntryPlayerInfo implements INetworkType {
    public static ID: number = 194;

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

    constructor() {
        this.playerId = 0;
        this.playerName = '';
        this.alignmentSide = 0;
        this.breed = 0;
        this.sex = false;
        this.isInWorkshop = false;
        this.worldX = 0;
        this.worldY = 0;
        this.mapId = 0;
        this.subAreaId = 0;
        this.status = new PlayerStatus();
    }

    public getTypeId(): number {
        return JobCrafterDirectoryEntryPlayerInfo.ID;
    }

    public reset(): void {
        this.playerId = 0;
        this.playerName = '';
        this.alignmentSide = 0;
        this.breed = 0;
        this.sex = false;
        this.isInWorkshop = false;
        this.worldX = 0;
        this.worldY = 0;
        this.mapId = 0;
        this.subAreaId = 0;
        this.status = new PlayerStatus();
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_JobCrafterDirectoryEntryPlayerInfo(param1);
    }

    public serializeAs_JobCrafterDirectoryEntryPlayerInfo(param1: ICustomDataOutput): void {
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
        }
        param1.writeVarInt(this.playerId);
        param1.writeUTF(this.playerName);
        param1.writeByte(this.alignmentSide);
        param1.writeByte(this.breed);
        param1.writeBoolean(this.sex);
        param1.writeBoolean(this.isInWorkshop);
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
        }
        param1.writeShort(this.worldX);
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
        }
        param1.writeShort(this.worldY);
        param1.writeInt(this.mapId);
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
        }
        param1.writeVarShort(this.subAreaId);
        param1.writeShort(this.status.getTypeId());
        this.status.serialize(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_JobCrafterDirectoryEntryPlayerInfo(param1);
    }

    public deserializeAs_JobCrafterDirectoryEntryPlayerInfo(param1: ICustomDataInput): void {
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element of JobCrafterDirectoryEntryPlayerInfo.playerId.');
        }
        this.playerName = param1.readUTF();
        this.alignmentSide = param1.readByte();
        this.breed = param1.readByte();
        if (this.breed < PlayableBreedEnum.Feca || this.breed > PlayableBreedEnum.Eliotrope) {
            throw new Error('Forbidden value (' + this.breed + ') on element of JobCrafterDirectoryEntryPlayerInfo.breed.');
        }
        this.sex = param1.readBoolean();
        this.isInWorkshop = param1.readBoolean();
        this.worldX = param1.readShort();
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element of JobCrafterDirectoryEntryPlayerInfo.worldX.');
        }
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element of JobCrafterDirectoryEntryPlayerInfo.worldY.');
        }
        this.mapId = param1.readInt();
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of JobCrafterDirectoryEntryPlayerInfo.subAreaId.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        this.status = <PlayerStatus>ProtocolTypeManager.getInstance(PlayerStatus, _loc2_);
        this.status.deserialize(param1);

    }
}

export = JobCrafterDirectoryEntryPlayerInfo;

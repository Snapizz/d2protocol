/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import FriendInformations = require('./friend-informations');
import BasicGuildInformations = require('../context/roleplay/basic-guild-informations');
import PlayerStatus = require('../character/status/player-status');
import PlayableBreedEnum = require('../../../enums/playable-breed-enum');
import ProtocolTypeManager = require('../../../protocol-type-manager');

class FriendOnlineInformations extends FriendInformations implements INetworkType {
    public static ID: number = 92;

    playerId: number;
    playerName: string;
    level: number;
    alignmentSide: number;
    breed: number;
    sex: boolean;
    guildInfo: BasicGuildInformations;
    moodSmileyId: number;
    status: PlayerStatus;

    constructor() {
        this.playerId = 0;
        this.playerName = '';
        this.level = 0;
        this.alignmentSide = 0;
        this.breed = 0;
        this.sex = false;
        this.guildInfo = new BasicGuildInformations();
        this.moodSmileyId = 0;
        this.status = new PlayerStatus();
        super();
    }

    public getTypeId(): number {
        return FriendOnlineInformations.ID;
    }

    public reset(): void {
        this.playerId = 0;
        this.playerName = '';
        this.level = 0;
        this.alignmentSide = 0;
        this.breed = 0;
        this.sex = false;
        this.guildInfo = new BasicGuildInformations();
        this.moodSmileyId = 0;
        this.status = new PlayerStatus();
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_FriendOnlineInformations(param1);
    }

    public serializeAs_FriendOnlineInformations(param1: ICustomDataOutput): void {
        super.serializeAs_FriendInformations(param1);
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
        }
        param1.writeVarInt(this.playerId);
        param1.writeUTF(this.playerName);
        if (this.level < 0 || this.level > 200) {
            throw new Error('Forbidden value (' + this.level + ') on element level.');
        }
        param1.writeByte(this.level);
        param1.writeByte(this.alignmentSide);
        param1.writeByte(this.breed);
        param1.writeBoolean(this.sex);
        this.guildInfo.serializeAs_BasicGuildInformations(param1);
        if (this.moodSmileyId < 0) {
            throw new Error('Forbidden value (' + this.moodSmileyId + ') on element moodSmileyId.');
        }
        param1.writeVarShort(this.moodSmileyId);
        param1.writeShort(this.status.getTypeId());
        this.status.serialize(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FriendOnlineInformations(param1);
    }

    public deserializeAs_FriendOnlineInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element of FriendOnlineInformations.playerId.');
        }
        this.playerName = param1.readUTF();
        this.level = param1.readUnsignedByte();
        if (this.level < 0 || this.level > 200) {
            throw new Error('Forbidden value (' + this.level + ') on element of FriendOnlineInformations.level.');
        }
        this.alignmentSide = param1.readByte();
        this.breed = param1.readByte();
        if (this.breed < PlayableBreedEnum.Feca || this.breed > PlayableBreedEnum.Eliotrope) {
            throw new Error('Forbidden value (' + this.breed + ') on element of FriendOnlineInformations.breed.');
        }
        this.sex = param1.readBoolean();
        this.guildInfo = new BasicGuildInformations();
        this.guildInfo.deserialize(param1);
        this.moodSmileyId = param1.readVarUhShort();
        if (this.moodSmileyId < 0) {
            throw new Error('Forbidden value (' + this.moodSmileyId + ') on element of FriendOnlineInformations.moodSmileyId.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        this.status = <PlayerStatus>ProtocolTypeManager.getInstance(PlayerStatus, _loc2_);
        this.status.deserialize(param1);

    }
}

export = FriendOnlineInformations;

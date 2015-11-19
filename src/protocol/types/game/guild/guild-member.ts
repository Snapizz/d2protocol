/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import CharacterMinimalInformations = require('../character/character-minimal-informations');
import PlayerStatus = require('../character/status/player-status');
import ProtocolTypeManager = require('../../../protocol-type-manager');

class GuildMember extends CharacterMinimalInformations implements INetworkType {
    public static ID: number = 88;

    breed: number;
    sex: boolean;
    rank: number;
    givenExperience: number;
    experienceGivenPercent: number;
    rights: number;
    connected: number;
    alignmentSide: number;
    hoursSinceLastConnection: number;
    moodSmileyId: number;
    accountId: number;
    achievementPoints: number;
    status: PlayerStatus;

    constructor() {
        this.breed = 0;
        this.sex = false;
        this.rank = 0;
        this.givenExperience = 0;
        this.experienceGivenPercent = 0;
        this.rights = 0;
        this.connected = 99;
        this.alignmentSide = 0;
        this.hoursSinceLastConnection = 0;
        this.moodSmileyId = 0;
        this.accountId = 0;
        this.achievementPoints = 0;
        this.status = new PlayerStatus();
        super();
    }

    public getTypeId(): number {
        return GuildMember.ID;
    }

    public reset(): void {
        this.breed = 0;
        this.sex = false;
        this.rank = 0;
        this.givenExperience = 0;
        this.experienceGivenPercent = 0;
        this.rights = 0;
        this.connected = 99;
        this.alignmentSide = 0;
        this.hoursSinceLastConnection = 0;
        this.moodSmileyId = 0;
        this.accountId = 0;
        this.achievementPoints = 0;
        this.status = new PlayerStatus();
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GuildMember(param1);
    }

    public serializeAs_GuildMember(param1: ICustomDataOutput): void {
        super.serializeAs_CharacterMinimalInformations(param1);
        param1.writeByte(this.breed);
        param1.writeBoolean(this.sex);
        if (this.rank < 0) {
            throw new Error('Forbidden value (' + this.rank + ') on element rank.');
        }
        param1.writeVarShort(this.rank);
        if (this.givenExperience < 0 || this.givenExperience > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.givenExperience + ') on element givenExperience.');
        }
        param1.writeVarLong(this.givenExperience);
        if (this.experienceGivenPercent < 0 || this.experienceGivenPercent > 100) {
            throw new Error('Forbidden value (' + this.experienceGivenPercent + ') on element experienceGivenPercent.');
        }
        param1.writeByte(this.experienceGivenPercent);
        if (this.rights < 0) {
            throw new Error('Forbidden value (' + this.rights + ') on element rights.');
        }
        param1.writeVarInt(this.rights);
        param1.writeByte(this.connected);
        param1.writeByte(this.alignmentSide);
        if (this.hoursSinceLastConnection < 0 || this.hoursSinceLastConnection > 65535) {
            throw new Error('Forbidden value (' + this.hoursSinceLastConnection + ') on element hoursSinceLastConnection.');
        }
        param1.writeShort(this.hoursSinceLastConnection);
        if (this.moodSmileyId < 0) {
            throw new Error('Forbidden value (' + this.moodSmileyId + ') on element moodSmileyId.');
        }
        param1.writeVarShort(this.moodSmileyId);
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element accountId.');
        }
        param1.writeInt(this.accountId);
        param1.writeInt(this.achievementPoints);
        param1.writeShort(this.status.getTypeId());
        this.status.serialize(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildMember(param1);
    }

    public deserializeAs_GuildMember(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.breed = param1.readByte();
        this.sex = param1.readBoolean();
        this.rank = param1.readVarUhShort();
        if (this.rank < 0) {
            throw new Error('Forbidden value (' + this.rank + ') on element of GuildMember.rank.');
        }
        this.givenExperience = param1.readVarUhLong();
        if (this.givenExperience < 0 || this.givenExperience > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.givenExperience + ') on element of GuildMember.givenExperience.');
        }
        this.experienceGivenPercent = param1.readByte();
        if (this.experienceGivenPercent < 0 || this.experienceGivenPercent > 100) {
            throw new Error('Forbidden value (' + this.experienceGivenPercent + ') on element of GuildMember.experienceGivenPercent.');
        }
        this.rights = param1.readVarUhInt();
        if (this.rights < 0) {
            throw new Error('Forbidden value (' + this.rights + ') on element of GuildMember.rights.');
        }
        this.connected = param1.readByte();
        if (this.connected < 0) {
            throw new Error('Forbidden value (' + this.connected + ') on element of GuildMember.connected.');
        }
        this.alignmentSide = param1.readByte();
        this.hoursSinceLastConnection = param1.readUnsignedShort();
        if (this.hoursSinceLastConnection < 0 || this.hoursSinceLastConnection > 65535) {
            throw new Error('Forbidden value (' + this.hoursSinceLastConnection + ') on element of GuildMember.hoursSinceLastConnection.');
        }
        this.moodSmileyId = param1.readVarUhShort();
        if (this.moodSmileyId < 0) {
            throw new Error('Forbidden value (' + this.moodSmileyId + ') on element of GuildMember.moodSmileyId.');
        }
        this.accountId = param1.readInt();
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element of GuildMember.accountId.');
        }
        this.achievementPoints = param1.readInt();
        var _loc2_: number = param1.readUnsignedShort();
        this.status = <PlayerStatus>ProtocolTypeManager.getInstance(PlayerStatus, _loc2_);
        this.status.deserialize(param1);

    }
}

export = GuildMember;

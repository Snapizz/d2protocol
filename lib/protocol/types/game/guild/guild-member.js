/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CharacterMinimalInformations = require('../character/character-minimal-informations');
var PlayerStatus = require('../character/status/player-status');
var ProtocolTypeManager = require('../../../protocol-type-manager');
var GuildMember = (function (_super) {
    __extends(GuildMember, _super);
    function GuildMember() {
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
        _super.call(this);
    }
    GuildMember.prototype.getTypeId = function () {
        return GuildMember.ID;
    };
    GuildMember.prototype.reset = function () {
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
    };
    GuildMember.prototype.serialize = function (param1) {
        this.serializeAs_GuildMember(param1);
    };
    GuildMember.prototype.serializeAs_GuildMember = function (param1) {
        _super.prototype.serializeAs_CharacterMinimalInformations.call(this, param1);
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
    };
    GuildMember.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildMember(param1);
    };
    GuildMember.prototype.deserializeAs_GuildMember = function (param1) {
        _super.prototype.deserialize.call(this, param1);
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
        var _loc2_ = param1.readUnsignedShort();
        this.status = ProtocolTypeManager.getInstance(PlayerStatus, _loc2_);
        this.status.deserialize(param1);
    };
    GuildMember.ID = 88;
    return GuildMember;
})(CharacterMinimalInformations);
module.exports = GuildMember;

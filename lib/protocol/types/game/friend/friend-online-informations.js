/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FriendInformations = require('./friend-informations');
var BasicGuildInformations = require('../context/roleplay/basic-guild-informations');
var PlayerStatus = require('../character/status/player-status');
var PlayableBreedEnum = require('../../../enums/playable-breed-enum');
var ProtocolTypeManager = require('../../../protocol-type-manager');
var FriendOnlineInformations = (function (_super) {
    __extends(FriendOnlineInformations, _super);
    function FriendOnlineInformations() {
        this.playerId = 0;
        this.playerName = '';
        this.level = 0;
        this.alignmentSide = 0;
        this.breed = 0;
        this.sex = false;
        this.guildInfo = new BasicGuildInformations();
        this.moodSmileyId = 0;
        this.status = new PlayerStatus();
        _super.call(this);
    }
    FriendOnlineInformations.prototype.getTypeId = function () {
        return FriendOnlineInformations.ID;
    };
    FriendOnlineInformations.prototype.reset = function () {
        this.playerId = 0;
        this.playerName = '';
        this.level = 0;
        this.alignmentSide = 0;
        this.breed = 0;
        this.sex = false;
        this.guildInfo = new BasicGuildInformations();
        this.moodSmileyId = 0;
        this.status = new PlayerStatus();
    };
    FriendOnlineInformations.prototype.serialize = function (param1) {
        this.serializeAs_FriendOnlineInformations(param1);
    };
    FriendOnlineInformations.prototype.serializeAs_FriendOnlineInformations = function (param1) {
        _super.prototype.serializeAs_FriendInformations.call(this, param1);
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
    };
    FriendOnlineInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_FriendOnlineInformations(param1);
    };
    FriendOnlineInformations.prototype.deserializeAs_FriendOnlineInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
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
        var _loc2_ = param1.readUnsignedShort();
        this.status = ProtocolTypeManager.getInstance(PlayerStatus, _loc2_);
        this.status.deserialize(param1);
    };
    FriendOnlineInformations.ID = 92;
    return FriendOnlineInformations;
})(FriendInformations);
module.exports = FriendOnlineInformations;

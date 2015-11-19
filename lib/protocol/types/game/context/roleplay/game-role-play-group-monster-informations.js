/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
var GroupMonsterStaticInformations = require('./group-monster-static-informations');
var GameRolePlayActorInformations = require('./game-role-play-actor-informations');
var ProtocolTypeManager = require('../../../../protocol-type-manager');
var GameRolePlayGroupMonsterInformations = (function (_super) {
    __extends(GameRolePlayGroupMonsterInformations, _super);
    function GameRolePlayGroupMonsterInformations() {
        this.staticInfos = new GroupMonsterStaticInformations();
        this.creationTime = 0;
        this.ageBonusRate = 0;
        this.lootShare = 0;
        this.alignmentSide = 0;
        this.keyRingBonus = false;
        this.hasHardcoreDrop = false;
        this.hasAVARewardToken = false;
        _super.call(this);
    }
    GameRolePlayGroupMonsterInformations.prototype.getTypeId = function () {
        return GameRolePlayGroupMonsterInformations.ID;
    };
    GameRolePlayGroupMonsterInformations.prototype.reset = function () {
        this.staticInfos = new GroupMonsterStaticInformations();
        this.creationTime = 0;
        this.ageBonusRate = 0;
        this.lootShare = 0;
        this.alignmentSide = 0;
        this.keyRingBonus = false;
        this.hasHardcoreDrop = false;
        this.hasAVARewardToken = false;
    };
    GameRolePlayGroupMonsterInformations.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayGroupMonsterInformations(param1);
    };
    GameRolePlayGroupMonsterInformations.prototype.serializeAs_GameRolePlayGroupMonsterInformations = function (param1) {
        _super.prototype.serializeAs_GameRolePlayActorInformations.call(this, param1);
        var _loc2_ = 0;
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.keyRingBonus);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.hasHardcoreDrop);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 2, this.hasAVARewardToken);
        param1.writeByte(_loc2_);
        param1.writeShort(this.staticInfos.getTypeId());
        this.staticInfos.serialize(param1);
        if (this.creationTime < 0 || this.creationTime > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.creationTime + ') on element creationTime.');
        }
        param1.writeDouble(this.creationTime);
        if (this.ageBonusRate < 0) {
            throw new Error('Forbidden value (' + this.ageBonusRate + ') on element ageBonusRate.');
        }
        param1.writeInt(this.ageBonusRate);
        if (this.lootShare < -1 || this.lootShare > 8) {
            throw new Error('Forbidden value (' + this.lootShare + ') on element lootShare.');
        }
        param1.writeByte(this.lootShare);
        param1.writeByte(this.alignmentSide);
    };
    GameRolePlayGroupMonsterInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayGroupMonsterInformations(param1);
    };
    GameRolePlayGroupMonsterInformations.prototype.deserializeAs_GameRolePlayGroupMonsterInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        var _loc2_ = param1.readByte();
        this.keyRingBonus = BooleanByteWrapper.getFlag(_loc2_, 0);
        this.hasHardcoreDrop = BooleanByteWrapper.getFlag(_loc2_, 1);
        this.hasAVARewardToken = BooleanByteWrapper.getFlag(_loc2_, 2);
        var _loc3_ = param1.readUnsignedShort();
        this.staticInfos = ProtocolTypeManager.getInstance(GroupMonsterStaticInformations, _loc3_);
        this.staticInfos.deserialize(param1);
        this.creationTime = param1.readDouble();
        if (this.creationTime < 0 || this.creationTime > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.creationTime + ') on element of GameRolePlayGroupMonsterInformations.creationTime.');
        }
        this.ageBonusRate = param1.readInt();
        if (this.ageBonusRate < 0) {
            throw new Error('Forbidden value (' + this.ageBonusRate + ') on element of GameRolePlayGroupMonsterInformations.ageBonusRate.');
        }
        this.lootShare = param1.readByte();
        if (this.lootShare < -1 || this.lootShare > 8) {
            throw new Error('Forbidden value (' + this.lootShare + ') on element of GameRolePlayGroupMonsterInformations.lootShare.');
        }
        this.alignmentSide = param1.readByte();
    };
    GameRolePlayGroupMonsterInformations.ID = 160;
    return GameRolePlayGroupMonsterInformations;
})(GameRolePlayActorInformations);
module.exports = GameRolePlayGroupMonsterInformations;

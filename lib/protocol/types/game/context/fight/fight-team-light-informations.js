/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
var AbstractFightTeamInformations = require('./abstract-fight-team-informations');
var FightTeamLightInformations = (function (_super) {
    __extends(FightTeamLightInformations, _super);
    function FightTeamLightInformations() {
        this.teamMembersCount = 0;
        this.meanLevel = 0;
        this.hasFriend = false;
        this.hasGuildMember = false;
        this.hasAllianceMember = false;
        this.hasGroupMember = false;
        this.hasMyTaxCollector = false;
        _super.call(this);
    }
    FightTeamLightInformations.prototype.getTypeId = function () {
        return FightTeamLightInformations.ID;
    };
    FightTeamLightInformations.prototype.reset = function () {
        this.teamMembersCount = 0;
        this.meanLevel = 0;
        this.hasFriend = false;
        this.hasGuildMember = false;
        this.hasAllianceMember = false;
        this.hasGroupMember = false;
        this.hasMyTaxCollector = false;
    };
    FightTeamLightInformations.prototype.serialize = function (param1) {
        this.serializeAs_FightTeamLightInformations(param1);
    };
    FightTeamLightInformations.prototype.serializeAs_FightTeamLightInformations = function (param1) {
        _super.prototype.serializeAs_AbstractFightTeamInformations.call(this, param1);
        var _loc2_ = 0;
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.hasFriend);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.hasGuildMember);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 2, this.hasAllianceMember);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 3, this.hasGroupMember);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 4, this.hasMyTaxCollector);
        param1.writeByte(_loc2_);
        if (this.teamMembersCount < 0) {
            throw new Error('Forbidden value (' + this.teamMembersCount + ') on element teamMembersCount.');
        }
        param1.writeByte(this.teamMembersCount);
        if (this.meanLevel < 0) {
            throw new Error('Forbidden value (' + this.meanLevel + ') on element meanLevel.');
        }
        param1.writeVarInt(this.meanLevel);
    };
    FightTeamLightInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_FightTeamLightInformations(param1);
    };
    FightTeamLightInformations.prototype.deserializeAs_FightTeamLightInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        var _loc2_ = param1.readByte();
        this.hasFriend = BooleanByteWrapper.getFlag(_loc2_, 0);
        this.hasGuildMember = BooleanByteWrapper.getFlag(_loc2_, 1);
        this.hasAllianceMember = BooleanByteWrapper.getFlag(_loc2_, 2);
        this.hasGroupMember = BooleanByteWrapper.getFlag(_loc2_, 3);
        this.hasMyTaxCollector = BooleanByteWrapper.getFlag(_loc2_, 4);
        this.teamMembersCount = param1.readByte();
        if (this.teamMembersCount < 0) {
            throw new Error('Forbidden value (' + this.teamMembersCount + ') on element of FightTeamLightInformations.teamMembersCount.');
        }
        this.meanLevel = param1.readVarUhInt();
        if (this.meanLevel < 0) {
            throw new Error('Forbidden value (' + this.meanLevel + ') on element of FightTeamLightInformations.meanLevel.');
        }
    };
    FightTeamLightInformations.ID = 115;
    return FightTeamLightInformations;
})(AbstractFightTeamInformations);
module.exports = FightTeamLightInformations;

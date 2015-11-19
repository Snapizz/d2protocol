/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FightTeamMemberInformations = require('./fight-team-member-informations');
var AbstractFightTeamInformations = require('./abstract-fight-team-informations');
var ProtocolTypeManager = require('../../../../protocol-type-manager');
var FightTeamInformations = (function (_super) {
    __extends(FightTeamInformations, _super);
    function FightTeamInformations() {
        this.teamMembers = [];
        _super.call(this);
    }
    FightTeamInformations.prototype.getTypeId = function () {
        return FightTeamInformations.ID;
    };
    FightTeamInformations.prototype.reset = function () {
        this.teamMembers = [];
    };
    FightTeamInformations.prototype.serialize = function (param1) {
        this.serializeAs_FightTeamInformations(param1);
    };
    FightTeamInformations.prototype.serializeAs_FightTeamInformations = function (param1) {
        _super.prototype.serializeAs_AbstractFightTeamInformations.call(this, param1);
        param1.writeShort(this.teamMembers.length);
        var _loc2_ = 0;
        while (_loc2_ < this.teamMembers.length) {
            param1.writeShort((this.teamMembers[_loc2_]).getTypeId());
            (this.teamMembers[_loc2_]).serialize(param1);
            _loc2_++;
        }
    };
    FightTeamInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_FightTeamInformations(param1);
    };
    FightTeamInformations.prototype.deserializeAs_FightTeamInformations = function (param1) {
        var _loc4_ = 0;
        var _loc5_ = null;
        _super.prototype.deserialize.call(this, param1);
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readUnsignedShort();
            _loc5_ = ProtocolTypeManager.getInstance(FightTeamMemberInformations, _loc4_);
            _loc5_.deserialize(param1);
            this.teamMembers.push(_loc5_);
            _loc3_++;
        }
    };
    FightTeamInformations.ID = 33;
    return FightTeamInformations;
})(AbstractFightTeamInformations);
module.exports = FightTeamInformations;

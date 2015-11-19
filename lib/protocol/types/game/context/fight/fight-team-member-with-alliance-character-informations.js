/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FightTeamMemberCharacterInformations = require('./fight-team-member-character-informations');
var BasicAllianceInformations = require('../roleplay/basic-alliance-informations');
var FightTeamMemberWithAllianceCharacterInformations = (function (_super) {
    __extends(FightTeamMemberWithAllianceCharacterInformations, _super);
    function FightTeamMemberWithAllianceCharacterInformations() {
        this.allianceInfos = new BasicAllianceInformations();
        _super.call(this);
    }
    FightTeamMemberWithAllianceCharacterInformations.prototype.getTypeId = function () {
        return FightTeamMemberWithAllianceCharacterInformations.ID;
    };
    FightTeamMemberWithAllianceCharacterInformations.prototype.reset = function () {
        this.allianceInfos = new BasicAllianceInformations();
    };
    FightTeamMemberWithAllianceCharacterInformations.prototype.serialize = function (param1) {
        this.serializeAs_FightTeamMemberWithAllianceCharacterInformations(param1);
    };
    FightTeamMemberWithAllianceCharacterInformations.prototype.serializeAs_FightTeamMemberWithAllianceCharacterInformations = function (param1) {
        _super.prototype.serializeAs_FightTeamMemberCharacterInformations.call(this, param1);
        this.allianceInfos.serializeAs_BasicAllianceInformations(param1);
    };
    FightTeamMemberWithAllianceCharacterInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_FightTeamMemberWithAllianceCharacterInformations(param1);
    };
    FightTeamMemberWithAllianceCharacterInformations.prototype.deserializeAs_FightTeamMemberWithAllianceCharacterInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.allianceInfos = new BasicAllianceInformations();
        this.allianceInfos.deserialize(param1);
    };
    FightTeamMemberWithAllianceCharacterInformations.ID = 426;
    return FightTeamMemberWithAllianceCharacterInformations;
})(FightTeamMemberCharacterInformations);
module.exports = FightTeamMemberWithAllianceCharacterInformations;

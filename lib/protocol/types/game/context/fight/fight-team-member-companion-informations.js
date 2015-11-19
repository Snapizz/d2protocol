/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FightTeamMemberInformations = require('./fight-team-member-informations');
var FightTeamMemberCompanionInformations = (function (_super) {
    __extends(FightTeamMemberCompanionInformations, _super);
    function FightTeamMemberCompanionInformations() {
        this.companionId = 0;
        this.level = 0;
        this.masterId = 0;
        _super.call(this);
    }
    FightTeamMemberCompanionInformations.prototype.getTypeId = function () {
        return FightTeamMemberCompanionInformations.ID;
    };
    FightTeamMemberCompanionInformations.prototype.reset = function () {
        this.companionId = 0;
        this.level = 0;
        this.masterId = 0;
    };
    FightTeamMemberCompanionInformations.prototype.serialize = function (param1) {
        this.serializeAs_FightTeamMemberCompanionInformations(param1);
    };
    FightTeamMemberCompanionInformations.prototype.serializeAs_FightTeamMemberCompanionInformations = function (param1) {
        _super.prototype.serializeAs_FightTeamMemberInformations.call(this, param1);
        if (this.companionId < 0) {
            throw new Error('Forbidden value (' + this.companionId + ') on element companionId.');
        }
        param1.writeByte(this.companionId);
        if (this.level < 1 || this.level > 200) {
            throw new Error('Forbidden value (' + this.level + ') on element level.');
        }
        param1.writeByte(this.level);
        param1.writeInt(this.masterId);
    };
    FightTeamMemberCompanionInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_FightTeamMemberCompanionInformations(param1);
    };
    FightTeamMemberCompanionInformations.prototype.deserializeAs_FightTeamMemberCompanionInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.companionId = param1.readByte();
        if (this.companionId < 0) {
            throw new Error('Forbidden value (' + this.companionId + ') on element of FightTeamMemberCompanionInformations.companionId.');
        }
        this.level = param1.readUnsignedByte();
        if (this.level < 1 || this.level > 200) {
            throw new Error('Forbidden value (' + this.level + ') on element of FightTeamMemberCompanionInformations.level.');
        }
        this.masterId = param1.readInt();
    };
    FightTeamMemberCompanionInformations.ID = 451;
    return FightTeamMemberCompanionInformations;
})(FightTeamMemberInformations);
module.exports = FightTeamMemberCompanionInformations;

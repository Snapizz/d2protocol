/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FightTeamMemberInformations = require('./fight-team-member-informations');
var FightTeamMemberMonsterInformations = (function (_super) {
    __extends(FightTeamMemberMonsterInformations, _super);
    function FightTeamMemberMonsterInformations() {
        this.monsterId = 0;
        this.grade = 0;
        _super.call(this);
    }
    FightTeamMemberMonsterInformations.prototype.getTypeId = function () {
        return FightTeamMemberMonsterInformations.ID;
    };
    FightTeamMemberMonsterInformations.prototype.reset = function () {
        this.monsterId = 0;
        this.grade = 0;
    };
    FightTeamMemberMonsterInformations.prototype.serialize = function (param1) {
        this.serializeAs_FightTeamMemberMonsterInformations(param1);
    };
    FightTeamMemberMonsterInformations.prototype.serializeAs_FightTeamMemberMonsterInformations = function (param1) {
        _super.prototype.serializeAs_FightTeamMemberInformations.call(this, param1);
        param1.writeInt(this.monsterId);
        if (this.grade < 0) {
            throw new Error('Forbidden value (' + this.grade + ') on element grade.');
        }
        param1.writeByte(this.grade);
    };
    FightTeamMemberMonsterInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_FightTeamMemberMonsterInformations(param1);
    };
    FightTeamMemberMonsterInformations.prototype.deserializeAs_FightTeamMemberMonsterInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.monsterId = param1.readInt();
        this.grade = param1.readByte();
        if (this.grade < 0) {
            throw new Error('Forbidden value (' + this.grade + ') on element of FightTeamMemberMonsterInformations.grade.');
        }
    };
    FightTeamMemberMonsterInformations.ID = 6;
    return FightTeamMemberMonsterInformations;
})(FightTeamMemberInformations);
module.exports = FightTeamMemberMonsterInformations;

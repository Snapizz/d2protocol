/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FightTeamMemberInformations = require('./fight-team-member-informations');
var FightTeamMemberCharacterInformations = (function (_super) {
    __extends(FightTeamMemberCharacterInformations, _super);
    function FightTeamMemberCharacterInformations() {
        this.name = '';
        this.level = 0;
        _super.call(this);
    }
    FightTeamMemberCharacterInformations.prototype.getTypeId = function () {
        return FightTeamMemberCharacterInformations.ID;
    };
    FightTeamMemberCharacterInformations.prototype.reset = function () {
        this.name = '';
        this.level = 0;
    };
    FightTeamMemberCharacterInformations.prototype.serialize = function (param1) {
        this.serializeAs_FightTeamMemberCharacterInformations(param1);
    };
    FightTeamMemberCharacterInformations.prototype.serializeAs_FightTeamMemberCharacterInformations = function (param1) {
        _super.prototype.serializeAs_FightTeamMemberInformations.call(this, param1);
        param1.writeUTF(this.name);
        if (this.level < 0 || this.level > 255) {
            throw new Error('Forbidden value (' + this.level + ') on element level.');
        }
        param1.writeByte(this.level);
    };
    FightTeamMemberCharacterInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_FightTeamMemberCharacterInformations(param1);
    };
    FightTeamMemberCharacterInformations.prototype.deserializeAs_FightTeamMemberCharacterInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.name = param1.readUTF();
        this.level = param1.readUnsignedByte();
        if (this.level < 0 || this.level > 255) {
            throw new Error('Forbidden value (' + this.level + ') on element of FightTeamMemberCharacterInformations.level.');
        }
    };
    FightTeamMemberCharacterInformations.ID = 13;
    return FightTeamMemberCharacterInformations;
})(FightTeamMemberInformations);
module.exports = FightTeamMemberCharacterInformations;

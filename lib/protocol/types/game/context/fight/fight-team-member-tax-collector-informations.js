/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FightTeamMemberInformations = require('./fight-team-member-informations');
var FightTeamMemberTaxCollectorInformations = (function (_super) {
    __extends(FightTeamMemberTaxCollectorInformations, _super);
    function FightTeamMemberTaxCollectorInformations() {
        this.firstNameId = 0;
        this.lastNameId = 0;
        this.level = 0;
        this.guildId = 0;
        this.uid = 0;
        _super.call(this);
    }
    FightTeamMemberTaxCollectorInformations.prototype.getTypeId = function () {
        return FightTeamMemberTaxCollectorInformations.ID;
    };
    FightTeamMemberTaxCollectorInformations.prototype.reset = function () {
        this.firstNameId = 0;
        this.lastNameId = 0;
        this.level = 0;
        this.guildId = 0;
        this.uid = 0;
    };
    FightTeamMemberTaxCollectorInformations.prototype.serialize = function (param1) {
        this.serializeAs_FightTeamMemberTaxCollectorInformations(param1);
    };
    FightTeamMemberTaxCollectorInformations.prototype.serializeAs_FightTeamMemberTaxCollectorInformations = function (param1) {
        _super.prototype.serializeAs_FightTeamMemberInformations.call(this, param1);
        if (this.firstNameId < 0) {
            throw new Error('Forbidden value (' + this.firstNameId + ') on element firstNameId.');
        }
        param1.writeVarShort(this.firstNameId);
        if (this.lastNameId < 0) {
            throw new Error('Forbidden value (' + this.lastNameId + ') on element lastNameId.');
        }
        param1.writeVarShort(this.lastNameId);
        if (this.level < 1 || this.level > 200) {
            throw new Error('Forbidden value (' + this.level + ') on element level.');
        }
        param1.writeByte(this.level);
        if (this.guildId < 0) {
            throw new Error('Forbidden value (' + this.guildId + ') on element guildId.');
        }
        param1.writeVarInt(this.guildId);
        if (this.uid < 0) {
            throw new Error('Forbidden value (' + this.uid + ') on element uid.');
        }
        param1.writeVarInt(this.uid);
    };
    FightTeamMemberTaxCollectorInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_FightTeamMemberTaxCollectorInformations(param1);
    };
    FightTeamMemberTaxCollectorInformations.prototype.deserializeAs_FightTeamMemberTaxCollectorInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.firstNameId = param1.readVarUhShort();
        if (this.firstNameId < 0) {
            throw new Error('Forbidden value (' + this.firstNameId + ') on element of FightTeamMemberTaxCollectorInformations.firstNameId.');
        }
        this.lastNameId = param1.readVarUhShort();
        if (this.lastNameId < 0) {
            throw new Error('Forbidden value (' + this.lastNameId + ') on element of FightTeamMemberTaxCollectorInformations.lastNameId.');
        }
        this.level = param1.readUnsignedByte();
        if (this.level < 1 || this.level > 200) {
            throw new Error('Forbidden value (' + this.level + ') on element of FightTeamMemberTaxCollectorInformations.level.');
        }
        this.guildId = param1.readVarUhInt();
        if (this.guildId < 0) {
            throw new Error('Forbidden value (' + this.guildId + ') on element of FightTeamMemberTaxCollectorInformations.guildId.');
        }
        this.uid = param1.readVarUhInt();
        if (this.uid < 0) {
            throw new Error('Forbidden value (' + this.uid + ') on element of FightTeamMemberTaxCollectorInformations.uid.');
        }
    };
    FightTeamMemberTaxCollectorInformations.ID = 177;
    return FightTeamMemberTaxCollectorInformations;
})(FightTeamMemberInformations);
module.exports = FightTeamMemberTaxCollectorInformations;

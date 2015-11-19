/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FightTeamInformations = require('./fight-team-informations');
var FightAllianceTeamInformations = (function (_super) {
    __extends(FightAllianceTeamInformations, _super);
    function FightAllianceTeamInformations() {
        this.relation = 0;
        _super.call(this);
    }
    FightAllianceTeamInformations.prototype.getTypeId = function () {
        return FightAllianceTeamInformations.ID;
    };
    FightAllianceTeamInformations.prototype.reset = function () {
        this.relation = 0;
    };
    FightAllianceTeamInformations.prototype.serialize = function (param1) {
        this.serializeAs_FightAllianceTeamInformations(param1);
    };
    FightAllianceTeamInformations.prototype.serializeAs_FightAllianceTeamInformations = function (param1) {
        _super.prototype.serializeAs_FightTeamInformations.call(this, param1);
        param1.writeByte(this.relation);
    };
    FightAllianceTeamInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_FightAllianceTeamInformations(param1);
    };
    FightAllianceTeamInformations.prototype.deserializeAs_FightAllianceTeamInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.relation = param1.readByte();
        if (this.relation < 0) {
            throw new Error('Forbidden value (' + this.relation + ') on element of FightAllianceTeamInformations.relation.');
        }
    };
    FightAllianceTeamInformations.ID = 439;
    return FightAllianceTeamInformations;
})(FightTeamInformations);
module.exports = FightAllianceTeamInformations;

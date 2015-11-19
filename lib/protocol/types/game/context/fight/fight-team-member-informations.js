/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var FightTeamMemberInformations = (function () {
    function FightTeamMemberInformations() {
        this.id = 0;
    }
    FightTeamMemberInformations.prototype.getTypeId = function () {
        return FightTeamMemberInformations.ID;
    };
    FightTeamMemberInformations.prototype.reset = function () {
        this.id = 0;
    };
    FightTeamMemberInformations.prototype.serialize = function (param1) {
        this.serializeAs_FightTeamMemberInformations(param1);
    };
    FightTeamMemberInformations.prototype.serializeAs_FightTeamMemberInformations = function (param1) {
        param1.writeInt(this.id);
    };
    FightTeamMemberInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_FightTeamMemberInformations(param1);
    };
    FightTeamMemberInformations.prototype.deserializeAs_FightTeamMemberInformations = function (param1) {
        this.id = param1.readInt();
    };
    FightTeamMemberInformations.ID = 44;
    return FightTeamMemberInformations;
})();
module.exports = FightTeamMemberInformations;

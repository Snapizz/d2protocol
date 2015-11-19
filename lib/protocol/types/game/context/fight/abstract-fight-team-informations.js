/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var AbstractFightTeamInformations = (function () {
    function AbstractFightTeamInformations() {
        this.teamId = 2;
        this.leaderId = 0;
        this.teamSide = 0;
        this.teamTypeId = 0;
        this.nbWaves = 0;
    }
    AbstractFightTeamInformations.prototype.getTypeId = function () {
        return AbstractFightTeamInformations.ID;
    };
    AbstractFightTeamInformations.prototype.reset = function () {
        this.teamId = 2;
        this.leaderId = 0;
        this.teamSide = 0;
        this.teamTypeId = 0;
        this.nbWaves = 0;
    };
    AbstractFightTeamInformations.prototype.serialize = function (param1) {
        this.serializeAs_AbstractFightTeamInformations(param1);
    };
    AbstractFightTeamInformations.prototype.serializeAs_AbstractFightTeamInformations = function (param1) {
        param1.writeByte(this.teamId);
        param1.writeInt(this.leaderId);
        param1.writeByte(this.teamSide);
        param1.writeByte(this.teamTypeId);
        if (this.nbWaves < 0) {
            throw new Error('Forbidden value (' + this.nbWaves + ') on element nbWaves.');
        }
        param1.writeByte(this.nbWaves);
    };
    AbstractFightTeamInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_AbstractFightTeamInformations(param1);
    };
    AbstractFightTeamInformations.prototype.deserializeAs_AbstractFightTeamInformations = function (param1) {
        this.teamId = param1.readByte();
        if (this.teamId < 0) {
            throw new Error('Forbidden value (' + this.teamId + ') on element of AbstractFightTeamInformations.teamId.');
        }
        this.leaderId = param1.readInt();
        this.teamSide = param1.readByte();
        this.teamTypeId = param1.readByte();
        if (this.teamTypeId < 0) {
            throw new Error('Forbidden value (' + this.teamTypeId + ') on element of AbstractFightTeamInformations.teamTypeId.');
        }
        this.nbWaves = param1.readByte();
        if (this.nbWaves < 0) {
            throw new Error('Forbidden value (' + this.nbWaves + ') on element of AbstractFightTeamInformations.nbWaves.');
        }
    };
    AbstractFightTeamInformations.ID = 116;
    return AbstractFightTeamInformations;
})();
module.exports = AbstractFightTeamInformations;

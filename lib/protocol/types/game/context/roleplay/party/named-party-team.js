/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var NamedPartyTeam = (function () {
    function NamedPartyTeam() {
        this.teamId = 2;
        this.partyName = '';
    }
    NamedPartyTeam.prototype.getTypeId = function () {
        return NamedPartyTeam.ID;
    };
    NamedPartyTeam.prototype.reset = function () {
        this.teamId = 2;
        this.partyName = '';
    };
    NamedPartyTeam.prototype.serialize = function (param1) {
        this.serializeAs_NamedPartyTeam(param1);
    };
    NamedPartyTeam.prototype.serializeAs_NamedPartyTeam = function (param1) {
        param1.writeByte(this.teamId);
        param1.writeUTF(this.partyName);
    };
    NamedPartyTeam.prototype.deserialize = function (param1) {
        this.deserializeAs_NamedPartyTeam(param1);
    };
    NamedPartyTeam.prototype.deserializeAs_NamedPartyTeam = function (param1) {
        this.teamId = param1.readByte();
        if (this.teamId < 0) {
            throw new Error('Forbidden value (' + this.teamId + ') on element of NamedPartyTeam.teamId.');
        }
        this.partyName = param1.readUTF();
    };
    NamedPartyTeam.ID = 469;
    return NamedPartyTeam;
})();
module.exports = NamedPartyTeam;

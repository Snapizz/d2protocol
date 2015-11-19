/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var AllianceVersatileInformations = (function () {
    function AllianceVersatileInformations() {
        this.allianceId = 0;
        this.nbGuilds = 0;
        this.nbMembers = 0;
        this.nbSubarea = 0;
    }
    AllianceVersatileInformations.prototype.getTypeId = function () {
        return AllianceVersatileInformations.ID;
    };
    AllianceVersatileInformations.prototype.reset = function () {
        this.allianceId = 0;
        this.nbGuilds = 0;
        this.nbMembers = 0;
        this.nbSubarea = 0;
    };
    AllianceVersatileInformations.prototype.serialize = function (param1) {
        this.serializeAs_AllianceVersatileInformations(param1);
    };
    AllianceVersatileInformations.prototype.serializeAs_AllianceVersatileInformations = function (param1) {
        if (this.allianceId < 0) {
            throw new Error('Forbidden value (' + this.allianceId + ') on element allianceId.');
        }
        param1.writeVarInt(this.allianceId);
        if (this.nbGuilds < 0) {
            throw new Error('Forbidden value (' + this.nbGuilds + ') on element nbGuilds.');
        }
        param1.writeVarShort(this.nbGuilds);
        if (this.nbMembers < 0) {
            throw new Error('Forbidden value (' + this.nbMembers + ') on element nbMembers.');
        }
        param1.writeVarShort(this.nbMembers);
        if (this.nbSubarea < 0) {
            throw new Error('Forbidden value (' + this.nbSubarea + ') on element nbSubarea.');
        }
        param1.writeVarShort(this.nbSubarea);
    };
    AllianceVersatileInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_AllianceVersatileInformations(param1);
    };
    AllianceVersatileInformations.prototype.deserializeAs_AllianceVersatileInformations = function (param1) {
        this.allianceId = param1.readVarUhInt();
        if (this.allianceId < 0) {
            throw new Error('Forbidden value (' + this.allianceId + ') on element of AllianceVersatileInformations.allianceId.');
        }
        this.nbGuilds = param1.readVarUhShort();
        if (this.nbGuilds < 0) {
            throw new Error('Forbidden value (' + this.nbGuilds + ') on element of AllianceVersatileInformations.nbGuilds.');
        }
        this.nbMembers = param1.readVarUhShort();
        if (this.nbMembers < 0) {
            throw new Error('Forbidden value (' + this.nbMembers + ') on element of AllianceVersatileInformations.nbMembers.');
        }
        this.nbSubarea = param1.readVarUhShort();
        if (this.nbSubarea < 0) {
            throw new Error('Forbidden value (' + this.nbSubarea + ') on element of AllianceVersatileInformations.nbSubarea.');
        }
    };
    AllianceVersatileInformations.ID = 432;
    return AllianceVersatileInformations;
})();
module.exports = AllianceVersatileInformations;

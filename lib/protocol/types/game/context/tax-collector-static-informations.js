/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var GuildInformations = require('./roleplay/guild-informations');
var TaxCollectorStaticInformations = (function () {
    function TaxCollectorStaticInformations() {
        this.firstNameId = 0;
        this.lastNameId = 0;
        this.guildIdentity = new GuildInformations();
    }
    TaxCollectorStaticInformations.prototype.getTypeId = function () {
        return TaxCollectorStaticInformations.ID;
    };
    TaxCollectorStaticInformations.prototype.reset = function () {
        this.firstNameId = 0;
        this.lastNameId = 0;
        this.guildIdentity = new GuildInformations();
    };
    TaxCollectorStaticInformations.prototype.serialize = function (param1) {
        this.serializeAs_TaxCollectorStaticInformations(param1);
    };
    TaxCollectorStaticInformations.prototype.serializeAs_TaxCollectorStaticInformations = function (param1) {
        if (this.firstNameId < 0) {
            throw new Error('Forbidden value (' + this.firstNameId + ') on element firstNameId.');
        }
        param1.writeVarShort(this.firstNameId);
        if (this.lastNameId < 0) {
            throw new Error('Forbidden value (' + this.lastNameId + ') on element lastNameId.');
        }
        param1.writeVarShort(this.lastNameId);
        this.guildIdentity.serializeAs_GuildInformations(param1);
    };
    TaxCollectorStaticInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_TaxCollectorStaticInformations(param1);
    };
    TaxCollectorStaticInformations.prototype.deserializeAs_TaxCollectorStaticInformations = function (param1) {
        this.firstNameId = param1.readVarUhShort();
        if (this.firstNameId < 0) {
            throw new Error('Forbidden value (' + this.firstNameId + ') on element of TaxCollectorStaticInformations.firstNameId.');
        }
        this.lastNameId = param1.readVarUhShort();
        if (this.lastNameId < 0) {
            throw new Error('Forbidden value (' + this.lastNameId + ') on element of TaxCollectorStaticInformations.lastNameId.');
        }
        this.guildIdentity = new GuildInformations();
        this.guildIdentity.deserialize(param1);
    };
    TaxCollectorStaticInformations.ID = 147;
    return TaxCollectorStaticInformations;
})();
module.exports = TaxCollectorStaticInformations;

/// <reference path="../../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var EntityLook = require('../../../../look/entity-look');
var PartyCompanionBaseInformations = (function () {
    function PartyCompanionBaseInformations() {
        this.indexId = 0;
        this.companionGenericId = 0;
        this.entityLook = new EntityLook();
    }
    PartyCompanionBaseInformations.prototype.getTypeId = function () {
        return PartyCompanionBaseInformations.ID;
    };
    PartyCompanionBaseInformations.prototype.reset = function () {
        this.indexId = 0;
        this.companionGenericId = 0;
        this.entityLook = new EntityLook();
    };
    PartyCompanionBaseInformations.prototype.serialize = function (param1) {
        this.serializeAs_PartyCompanionBaseInformations(param1);
    };
    PartyCompanionBaseInformations.prototype.serializeAs_PartyCompanionBaseInformations = function (param1) {
        if (this.indexId < 0) {
            throw new Error('Forbidden value (' + this.indexId + ') on element indexId.');
        }
        param1.writeByte(this.indexId);
        if (this.companionGenericId < 0) {
            throw new Error('Forbidden value (' + this.companionGenericId + ') on element companionGenericId.');
        }
        param1.writeByte(this.companionGenericId);
        this.entityLook.serializeAs_EntityLook(param1);
    };
    PartyCompanionBaseInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyCompanionBaseInformations(param1);
    };
    PartyCompanionBaseInformations.prototype.deserializeAs_PartyCompanionBaseInformations = function (param1) {
        this.indexId = param1.readByte();
        if (this.indexId < 0) {
            throw new Error('Forbidden value (' + this.indexId + ') on element of PartyCompanionBaseInformations.indexId.');
        }
        this.companionGenericId = param1.readByte();
        if (this.companionGenericId < 0) {
            throw new Error('Forbidden value (' + this.companionGenericId + ') on element of PartyCompanionBaseInformations.companionGenericId.');
        }
        this.entityLook = new EntityLook();
        this.entityLook.deserialize(param1);
    };
    PartyCompanionBaseInformations.ID = 453;
    return PartyCompanionBaseInformations;
})();
module.exports = PartyCompanionBaseInformations;

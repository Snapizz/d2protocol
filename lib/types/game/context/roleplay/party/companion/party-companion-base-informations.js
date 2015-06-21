var PartyCompanionBaseInformations = function() {
    this.indexId = 0;
    this.companionGenericId = 0;
    this.entityLook = new EntityLook();
};

module.exports = function() {
    return new PartyCompanionBaseInformations();
};

PartyCompanionBaseInformations.prototype.serialize = function(output) {
    this.serializeAs_PartyCompanionBaseInformations(output);
};

PartyCompanionBaseInformations.prototype.deserialize = function(input) {
    this.deserializeAs_PartyCompanionBaseInformations(input);
};

PartyCompanionBaseInformations.prototype.serializeAs_PartyCompanionBaseInformations = function(param1) {
    if (this.indexId < 0) {
        throw new Error("Forbidden value (" + this.indexId + ") on element indexId.");
    } else {
        param1.writeByte(this.indexId);
        if (this.companionGenericId < 0) {
            throw new Error("Forbidden value (" + this.companionGenericId + ") on element companionGenericId.");
        } else {
            param1.writeByte(this.companionGenericId);
            this.entityLook.serializeAs_EntityLook(param1);
            return;
        }
    }
};

PartyCompanionBaseInformations.prototype.deserializeAs_PartyCompanionBaseInformations = function(param1) {
    this.indexId = param1.readByte();
    if (this.indexId < 0) {
        throw new Error("Forbidden value (" + this.indexId + ") on element of PartyCompanionBaseInformations.indexId.");
    } else {
        this.companionGenericId = param1.readByte();
        if (this.companionGenericId < 0) {
            throw new Error("Forbidden value (" + this.companionGenericId + ") on element of PartyCompanionBaseInformations.companionGenericId.");
        } else {
            this.entityLook = new EntityLook();
            this.entityLook.deserialize(param1);
            return;
        }
    }
};

PartyCompanionBaseInformations.prototype.getTypeId = function() {
    return 453;
};

PartyCompanionBaseInformations.prototype.getClassName = function() {
    return 'PartyCompanionBaseInformations';
};

module.exports.id = 453;
module.exports.PartyCompanionBaseInformations = PartyCompanionBaseInformations;
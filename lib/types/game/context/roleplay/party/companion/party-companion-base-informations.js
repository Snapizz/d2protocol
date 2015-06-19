var PartyCompanionBaseInformations = function() {
  this.indexId = 0;
  this.companionGenericId = 0;
  this.entityLook;
};



PartyCompanionBaseInformations.prototype.serialize = function(output) {
  this.serializeAs_PartyCompanionBaseInformations(output);
};

PartyCompanionBaseInformations.prototype.deserialize = function(input) {
  this.deserializeAs_PartyCompanionBaseInformations(input);
};

PartyCompanionBaseInformations.prototype.serializeAs_PartyCompanionBaseInformations = function(output) {
  if (this.indexId < 0) {
    throw (new Error((("Forbidden value (" + this.indexId) + ") on element indexId.")));
  };
  output.writeByte(this.indexId);
  if (this.companionGenericId < 0) {
    throw (new Error((("Forbidden value (" + this.companionGenericId) + ") on element companionGenericId.")));
  };
  output.writeByte(this.companionGenericId);
  this.entityLook.serializeAs_EntityLook(output);
};

PartyCompanionBaseInformations.prototype.deserializeAs_PartyCompanionBaseInformations = function(input) {
  this.indexId = input.readByte();
  if (this.indexId < 0) {
    throw (new Error((("Forbidden value (" + this.indexId) + ") on element of PartyCompanionBaseInformations.indexId.")));
  };
  this.companionGenericId = input.readByte();
  if (this.companionGenericId < 0) {
    throw (new Error((("Forbidden value (" + this.companionGenericId) + ") on element of PartyCompanionBaseInformations.companionGenericId.")));
  };
  this.entityLook = new EntityLook();
  this.entityLook.deserialize(input);
};

PartyCompanionBaseInformations.prototype.getTypeId = function() {
  return 453;
};

PartyCompanionBaseInformations.prototype.getClassName = function() {
  return 'PartyCompanionBaseInformations';
};

module.exports.id = 453;
module.exports.class = PartyCompanionBaseInformations;
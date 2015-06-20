var CharacterMinimalPlusLookInformations = function() {
  this.entityLook;
};



CharacterMinimalPlusLookInformations.prototype.serialize = function(output) {
  this.serializeAs_CharacterMinimalPlusLookInformations(output);
};

CharacterMinimalPlusLookInformations.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterMinimalPlusLookInformations(input);
};

CharacterMinimalPlusLookInformations.prototype.serializeAs_CharacterMinimalPlusLookInformations = function(param1) {
  this.serializeAs_CharacterMinimalInformations(param1);
  this.entityLook.serializeAs_EntityLook(param1);
};

CharacterMinimalPlusLookInformations.prototype.deserializeAs_CharacterMinimalPlusLookInformations = function(param1) {
  this.deserialize(param1);
  this.entityLook = new EntityLook();
  this.entityLook.deserialize(param1);
};

CharacterMinimalPlusLookInformations.prototype.getTypeId = function() {
  return 163;
};

CharacterMinimalPlusLookInformations.prototype.getClassName = function() {
  return 'CharacterMinimalPlusLookInformations';
};

module.exports.id = 163;
module.exports.class = CharacterMinimalPlusLookInformations;
module.exports.getInstance = function() {
  return new CharacterMinimalPlusLookInformations();
};
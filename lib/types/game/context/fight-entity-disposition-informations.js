var FightEntityDispositionInformations = function() {
  this.carryingCharacterId = 0;
};



FightEntityDispositionInformations.prototype.serialize = function(output) {
  this.serializeAs_FightEntityDispositionInformations(output);
};

FightEntityDispositionInformations.prototype.deserialize = function(input) {
  this.deserializeAs_FightEntityDispositionInformations(input);
};

FightEntityDispositionInformations.prototype.serializeAs_FightEntityDispositionInformations = function(param1) {
  this.serializeAs_EntityDispositionInformations(param1);
  param1.writeInt(this.carryingCharacterId);
};

FightEntityDispositionInformations.prototype.deserializeAs_FightEntityDispositionInformations = function(param1) {
  super.deserialize(param1);
  this.carryingCharacterId = param1.readInt();
};

FightEntityDispositionInformations.prototype.getTypeId = function() {
  return 217;
};

FightEntityDispositionInformations.prototype.getClassName = function() {
  return 'FightEntityDispositionInformations';
};

module.exports.id = 217;
module.exports.class = FightEntityDispositionInformations;
module.exports.getInstance = function() {
  return new FightEntityDispositionInformations();
};
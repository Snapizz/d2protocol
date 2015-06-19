var BaseMessage = require('./entity-disposition-informations.js').class,
  util = require('util');

var FightEntityDispositionInformations = function() {
  this.carryingCharacterId = 0;
};

util.inherits(FightEntityDispositionInformations, BaseMessage);

FightEntityDispositionInformations.prototype.serialize = function(output) {
  this.serializeAs_FightEntityDispositionInformations(output);
};

FightEntityDispositionInformations.prototype.deserialize = function(input) {
  this.deserializeAs_FightEntityDispositionInformations(input);
};

FightEntityDispositionInformations.prototype.serializeAs_FightEntityDispositionInformations = function(output) {
  this.serializeAs_EntityDispositionInformations(output);
  output.writeInt(this.carryingCharacterId);
};

FightEntityDispositionInformations.prototype.deserializeAs_FightEntityDispositionInformations = function(input) {
  this.deserialize(input);
  this.carryingCharacterId = input.readInt();
};

FightEntityDispositionInformations.prototype.getTypeId = function() {
  return 217;
};

FightEntityDispositionInformations.prototype.getClassName = function() {
  return 'FightEntityDispositionInformations';
};

module.exports.id = 217;
module.exports.class = FightEntityDispositionInformations;
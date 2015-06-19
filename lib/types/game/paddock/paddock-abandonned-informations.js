var BaseMessage = require('./paddock-buyable-informations.js').class,
  util = require('util');

var PaddockAbandonnedInformations = function() {
  this.guildId = 0;
};

util.inherits(PaddockAbandonnedInformations, BaseMessage);

PaddockAbandonnedInformations.prototype.serialize = function(output) {
  this.serializeAs_PaddockAbandonnedInformations(output);
};

PaddockAbandonnedInformations.prototype.deserialize = function(input) {
  this.deserializeAs_PaddockAbandonnedInformations(input);
};

PaddockAbandonnedInformations.prototype.serializeAs_PaddockAbandonnedInformations = function(output) {
  this.serializeAs_PaddockBuyableInformations(output);
  output.writeInt(this.guildId);
};

PaddockAbandonnedInformations.prototype.deserializeAs_PaddockAbandonnedInformations = function(input) {
  this.deserialize(input);
  this.guildId = input.readInt();
};

PaddockAbandonnedInformations.prototype.getTypeId = function() {
  return 133;
};

PaddockAbandonnedInformations.prototype.getClassName = function() {
  return 'PaddockAbandonnedInformations';
};

module.exports.id = 133;
module.exports.class = PaddockAbandonnedInformations;
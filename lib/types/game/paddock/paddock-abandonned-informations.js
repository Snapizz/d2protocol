var BaseMessage = require('./paddock-abandonned-informations.js').class,
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

PaddockAbandonnedInformations.prototype.serializeAs_PaddockAbandonnedInformations = function(param1) {
  this.serializeAs_PaddockBuyableInformations(param1);
  param1.writeInt(this.guildId);
};

PaddockAbandonnedInformations.prototype.deserializeAs_PaddockAbandonnedInformations = function(param1) {
  this.deserialize(param1);
  this.guildId = param1.readInt();
};

PaddockAbandonnedInformations.prototype.getTypeId = function() {
  return 133;
};

PaddockAbandonnedInformations.prototype.getClassName = function() {
  return 'PaddockAbandonnedInformations';
};

module.exports.id = 133;
module.exports.class = PaddockAbandonnedInformations;
module.exports.getInstance = function() {
  return new PaddockAbandonnedInformations();
};
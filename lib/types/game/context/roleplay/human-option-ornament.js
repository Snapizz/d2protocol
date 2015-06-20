var BaseMessage = require('./human-option-ornament.js').class,
  util = require('util');

var HumanOptionOrnament = function() {
  this.ornamentId = 0;
};

util.inherits(HumanOptionOrnament, BaseMessage);

HumanOptionOrnament.prototype.serialize = function(output) {
  this.serializeAs_HumanOptionOrnament(output);
};

HumanOptionOrnament.prototype.deserialize = function(input) {
  this.deserializeAs_HumanOptionOrnament(input);
};

HumanOptionOrnament.prototype.serializeAs_HumanOptionOrnament = function(param1) {
  this.serializeAs_HumanOption(param1);
  if (this.ornamentId < 0) {
    throw new Error("Forbidden value (" + this.ornamentId + ") on element ornamentId.");
  } else {
    param1.writeVarShort(this.ornamentId);
    return;
  }
};

HumanOptionOrnament.prototype.deserializeAs_HumanOptionOrnament = function(param1) {
  this.deserialize(param1);
  this.ornamentId = param1.readVarUhShort();
  if (this.ornamentId < 0) {
    throw new Error("Forbidden value (" + this.ornamentId + ") on element of HumanOptionOrnament.ornamentId.");
  } else {
    return;
  }
};

HumanOptionOrnament.prototype.getTypeId = function() {
  return 411;
};

HumanOptionOrnament.prototype.getClassName = function() {
  return 'HumanOptionOrnament';
};

module.exports.id = 411;
module.exports.class = HumanOptionOrnament;
module.exports.getInstance = function() {
  return new HumanOptionOrnament();
};
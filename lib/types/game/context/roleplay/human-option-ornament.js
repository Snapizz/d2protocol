var BaseMessage = require('./human-option.js').class,
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

HumanOptionOrnament.prototype.serializeAs_HumanOptionOrnament = function(output) {
  this.serializeAs_HumanOption(output);
  if (this.ornamentId < 0) {
    throw (new Error((("Forbidden value (" + this.ornamentId) + ") on element ornamentId.")));
  };
  output.writeVarShort(this.ornamentId);
};

HumanOptionOrnament.prototype.deserializeAs_HumanOptionOrnament = function(input) {
  this.deserialize(input);
  this.ornamentId = input.readVarUhShort();
  if (this.ornamentId < 0) {
    throw (new Error((("Forbidden value (" + this.ornamentId) + ") on element of HumanOptionOrnament.ornamentId.")));
  };
};

HumanOptionOrnament.prototype.getTypeId = function() {
  return 411;
};

HumanOptionOrnament.prototype.getClassName = function() {
  return 'HumanOptionOrnament';
};

module.exports.id = 411;
module.exports.class = HumanOptionOrnament;
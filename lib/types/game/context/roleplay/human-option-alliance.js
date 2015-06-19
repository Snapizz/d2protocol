var BaseMessage = require('./human-option.js').class,
  util = require('util');

var HumanOptionAlliance = function() {
  this.allianceInformations;
  this.aggressable = 0;
};

util.inherits(HumanOptionAlliance, BaseMessage);

HumanOptionAlliance.prototype.serialize = function(output) {
  this.serializeAs_HumanOptionAlliance(output);
};

HumanOptionAlliance.prototype.deserialize = function(input) {
  this.deserializeAs_HumanOptionAlliance(input);
};

HumanOptionAlliance.prototype.serializeAs_HumanOptionAlliance = function(output) {
  this.serializeAs_HumanOption(output);
  this.allianceInformations.serializeAs_AllianceInformations(output);
  output.writeByte(this.aggressable);
};

HumanOptionAlliance.prototype.deserializeAs_HumanOptionAlliance = function(input) {
  this.deserialize(input);
  this.allianceInformations = new AllianceInformations();
  this.allianceInformations.deserialize(input);
  this.aggressable = input.readByte();
  if (this.aggressable < 0) {
    throw (new Error((("Forbidden value (" + this.aggressable) + ") on element of HumanOptionAlliance.aggressable.")));
  };
};

HumanOptionAlliance.prototype.getTypeId = function() {
  return 425;
};

HumanOptionAlliance.prototype.getClassName = function() {
  return 'HumanOptionAlliance';
};

module.exports.id = 425;
module.exports.class = HumanOptionAlliance;
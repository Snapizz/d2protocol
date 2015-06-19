var BaseMessage = require('./prism-information.js').class,
  util = require('util');

var AlliancePrismInformation = function() {
  this.alliance;
};

util.inherits(AlliancePrismInformation, BaseMessage);

AlliancePrismInformation.prototype.serialize = function(output) {
  this.serializeAs_AlliancePrismInformation(output);
};

AlliancePrismInformation.prototype.deserialize = function(input) {
  this.deserializeAs_AlliancePrismInformation(input);
};

AlliancePrismInformation.prototype.serializeAs_AlliancePrismInformation = function(output) {
  this.serializeAs_PrismInformation(output);
  this.alliance.serializeAs_AllianceInformations(output);
};

AlliancePrismInformation.prototype.deserializeAs_AlliancePrismInformation = function(input) {
  this.deserialize(input);
  this.alliance = new AllianceInformations();
  this.alliance.deserialize(input);
};

AlliancePrismInformation.prototype.getTypeId = function() {
  return 427;
};

AlliancePrismInformation.prototype.getClassName = function() {
  return 'AlliancePrismInformation';
};

module.exports.id = 427;
module.exports.class = AlliancePrismInformation;
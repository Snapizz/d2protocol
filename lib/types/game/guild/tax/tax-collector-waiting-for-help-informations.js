var BaseMessage = require('./tax-collector-complementary-informations.js').class,
  util = require('util');

var TaxCollectorWaitingForHelpInformations = function() {
  this.waitingForHelpInfo;
};

util.inherits(TaxCollectorWaitingForHelpInformations, BaseMessage);

TaxCollectorWaitingForHelpInformations.prototype.serialize = function(output) {
  this.serializeAs_TaxCollectorWaitingForHelpInformations(output);
};

TaxCollectorWaitingForHelpInformations.prototype.deserialize = function(input) {
  this.deserializeAs_TaxCollectorWaitingForHelpInformations(input);
};

TaxCollectorWaitingForHelpInformations.prototype.serializeAs_TaxCollectorWaitingForHelpInformations = function(output) {
  this.serializeAs_TaxCollectorComplementaryInformations(output);
  this.waitingForHelpInfo.serializeAs_ProtectedEntityWaitingForHelpInfo(output);
};

TaxCollectorWaitingForHelpInformations.prototype.deserializeAs_TaxCollectorWaitingForHelpInformations = function(input) {
  this.deserialize(input);
  this.waitingForHelpInfo = new ProtectedEntityWaitingForHelpInfo();
  this.waitingForHelpInfo.deserialize(input);
};

TaxCollectorWaitingForHelpInformations.prototype.getTypeId = function() {
  return 447;
};

TaxCollectorWaitingForHelpInformations.prototype.getClassName = function() {
  return 'TaxCollectorWaitingForHelpInformations';
};

module.exports.id = 447;
module.exports.class = TaxCollectorWaitingForHelpInformations;
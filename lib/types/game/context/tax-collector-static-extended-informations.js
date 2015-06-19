var BaseMessage = require('./tax-collector-static-informations.js').class,
  util = require('util');

var TaxCollectorStaticExtendedInformations = function() {
  this.allianceIdentity;
};

util.inherits(TaxCollectorStaticExtendedInformations, BaseMessage);

TaxCollectorStaticExtendedInformations.prototype.serialize = function(output) {
  this.serializeAs_TaxCollectorStaticExtendedInformations(output);
};

TaxCollectorStaticExtendedInformations.prototype.deserialize = function(input) {
  this.deserializeAs_TaxCollectorStaticExtendedInformations(input);
};

TaxCollectorStaticExtendedInformations.prototype.serializeAs_TaxCollectorStaticExtendedInformations = function(output) {
  this.serializeAs_TaxCollectorStaticInformations(output);
  this.allianceIdentity.serializeAs_AllianceInformations(output);
};

TaxCollectorStaticExtendedInformations.prototype.deserializeAs_TaxCollectorStaticExtendedInformations = function(input) {
  this.deserialize(input);
  this.allianceIdentity = new AllianceInformations();
  this.allianceIdentity.deserialize(input);
};

TaxCollectorStaticExtendedInformations.prototype.getTypeId = function() {
  return 440;
};

TaxCollectorStaticExtendedInformations.prototype.getClassName = function() {
  return 'TaxCollectorStaticExtendedInformations';
};

module.exports.id = 440;
module.exports.class = TaxCollectorStaticExtendedInformations;
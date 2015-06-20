var TaxCollectorStaticExtendedInformations = function() {
  this.allianceIdentity;
};



TaxCollectorStaticExtendedInformations.prototype.serialize = function(output) {
  this.serializeAs_TaxCollectorStaticExtendedInformations(output);
};

TaxCollectorStaticExtendedInformations.prototype.deserialize = function(input) {
  this.deserializeAs_TaxCollectorStaticExtendedInformations(input);
};

TaxCollectorStaticExtendedInformations.prototype.serializeAs_TaxCollectorStaticExtendedInformations = function(param1) {
  this.serializeAs_TaxCollectorStaticInformations(param1);
  this.allianceIdentity.serializeAs_AllianceInformations(param1);
};

TaxCollectorStaticExtendedInformations.prototype.deserializeAs_TaxCollectorStaticExtendedInformations = function(param1) {
  this.deserialize(param1);
  this.allianceIdentity = new AllianceInformations();
  this.allianceIdentity.deserialize(param1);
};

TaxCollectorStaticExtendedInformations.prototype.getTypeId = function() {
  return 440;
};

TaxCollectorStaticExtendedInformations.prototype.getClassName = function() {
  return 'TaxCollectorStaticExtendedInformations';
};

module.exports.id = 440;
module.exports.class = TaxCollectorStaticExtendedInformations;
module.exports.getInstance = function() {
  return new TaxCollectorStaticExtendedInformations();
};
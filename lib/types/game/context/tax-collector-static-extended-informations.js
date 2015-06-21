var TaxCollectorStaticExtendedInformations = function() {
    this.allianceIdentity = new AllianceInformations();
};

require('util').inherits(TaxCollectorStaticExtendedInformations, require('./tax-collector-static-informations.js'));

module.exports = function() {
    return new TaxCollectorStaticExtendedInformations();
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
    this.deserializeAs_TaxCollectorStaticInformations(param1);
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
module.exports.TaxCollectorStaticExtendedInformations = TaxCollectorStaticExtendedInformations;
var TaxCollectorWaitingForHelpInformations = function() {
    this.waitingForHelpInfo = new ProtectedEntityWaitingForHelpInfo();
};

require('util').inherits(TaxCollectorWaitingForHelpInformations, require('./tax-collector-complementary-informations.js').TaxCollectorComplementaryInformations);

module.exports = function() {
    return new TaxCollectorWaitingForHelpInformations();
};

TaxCollectorWaitingForHelpInformations.prototype.serialize = function(output) {
    this.serializeAs_TaxCollectorWaitingForHelpInformations(output);
};

TaxCollectorWaitingForHelpInformations.prototype.deserialize = function(input) {
    this.deserializeAs_TaxCollectorWaitingForHelpInformations(input);
};

TaxCollectorWaitingForHelpInformations.prototype.serializeAs_TaxCollectorWaitingForHelpInformations = function(param1) {
    this.serializeAs_TaxCollectorComplementaryInformations(param1);
    this.waitingForHelpInfo.serializeAs_ProtectedEntityWaitingForHelpInfo(param1);
};

TaxCollectorWaitingForHelpInformations.prototype.deserializeAs_TaxCollectorWaitingForHelpInformations = function(param1) {
    this.deserializeAs_TaxCollectorComplementaryInformations(param1);
    this.waitingForHelpInfo = new ProtectedEntityWaitingForHelpInfo();
    this.waitingForHelpInfo.deserialize(param1);
};

TaxCollectorWaitingForHelpInformations.prototype.getTypeId = function() {
    return 447;
};

TaxCollectorWaitingForHelpInformations.prototype.getClassName = function() {
    return 'TaxCollectorWaitingForHelpInformations';
};

module.exports.id = 447;
module.exports.TaxCollectorWaitingForHelpInformations = TaxCollectorWaitingForHelpInformations;
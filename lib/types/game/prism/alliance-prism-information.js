var AlliancePrismInformation = function() {
    this.alliance = new AllianceInformations();
};

require('util').inherits(AlliancePrismInformation, require('./prism-information.js').class);

AlliancePrismInformation.prototype.serialize = function(output) {
    this.serializeAs_AlliancePrismInformation(output);
};

AlliancePrismInformation.prototype.deserialize = function(input) {
    this.deserializeAs_AlliancePrismInformation(input);
};

AlliancePrismInformation.prototype.serializeAs_AlliancePrismInformation = function(param1) {
    this.serializeAs_PrismInformationAs_PrismInformation(param1);
    this.alliance.serializeAs_AllianceInformations(param1);
};

AlliancePrismInformation.prototype.deserializeAs_AlliancePrismInformation = function(param1) {
    this.deserializeAs_PrismInformation(param1);
    this.alliance = new AllianceInformations();
    this.alliance.deserialize(param1);
};

AlliancePrismInformation.prototype.getTypeId = function() {
    return 427;
};

AlliancePrismInformation.prototype.getClassName = function() {
    return 'AlliancePrismInformation';
};

module.exports.id = 427;
module.exports.class = AlliancePrismInformation;
module.exports.getInstance = function() {
    return new AlliancePrismInformation;
};
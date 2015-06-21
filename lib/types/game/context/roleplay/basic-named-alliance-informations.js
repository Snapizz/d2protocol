var BasicNamedAllianceInformations = function() {
    this.allianceName = "";
};

require('util').inherits(BasicNamedAllianceInformations, require('./basic-alliance-informations.js'));

module.exports = function() {
    return new BasicNamedAllianceInformations();
};

BasicNamedAllianceInformations.prototype.serialize = function(output) {
    this.serializeAs_BasicNamedAllianceInformations(output);
};

BasicNamedAllianceInformations.prototype.deserialize = function(input) {
    this.deserializeAs_BasicNamedAllianceInformations(input);
};

BasicNamedAllianceInformations.prototype.serializeAs_BasicNamedAllianceInformations = function(param1) {
    this.serializeAs_BasicAllianceInformations(param1);
    param1.writeUTF(this.allianceName);
};

BasicNamedAllianceInformations.prototype.deserializeAs_BasicNamedAllianceInformations = function(param1) {
    this.deserializeAs_BasicAllianceInformations(param1);
    this.allianceName = param1.readUTF();
};

BasicNamedAllianceInformations.prototype.getTypeId = function() {
    return 418;
};

BasicNamedAllianceInformations.prototype.getClassName = function() {
    return 'BasicNamedAllianceInformations';
};

module.exports.id = 418;
module.exports.BasicNamedAllianceInformations = BasicNamedAllianceInformations;
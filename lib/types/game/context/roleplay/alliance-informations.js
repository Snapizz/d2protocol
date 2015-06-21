var AllianceInformations = function() {
    this.allianceEmblem = new GuildEmblem();
};

require('util').inherits(AllianceInformations, require('./basic-named-alliance-informations.js').BasicNamedAllianceInformations);

module.exports = function() {
    return new AllianceInformations();
};

AllianceInformations.prototype.serialize = function(output) {
    this.serializeAs_AllianceInformations(output);
};

AllianceInformations.prototype.deserialize = function(input) {
    this.deserializeAs_AllianceInformations(input);
};

AllianceInformations.prototype.serializeAs_AllianceInformations = function(param1) {
    this.serializeAs_BasicNamedAllianceInformations(param1);
    this.allianceEmblem.serializeAs_GuildEmblem(param1);
};

AllianceInformations.prototype.deserializeAs_AllianceInformations = function(param1) {
    this.deserializeAs_BasicNamedAllianceInformations(param1);
    this.allianceEmblem = new GuildEmblem();
    this.allianceEmblem.deserialize(param1);
};

AllianceInformations.prototype.getTypeId = function() {
    return 417;
};

AllianceInformations.prototype.getClassName = function() {
    return 'AllianceInformations';
};

module.exports.id = 417;
module.exports.AllianceInformations = AllianceInformations;
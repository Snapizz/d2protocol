var BaseMessage = require('./basic-named-alliance-informations.js').class,
  util = require('util');

var AllianceInformations = function() {
  this.allianceEmblem;
};

util.inherits(AllianceInformations, BaseMessage);

AllianceInformations.prototype.serialize = function(output) {
  this.serializeAs_AllianceInformations(output);
};

AllianceInformations.prototype.deserialize = function(input) {
  this.deserializeAs_AllianceInformations(input);
};

AllianceInformations.prototype.serializeAs_AllianceInformations = function(output) {
  this.serializeAs_BasicNamedAllianceInformations(output);
  this.allianceEmblem.serializeAs_GuildEmblem(output);
};

AllianceInformations.prototype.deserializeAs_AllianceInformations = function(input) {
  this.deserialize(input);
  this.allianceEmblem = new GuildEmblem();
  this.allianceEmblem.deserialize(input);
};

AllianceInformations.prototype.getTypeId = function() {
  return 417;
};

AllianceInformations.prototype.getClassName = function() {
  return 'AllianceInformations';
};

module.exports.id = 417;
module.exports.class = AllianceInformations;
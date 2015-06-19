var BaseMessage = require('../context/roleplay/guild-informations.js').class,
  util = require('util');

var AlliancedGuildFactSheetInformations = function() {
  this.allianceInfos;
};

util.inherits(AlliancedGuildFactSheetInformations, BaseMessage);

AlliancedGuildFactSheetInformations.prototype.serialize = function(output) {
  this.serializeAs_AlliancedGuildFactSheetInformations(output);
};

AlliancedGuildFactSheetInformations.prototype.deserialize = function(input) {
  this.deserializeAs_AlliancedGuildFactSheetInformations(input);
};

AlliancedGuildFactSheetInformations.prototype.serializeAs_AlliancedGuildFactSheetInformations = function(output) {
  this.serializeAs_GuildInformations(output);
  this.allianceInfos.serializeAs_BasicNamedAllianceInformations(output);
};

AlliancedGuildFactSheetInformations.prototype.deserializeAs_AlliancedGuildFactSheetInformations = function(input) {
  this.deserialize(input);
  this.allianceInfos = new BasicNamedAllianceInformations();
  this.allianceInfos.deserialize(input);
};

AlliancedGuildFactSheetInformations.prototype.getTypeId = function() {
  return 422;
};

AlliancedGuildFactSheetInformations.prototype.getClassName = function() {
  return 'AlliancedGuildFactSheetInformations';
};

module.exports.id = 422;
module.exports.class = AlliancedGuildFactSheetInformations;
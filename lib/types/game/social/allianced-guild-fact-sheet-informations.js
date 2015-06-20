var AlliancedGuildFactSheetInformations = function() {
  this.allianceInfos;
};



AlliancedGuildFactSheetInformations.prototype.serialize = function(output) {
  this.serializeAs_AlliancedGuildFactSheetInformations(output);
};

AlliancedGuildFactSheetInformations.prototype.deserialize = function(input) {
  this.deserializeAs_AlliancedGuildFactSheetInformations(input);
};

AlliancedGuildFactSheetInformations.prototype.serializeAs_AlliancedGuildFactSheetInformations = function(output) {
  this.serializeAs_GuildInformations(param1);
  this.allianceInfos.serializeAs_BasicNamedAllianceInformations(param1);
};

AlliancedGuildFactSheetInformations.prototype.deserializeAs_AlliancedGuildFactSheetInformations = function(input) {
  this.deserialize(param1);
  this.allianceInfos = new BasicNamedAllianceInformations();
  this.allianceInfos.deserialize(param1);
};

AlliancedGuildFactSheetInformations.prototype.getTypeId = function() {
  return 422;
};

AlliancedGuildFactSheetInformations.prototype.getClassName = function() {
  return 'AlliancedGuildFactSheetInformations';
};

module.exports.id = 422;
module.exports.class = AlliancedGuildFactSheetInformations;
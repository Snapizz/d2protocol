var HouseInformationsExtended = function() {
  this.guildInfo;
};



HouseInformationsExtended.prototype.serialize = function(output) {
  this.serializeAs_HouseInformationsExtended(output);
};

HouseInformationsExtended.prototype.deserialize = function(input) {
  this.deserializeAs_HouseInformationsExtended(input);
};

HouseInformationsExtended.prototype.serializeAs_HouseInformationsExtended = function(output) {
  this.serializeAs_HouseInformations(param1);
  this.guildInfo.serializeAs_GuildInformations(param1);
};

HouseInformationsExtended.prototype.deserializeAs_HouseInformationsExtended = function(input) {
  this.deserialize(param1);
  this.guildInfo = new GuildInformations();
  this.guildInfo.deserialize(param1);
};

HouseInformationsExtended.prototype.getTypeId = function() {
  return 112;
};

HouseInformationsExtended.prototype.getClassName = function() {
  return 'HouseInformationsExtended';
};

module.exports.id = 112;
module.exports.class = HouseInformationsExtended;
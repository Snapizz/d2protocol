var BaseMessage = require('./house-informations.js').class,
  util = require('util');

var HouseInformationsExtended = function() {
  this.guildInfo;
};

util.inherits(HouseInformationsExtended, BaseMessage);

HouseInformationsExtended.prototype.serialize = function(output) {
  this.serializeAs_HouseInformationsExtended(output);
};

HouseInformationsExtended.prototype.deserialize = function(input) {
  this.deserializeAs_HouseInformationsExtended(input);
};

HouseInformationsExtended.prototype.serializeAs_HouseInformationsExtended = function(output) {
  this.serializeAs_HouseInformations(output);
  this.guildInfo.serializeAs_GuildInformations(output);
};

HouseInformationsExtended.prototype.deserializeAs_HouseInformationsExtended = function(input) {
  this.deserialize(input);
  this.guildInfo = new GuildInformations();
  this.guildInfo.deserialize(input);
};

HouseInformationsExtended.prototype.getTypeId = function() {
  return 112;
};

HouseInformationsExtended.prototype.getClassName = function() {
  return 'HouseInformationsExtended';
};

module.exports.id = 112;
module.exports.class = HouseInformationsExtended;
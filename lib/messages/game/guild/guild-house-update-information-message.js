var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildHouseUpdateInformationMessage = function() {
  this.housesInformations;
};

util.inherits(GuildHouseUpdateInformationMessage, BaseMessage);

GuildHouseUpdateInformationMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildHouseUpdateInformationMessage(output);
};

GuildHouseUpdateInformationMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildHouseUpdateInformationMessage(input);
};

GuildHouseUpdateInformationMessage.prototype.serializeAs_GuildHouseUpdateInformationMessage = function(output) {
  this.housesInformations.serializeAs_HouseInformationsForGuild(output);
};

GuildHouseUpdateInformationMessage.prototype.deserializeAs_GuildHouseUpdateInformationMessage = function(input) {
  this.housesInformations = new HouseInformationsForGuild();
  this.housesInformations.deserialize(input);
};

GuildHouseUpdateInformationMessage.prototype.getMessageId = function() {
  return 6181;
};

GuildHouseUpdateInformationMessage.prototype.getClassName = function() {
  return 'GuildHouseUpdateInformationMessage';
};

module.exports.id = 6181;
module.exports.class = GuildHouseUpdateInformationMessage;
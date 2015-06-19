var d2com = require('d2com'),
  BaseMessage = require('./guild-fight-join-request-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildFightTakePlaceRequestMessage = function() {
  this.replacedCharacterId = 0;
};

util.inherits(GuildFightTakePlaceRequestMessage, BaseMessage);

GuildFightTakePlaceRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildFightTakePlaceRequestMessage(output);
};

GuildFightTakePlaceRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildFightTakePlaceRequestMessage(input);
};

GuildFightTakePlaceRequestMessage.prototype.serializeAs_GuildFightTakePlaceRequestMessage = function(output) {
  this.serializeAs_GuildFightJoinRequestMessage(output);
  output.writeInt(this.replacedCharacterId);
};

GuildFightTakePlaceRequestMessage.prototype.deserializeAs_GuildFightTakePlaceRequestMessage = function(input) {
  this.deserialize(input);
  this.replacedCharacterId = input.readInt();
};

GuildFightTakePlaceRequestMessage.prototype.getMessageId = function() {
  return 6235;
};

GuildFightTakePlaceRequestMessage.prototype.getClassName = function() {
  return 'GuildFightTakePlaceRequestMessage';
};

module.exports.id = 6235;
module.exports.class = GuildFightTakePlaceRequestMessage;
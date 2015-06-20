var d2com = require('d2com'),
  BaseMessage = require('./guild-fight-take-place-request-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

GuildFightTakePlaceRequestMessage.prototype.serializeAs_GuildFightTakePlaceRequestMessage = function(param1) {
  this.serializeAs_GuildFightJoinRequestMessage(param1);
  param1.writeInt(this.replacedCharacterId);
};

GuildFightTakePlaceRequestMessage.prototype.deserializeAs_GuildFightTakePlaceRequestMessage = function(param1) {
  this.deserialize(param1);
  this.replacedCharacterId = param1.readInt();
};

GuildFightTakePlaceRequestMessage.prototype.getMessageId = function() {
  return 6235;
};

GuildFightTakePlaceRequestMessage.prototype.getClassName = function() {
  return 'GuildFightTakePlaceRequestMessage';
};

module.exports.id = 6235;
module.exports.class = GuildFightTakePlaceRequestMessage;
module.exports.getInstance = function() {
  return new GuildFightTakePlaceRequestMessage();
};
var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var GuildFightJoinRequestMessage = function() {
  this.taxCollectorId = 0;
};

util.inherits(GuildFightJoinRequestMessage, BaseMessage);

GuildFightJoinRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildFightJoinRequestMessage(output);
};

GuildFightJoinRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildFightJoinRequestMessage(input);
};

GuildFightJoinRequestMessage.prototype.serializeAs_GuildFightJoinRequestMessage = function(param1) {
  param1.writeInt(this.taxCollectorId);
};

GuildFightJoinRequestMessage.prototype.deserializeAs_GuildFightJoinRequestMessage = function(param1) {
  this.taxCollectorId = param1.readInt();
};

GuildFightJoinRequestMessage.prototype.getMessageId = function() {
  return 5717;
};

GuildFightJoinRequestMessage.prototype.getClassName = function() {
  return 'GuildFightJoinRequestMessage';
};

module.exports.id = 5717;
module.exports.class = GuildFightJoinRequestMessage;
module.exports.getInstance = function() {
  return new GuildFightJoinRequestMessage();
};
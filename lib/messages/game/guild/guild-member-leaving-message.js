var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var GuildMemberLeavingMessage = function() {
  this.kicked = false;
  this.memberId = 0;
};

util.inherits(GuildMemberLeavingMessage, BaseMessage);

GuildMemberLeavingMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildMemberLeavingMessage(output);
};

GuildMemberLeavingMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildMemberLeavingMessage(input);
};

GuildMemberLeavingMessage.prototype.serializeAs_GuildMemberLeavingMessage = function(param1) {
  param1.writeBoolean(this.kicked);
  param1.writeInt(this.memberId);
};

GuildMemberLeavingMessage.prototype.deserializeAs_GuildMemberLeavingMessage = function(param1) {
  this.kicked = param1.readBoolean();
  this.memberId = param1.readInt();
};

GuildMemberLeavingMessage.prototype.getMessageId = function() {
  return 5923;
};

GuildMemberLeavingMessage.prototype.getClassName = function() {
  return 'GuildMemberLeavingMessage';
};

module.exports.id = 5923;
module.exports.class = GuildMemberLeavingMessage;
module.exports.getInstance = function() {
  return new GuildMemberLeavingMessage();
};
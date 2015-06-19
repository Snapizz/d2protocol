var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

GuildMemberLeavingMessage.prototype.serializeAs_GuildMemberLeavingMessage = function(output) {
  output.writeBoolean(this.kicked);
  output.writeInt(this.memberId);
};

GuildMemberLeavingMessage.prototype.deserializeAs_GuildMemberLeavingMessage = function(input) {
  this.kicked = input.readBoolean();
  this.memberId = input.readInt();
};

GuildMemberLeavingMessage.prototype.getMessageId = function() {
  return 5923;
};

GuildMemberLeavingMessage.prototype.getClassName = function() {
  return 'GuildMemberLeavingMessage';
};

module.exports.id = 5923;
module.exports.class = GuildMemberLeavingMessage;
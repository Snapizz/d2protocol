var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildMemberWarnOnConnectionStateMessage = function() {
  this.enable = false;
};

util.inherits(GuildMemberWarnOnConnectionStateMessage, BaseMessage);

GuildMemberWarnOnConnectionStateMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildMemberWarnOnConnectionStateMessage(output);
};

GuildMemberWarnOnConnectionStateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildMemberWarnOnConnectionStateMessage(input);
};

GuildMemberWarnOnConnectionStateMessage.prototype.serializeAs_GuildMemberWarnOnConnectionStateMessage = function(output) {
  param1.writeBoolean(this.enable);
};

GuildMemberWarnOnConnectionStateMessage.prototype.deserializeAs_GuildMemberWarnOnConnectionStateMessage = function(input) {
  this.enable = param1.readBoolean();
};

GuildMemberWarnOnConnectionStateMessage.prototype.getMessageId = function() {
  return 6160;
};

GuildMemberWarnOnConnectionStateMessage.prototype.getClassName = function() {
  return 'GuildMemberWarnOnConnectionStateMessage';
};

module.exports.id = 6160;
module.exports.class = GuildMemberWarnOnConnectionStateMessage;
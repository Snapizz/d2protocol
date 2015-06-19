var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildMemberSetWarnOnConnectionMessage = function() {
  this.enable = false;
};

util.inherits(GuildMemberSetWarnOnConnectionMessage, BaseMessage);

GuildMemberSetWarnOnConnectionMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildMemberSetWarnOnConnectionMessage(output);
};

GuildMemberSetWarnOnConnectionMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildMemberSetWarnOnConnectionMessage(input);
};

GuildMemberSetWarnOnConnectionMessage.prototype.serializeAs_GuildMemberSetWarnOnConnectionMessage = function(output) {
  output.writeBoolean(this.enable);
};

GuildMemberSetWarnOnConnectionMessage.prototype.deserializeAs_GuildMemberSetWarnOnConnectionMessage = function(input) {
  this.enable = input.readBoolean();
};

GuildMemberSetWarnOnConnectionMessage.prototype.getMessageId = function() {
  return 6159;
};

GuildMemberSetWarnOnConnectionMessage.prototype.getClassName = function() {
  return 'GuildMemberSetWarnOnConnectionMessage';
};

module.exports.id = 6159;
module.exports.class = GuildMemberSetWarnOnConnectionMessage;
var d2com = require('d2com'),
  BaseMessage = require('./guild-member-set-warn-on-connection-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

GuildMemberSetWarnOnConnectionMessage.prototype.serializeAs_GuildMemberSetWarnOnConnectionMessage = function(param1) {
  param1.writeBoolean(this.enable);
};

GuildMemberSetWarnOnConnectionMessage.prototype.deserializeAs_GuildMemberSetWarnOnConnectionMessage = function(param1) {
  this.enable = param1.readBoolean();
};

GuildMemberSetWarnOnConnectionMessage.prototype.getMessageId = function() {
  return 6159;
};

GuildMemberSetWarnOnConnectionMessage.prototype.getClassName = function() {
  return 'GuildMemberSetWarnOnConnectionMessage';
};

module.exports.id = 6159;
module.exports.class = GuildMemberSetWarnOnConnectionMessage;
module.exports.getInstance = function() {
  return new GuildMemberSetWarnOnConnectionMessage();
};
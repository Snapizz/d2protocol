var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var GuildModificationNameValidMessage = function() {
  this.guildName = "";
};

util.inherits(GuildModificationNameValidMessage, BaseMessage);

GuildModificationNameValidMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildModificationNameValidMessage(output);
};

GuildModificationNameValidMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildModificationNameValidMessage(input);
};

GuildModificationNameValidMessage.prototype.serializeAs_GuildModificationNameValidMessage = function(param1) {
  param1.writeUTF(this.guildName);
};

GuildModificationNameValidMessage.prototype.deserializeAs_GuildModificationNameValidMessage = function(param1) {
  this.guildName = param1.readUTF();
};

GuildModificationNameValidMessage.prototype.getMessageId = function() {
  return 6327;
};

GuildModificationNameValidMessage.prototype.getClassName = function() {
  return 'GuildModificationNameValidMessage';
};

module.exports.id = 6327;
module.exports.class = GuildModificationNameValidMessage;
var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildModificationValidMessage = function() {
  this.guildName = "";
  this.guildEmblem;
};

util.inherits(GuildModificationValidMessage, BaseMessage);

GuildModificationValidMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildModificationValidMessage(output);
};

GuildModificationValidMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildModificationValidMessage(input);
};

GuildModificationValidMessage.prototype.serializeAs_GuildModificationValidMessage = function(output) {
  output.writeUTF(this.guildName);
  this.guildEmblem.serializeAs_GuildEmblem(output);
};

GuildModificationValidMessage.prototype.deserializeAs_GuildModificationValidMessage = function(input) {
  this.guildName = input.readUTF();
  this.guildEmblem = new GuildEmblem();
  this.guildEmblem.deserialize(input);
};

GuildModificationValidMessage.prototype.getMessageId = function() {
  return 6323;
};

GuildModificationValidMessage.prototype.getClassName = function() {
  return 'GuildModificationValidMessage';
};

module.exports.id = 6323;
module.exports.class = GuildModificationValidMessage;
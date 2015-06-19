var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildModificationEmblemValidMessage = function() {
  this.guildEmblem;
};

util.inherits(GuildModificationEmblemValidMessage, BaseMessage);

GuildModificationEmblemValidMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildModificationEmblemValidMessage(output);
};

GuildModificationEmblemValidMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildModificationEmblemValidMessage(input);
};

GuildModificationEmblemValidMessage.prototype.serializeAs_GuildModificationEmblemValidMessage = function(output) {
  this.guildEmblem.serializeAs_GuildEmblem(output);
};

GuildModificationEmblemValidMessage.prototype.deserializeAs_GuildModificationEmblemValidMessage = function(input) {
  this.guildEmblem = new GuildEmblem();
  this.guildEmblem.deserialize(input);
};

GuildModificationEmblemValidMessage.prototype.getMessageId = function() {
  return 6328;
};

GuildModificationEmblemValidMessage.prototype.getClassName = function() {
  return 'GuildModificationEmblemValidMessage';
};

module.exports.id = 6328;
module.exports.class = GuildModificationEmblemValidMessage;
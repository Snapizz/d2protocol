var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildCreationValidMessage = function() {
  this.guildName = "";
  this.guildEmblem;
};

util.inherits(GuildCreationValidMessage, BaseMessage);

GuildCreationValidMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildCreationValidMessage(output);
};

GuildCreationValidMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildCreationValidMessage(input);
};

GuildCreationValidMessage.prototype.serializeAs_GuildCreationValidMessage = function(output) {
  param1.writeUTF(this.guildName);
  this.guildEmblem.serializeAs_GuildEmblem(param1);
};

GuildCreationValidMessage.prototype.deserializeAs_GuildCreationValidMessage = function(input) {
  this.guildName = param1.readUTF();
  this.guildEmblem = new GuildEmblem();
  this.guildEmblem.deserialize(param1);
};

GuildCreationValidMessage.prototype.getMessageId = function() {
  return 5546;
};

GuildCreationValidMessage.prototype.getClassName = function() {
  return 'GuildCreationValidMessage';
};

module.exports.id = 5546;
module.exports.class = GuildCreationValidMessage;
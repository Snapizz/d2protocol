var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildEmblem = require('../../../types/game/guild/guild-emblem.js').class;

var GuildCreationValidMessage = function() {
  this.guildName = "";
  this.guildEmblem = new GuildEmblem();
};

util.inherits(GuildCreationValidMessage, BaseMessage);

GuildCreationValidMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildCreationValidMessage(output);
};

GuildCreationValidMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildCreationValidMessage(input);
};

GuildCreationValidMessage.prototype.serializeAs_GuildCreationValidMessage = function(param1) {
  param1.writeUTF(this.guildName);
  this.guildEmblem.serializeAs_GuildEmblem(param1);
};

GuildCreationValidMessage.prototype.deserializeAs_GuildCreationValidMessage = function(param1) {
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
module.exports.getInstance = function() {
  return new GuildCreationValidMessage();
};
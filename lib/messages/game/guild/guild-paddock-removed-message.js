var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildPaddockRemovedMessage = function() {
  this.paddockId = 0;
};

util.inherits(GuildPaddockRemovedMessage, BaseMessage);

GuildPaddockRemovedMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildPaddockRemovedMessage(output);
};

GuildPaddockRemovedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildPaddockRemovedMessage(input);
};

GuildPaddockRemovedMessage.prototype.serializeAs_GuildPaddockRemovedMessage = function(output) {
  param1.writeInt(this.paddockId);
};

GuildPaddockRemovedMessage.prototype.deserializeAs_GuildPaddockRemovedMessage = function(input) {
  this.paddockId = param1.readInt();
};

GuildPaddockRemovedMessage.prototype.getMessageId = function() {
  return 5955;
};

GuildPaddockRemovedMessage.prototype.getClassName = function() {
  return 'GuildPaddockRemovedMessage';
};

module.exports.id = 5955;
module.exports.class = GuildPaddockRemovedMessage;
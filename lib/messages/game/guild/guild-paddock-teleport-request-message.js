var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildPaddockTeleportRequestMessage = function() {
  this.paddockId = 0;
};

util.inherits(GuildPaddockTeleportRequestMessage, BaseMessage);

GuildPaddockTeleportRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildPaddockTeleportRequestMessage(output);
};

GuildPaddockTeleportRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildPaddockTeleportRequestMessage(input);
};

GuildPaddockTeleportRequestMessage.prototype.serializeAs_GuildPaddockTeleportRequestMessage = function(output) {
  param1.writeInt(this.paddockId);
};

GuildPaddockTeleportRequestMessage.prototype.deserializeAs_GuildPaddockTeleportRequestMessage = function(input) {
  this.paddockId = param1.readInt();
};

GuildPaddockTeleportRequestMessage.prototype.getMessageId = function() {
  return 5957;
};

GuildPaddockTeleportRequestMessage.prototype.getClassName = function() {
  return 'GuildPaddockTeleportRequestMessage';
};

module.exports.id = 5957;
module.exports.class = GuildPaddockTeleportRequestMessage;
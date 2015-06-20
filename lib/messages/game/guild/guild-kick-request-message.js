var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var GuildKickRequestMessage = function() {
  this.kickedId = 0;
};

util.inherits(GuildKickRequestMessage, BaseMessage);

GuildKickRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildKickRequestMessage(output);
};

GuildKickRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildKickRequestMessage(input);
};

GuildKickRequestMessage.prototype.serializeAs_GuildKickRequestMessage = function(param1) {
  if (this.kickedId < 0) {
    throw new Error("Forbidden value (" + this.kickedId + ") on element kickedId.");
  } else {
    param1.writeVarInt(this.kickedId);
    return;
  }
};

GuildKickRequestMessage.prototype.deserializeAs_GuildKickRequestMessage = function(param1) {
  this.kickedId = param1.readVarUhInt();
  if (this.kickedId < 0) {
    throw new Error("Forbidden value (" + this.kickedId + ") on element of GuildKickRequestMessage.kickedId.");
  } else {
    return;
  }
};

GuildKickRequestMessage.prototype.getMessageId = function() {
  return 5887;
};

GuildKickRequestMessage.prototype.getClassName = function() {
  return 'GuildKickRequestMessage';
};

module.exports.id = 5887;
module.exports.class = GuildKickRequestMessage;
module.exports.getInstance = function() {
  return new GuildKickRequestMessage();
};
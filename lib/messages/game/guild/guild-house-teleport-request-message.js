var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var GuildHouseTeleportRequestMessage = function() {
  this.houseId = 0;
};

util.inherits(GuildHouseTeleportRequestMessage, BaseMessage);

GuildHouseTeleportRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildHouseTeleportRequestMessage(output);
};

GuildHouseTeleportRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildHouseTeleportRequestMessage(input);
};

GuildHouseTeleportRequestMessage.prototype.serializeAs_GuildHouseTeleportRequestMessage = function(param1) {
  if (this.houseId < 0) {
    throw new Error("Forbidden value (" + this.houseId + ") on element houseId.");
  } else {
    param1.writeVarInt(this.houseId);
    return;
  }
};

GuildHouseTeleportRequestMessage.prototype.deserializeAs_GuildHouseTeleportRequestMessage = function(param1) {
  this.houseId = param1.readVarUhInt();
  if (this.houseId < 0) {
    throw new Error("Forbidden value (" + this.houseId + ") on element of GuildHouseTeleportRequestMessage.houseId.");
  } else {
    return;
  }
};

GuildHouseTeleportRequestMessage.prototype.getMessageId = function() {
  return 5712;
};

GuildHouseTeleportRequestMessage.prototype.getClassName = function() {
  return 'GuildHouseTeleportRequestMessage';
};

module.exports.id = 5712;
module.exports.class = GuildHouseTeleportRequestMessage;
module.exports.getInstance = function() {
  return new GuildHouseTeleportRequestMessage();
};
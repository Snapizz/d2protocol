var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildHouseRemoveMessage = function() {
  this.houseId = 0;
};

util.inherits(GuildHouseRemoveMessage, BaseMessage);

GuildHouseRemoveMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildHouseRemoveMessage(output);
};

GuildHouseRemoveMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildHouseRemoveMessage(input);
};

GuildHouseRemoveMessage.prototype.serializeAs_GuildHouseRemoveMessage = function(output) {
  if (this.houseId < 0) {
    throw new Error("Forbidden value (" + this.houseId + ") on element houseId.");
  } else {
    param1.writeVarInt(this.houseId);
    return;
  }
};

GuildHouseRemoveMessage.prototype.deserializeAs_GuildHouseRemoveMessage = function(input) {
  this.houseId = param1.readVarUhInt();
  if (this.houseId < 0) {
    throw new Error("Forbidden value (" + this.houseId + ") on element of GuildHouseRemoveMessage.houseId.");
  } else {
    return;
  }
};

GuildHouseRemoveMessage.prototype.getMessageId = function() {
  return 6180;
};

GuildHouseRemoveMessage.prototype.getClassName = function() {
  return 'GuildHouseRemoveMessage';
};

module.exports.id = 6180;
module.exports.class = GuildHouseRemoveMessage;
var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

GuildHouseTeleportRequestMessage.prototype.serializeAs_GuildHouseTeleportRequestMessage = function(output) {
  if (this.houseId < 0) {
    throw (new Error((("Forbidden value (" + this.houseId) + ") on element houseId.")));
  };
  output.writeVarInt(this.houseId);
};

GuildHouseTeleportRequestMessage.prototype.deserializeAs_GuildHouseTeleportRequestMessage = function(input) {
  this.houseId = input.readVarUhInt();
  if (this.houseId < 0) {
    throw (new Error((("Forbidden value (" + this.houseId) + ") on element of GuildHouseTeleportRequestMessage.houseId.")));
  };
};

GuildHouseTeleportRequestMessage.prototype.getMessageId = function() {
  return 5712;
};

GuildHouseTeleportRequestMessage.prototype.getClassName = function() {
  return 'GuildHouseTeleportRequestMessage';
};

module.exports.id = 5712;
module.exports.class = GuildHouseTeleportRequestMessage;
var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var HouseKickRequestMessage = function() {
  this.id = 0;
};

util.inherits(HouseKickRequestMessage, BaseMessage);

HouseKickRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_HouseKickRequestMessage(output);
};

HouseKickRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_HouseKickRequestMessage(input);
};

HouseKickRequestMessage.prototype.serializeAs_HouseKickRequestMessage = function(param1) {
  if (this.id < 0) {
    throw new Error("Forbidden value (" + this.id + ") on element id.");
  } else {
    param1.writeVarInt(this.id);
    return;
  }
};

HouseKickRequestMessage.prototype.deserializeAs_HouseKickRequestMessage = function(param1) {
  this.id = param1.readVarUhInt();
  if (this.id < 0) {
    throw new Error("Forbidden value (" + this.id + ") on element of HouseKickRequestMessage.id.");
  } else {
    return;
  }
};

HouseKickRequestMessage.prototype.getMessageId = function() {
  return 5698;
};

HouseKickRequestMessage.prototype.getClassName = function() {
  return 'HouseKickRequestMessage';
};

module.exports.id = 5698;
module.exports.class = HouseKickRequestMessage;
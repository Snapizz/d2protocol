var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var LockableStateUpdateHouseDoorMessage = function() {
  this.houseId = 0;
};

util.inherits(LockableStateUpdateHouseDoorMessage, BaseMessage);

LockableStateUpdateHouseDoorMessage.prototype.serialize = function(output) {
  this.serializeAs_LockableStateUpdateHouseDoorMessage(output);
};

LockableStateUpdateHouseDoorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_LockableStateUpdateHouseDoorMessage(input);
};

LockableStateUpdateHouseDoorMessage.prototype.serializeAs_LockableStateUpdateHouseDoorMessage = function(output) {
  super.serializeAs_LockableStateUpdateAbstractMessage(param1);
  if (this.houseId < 0) {
    throw new Error("Forbidden value (" + this.houseId + ") on element houseId.");
  } else {
    param1.writeVarInt(this.houseId);
    return;
  }
};

LockableStateUpdateHouseDoorMessage.prototype.deserializeAs_LockableStateUpdateHouseDoorMessage = function(input) {
  super.deserialize(param1);
  this.houseId = param1.readVarUhInt();
  if (this.houseId < 0) {
    throw new Error("Forbidden value (" + this.houseId + ") on element of LockableStateUpdateHouseDoorMessage.houseId.");
  } else {
    return;
  }
};

LockableStateUpdateHouseDoorMessage.prototype.getMessageId = function() {
  return 5668;
};

LockableStateUpdateHouseDoorMessage.prototype.getClassName = function() {
  return 'LockableStateUpdateHouseDoorMessage';
};

module.exports.id = 5668;
module.exports.class = LockableStateUpdateHouseDoorMessage;
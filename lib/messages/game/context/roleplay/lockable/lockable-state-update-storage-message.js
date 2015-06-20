var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var LockableStateUpdateStorageMessage = function() {
  this.mapId = 0;
  this.elementId = 0;
};

util.inherits(LockableStateUpdateStorageMessage, BaseMessage);

LockableStateUpdateStorageMessage.prototype.serialize = function(output) {
  this.serializeAs_LockableStateUpdateStorageMessage(output);
};

LockableStateUpdateStorageMessage.prototype.deserialize = function(input) {
  this.deserializeAs_LockableStateUpdateStorageMessage(input);
};

LockableStateUpdateStorageMessage.prototype.serializeAs_LockableStateUpdateStorageMessage = function(param1) {
  this.serializeAs_LockableStateUpdateAbstractMessage(param1);
  param1.writeInt(this.mapId);
  if (this.elementId < 0) {
    throw new Error("Forbidden value (" + this.elementId + ") on element elementId.");
  } else {
    param1.writeVarInt(this.elementId);
    return;
  }
};

LockableStateUpdateStorageMessage.prototype.deserializeAs_LockableStateUpdateStorageMessage = function(param1) {
  this.deserialize(param1);
  this.mapId = param1.readInt();
  this.elementId = param1.readVarUhInt();
  if (this.elementId < 0) {
    throw new Error("Forbidden value (" + this.elementId + ") on element of LockableStateUpdateStorageMessage.elementId.");
  } else {
    return;
  }
};

LockableStateUpdateStorageMessage.prototype.getMessageId = function() {
  return 5669;
};

LockableStateUpdateStorageMessage.prototype.getClassName = function() {
  return 'LockableStateUpdateStorageMessage';
};

module.exports.id = 5669;
module.exports.class = LockableStateUpdateStorageMessage;
module.exports.getInstance = function() {
  return new LockableStateUpdateStorageMessage();
};
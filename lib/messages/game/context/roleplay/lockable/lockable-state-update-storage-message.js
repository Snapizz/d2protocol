var d2com = require('d2com'),
  BaseMessage = require('./lockable-state-update-abstract-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
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

LockableStateUpdateStorageMessage.prototype.serializeAs_LockableStateUpdateStorageMessage = function(output) {
  this.serializeAs_LockableStateUpdateAbstractMessage(output);
  output.writeInt(this.mapId);
  if (this.elementId < 0) {
    throw (new Error((("Forbidden value (" + this.elementId) + ") on element elementId.")));
  };
  output.writeVarInt(this.elementId);
};

LockableStateUpdateStorageMessage.prototype.deserializeAs_LockableStateUpdateStorageMessage = function(input) {
  this.deserialize(input);
  this.mapId = input.readInt();
  this.elementId = input.readVarUhInt();
  if (this.elementId < 0) {
    throw (new Error((("Forbidden value (" + this.elementId) + ") on element of LockableStateUpdateStorageMessage.elementId.")));
  };
};

LockableStateUpdateStorageMessage.prototype.getMessageId = function() {
  return 5669;
};

LockableStateUpdateStorageMessage.prototype.getClassName = function() {
  return 'LockableStateUpdateStorageMessage';
};

module.exports.id = 5669;
module.exports.class = LockableStateUpdateStorageMessage;
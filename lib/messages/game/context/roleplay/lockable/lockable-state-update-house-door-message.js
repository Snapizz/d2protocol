var d2com = require('d2com'),
  BaseMessage = require('./lockable-state-update-abstract-message.js').class,
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
  this.serializeAs_LockableStateUpdateAbstractMessage(output);
  output.writeInt(this.houseId);
};

LockableStateUpdateHouseDoorMessage.prototype.deserializeAs_LockableStateUpdateHouseDoorMessage = function(input) {
  this.deserialize(input);
  this.houseId = input.readInt();
};

LockableStateUpdateHouseDoorMessage.prototype.getMessageId = function() {
  return 5668;
};

LockableStateUpdateHouseDoorMessage.prototype.getClassName = function() {
  return 'LockableStateUpdateHouseDoorMessage';
};

module.exports.id = 5668;
module.exports.class = LockableStateUpdateHouseDoorMessage;
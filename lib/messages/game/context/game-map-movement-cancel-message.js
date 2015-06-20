var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameMapMovementCancelMessage = function() {
  this.cellId = 0;
};

util.inherits(GameMapMovementCancelMessage, BaseMessage);

GameMapMovementCancelMessage.prototype.serialize = function(output) {
  this.serializeAs_GameMapMovementCancelMessage(output);
};

GameMapMovementCancelMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameMapMovementCancelMessage(input);
};

GameMapMovementCancelMessage.prototype.serializeAs_GameMapMovementCancelMessage = function(output) {
  if (this.cellId < 0 || this.cellId > 559) {
    throw new Error("Forbidden value (" + this.cellId + ") on element cellId.");
  } else {
    param1.writeVarShort(this.cellId);
    return;
  }
};

GameMapMovementCancelMessage.prototype.deserializeAs_GameMapMovementCancelMessage = function(input) {
  this.cellId = param1.readVarUhShort();
  if (this.cellId < 0 || this.cellId > 559) {
    throw new Error("Forbidden value (" + this.cellId + ") on element of GameMapMovementCancelMessage.cellId.");
  } else {
    return;
  }
};

GameMapMovementCancelMessage.prototype.getMessageId = function() {
  return 953;
};

GameMapMovementCancelMessage.prototype.getClassName = function() {
  return 'GameMapMovementCancelMessage';
};

module.exports.id = 953;
module.exports.class = GameMapMovementCancelMessage;
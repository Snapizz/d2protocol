var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameDataPaddockObjectRemoveMessage = function() {
  this.cellId = 0;
};

util.inherits(GameDataPaddockObjectRemoveMessage, BaseMessage);

GameDataPaddockObjectRemoveMessage.prototype.serialize = function(output) {
  this.serializeAs_GameDataPaddockObjectRemoveMessage(output);
};

GameDataPaddockObjectRemoveMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameDataPaddockObjectRemoveMessage(input);
};

GameDataPaddockObjectRemoveMessage.prototype.serializeAs_GameDataPaddockObjectRemoveMessage = function(output) {
  if (this.cellId < 0 || this.cellId > 559) {
    throw new Error("Forbidden value (" + this.cellId + ") on element cellId.");
  } else {
    param1.writeVarShort(this.cellId);
    return;
  }
};

GameDataPaddockObjectRemoveMessage.prototype.deserializeAs_GameDataPaddockObjectRemoveMessage = function(input) {
  this.cellId = param1.readVarUhShort();
  if (this.cellId < 0 || this.cellId > 559) {
    throw new Error("Forbidden value (" + this.cellId + ") on element of GameDataPaddockObjectRemoveMessage.cellId.");
  } else {
    return;
  }
};

GameDataPaddockObjectRemoveMessage.prototype.getMessageId = function() {
  return 5993;
};

GameDataPaddockObjectRemoveMessage.prototype.getClassName = function() {
  return 'GameDataPaddockObjectRemoveMessage';
};

module.exports.id = 5993;
module.exports.class = GameDataPaddockObjectRemoveMessage;
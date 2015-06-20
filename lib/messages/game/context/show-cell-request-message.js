var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ShowCellRequestMessage = function() {
  this.cellId = 0;
};

util.inherits(ShowCellRequestMessage, BaseMessage);

ShowCellRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_ShowCellRequestMessage(output);
};

ShowCellRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ShowCellRequestMessage(input);
};

ShowCellRequestMessage.prototype.serializeAs_ShowCellRequestMessage = function(output) {
  if (this.cellId < 0 || this.cellId > 559) {
    throw new Error("Forbidden value (" + this.cellId + ") on element cellId.");
  } else {
    param1.writeVarShort(this.cellId);
    return;
  }
};

ShowCellRequestMessage.prototype.deserializeAs_ShowCellRequestMessage = function(input) {
  this.cellId = param1.readVarUhShort();
  if (this.cellId < 0 || this.cellId > 559) {
    throw new Error("Forbidden value (" + this.cellId + ") on element of ShowCellRequestMessage.cellId.");
  } else {
    return;
  }
};

ShowCellRequestMessage.prototype.getMessageId = function() {
  return 5611;
};

ShowCellRequestMessage.prototype.getClassName = function() {
  return 'ShowCellRequestMessage';
};

module.exports.id = 5611;
module.exports.class = ShowCellRequestMessage;
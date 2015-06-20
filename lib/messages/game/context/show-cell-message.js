var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var ShowCellMessage = function() {
  this.sourceId = 0;
  this.cellId = 0;
};

util.inherits(ShowCellMessage, BaseMessage);

ShowCellMessage.prototype.serialize = function(output) {
  this.serializeAs_ShowCellMessage(output);
};

ShowCellMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ShowCellMessage(input);
};

ShowCellMessage.prototype.serializeAs_ShowCellMessage = function(param1) {
  param1.writeInt(this.sourceId);
  if (this.cellId < 0 || this.cellId > 559) {
    throw new Error("Forbidden value (" + this.cellId + ") on element cellId.");
  } else {
    param1.writeVarShort(this.cellId);
    return;
  }
};

ShowCellMessage.prototype.deserializeAs_ShowCellMessage = function(param1) {
  this.sourceId = param1.readInt();
  this.cellId = param1.readVarUhShort();
  if (this.cellId < 0 || this.cellId > 559) {
    throw new Error("Forbidden value (" + this.cellId + ") on element of ShowCellMessage.cellId.");
  } else {
    return;
  }
};

ShowCellMessage.prototype.getMessageId = function() {
  return 5612;
};

ShowCellMessage.prototype.getClassName = function() {
  return 'ShowCellMessage';
};

module.exports.id = 5612;
module.exports.class = ShowCellMessage;
module.exports.getInstance = function() {
  return new ShowCellMessage();
};
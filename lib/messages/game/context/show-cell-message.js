var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

ShowCellMessage.prototype.serializeAs_ShowCellMessage = function(output) {
  output.writeInt(this.sourceId);
  if ((((this.cellId < 0)) || ((this.cellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.cellId) + ") on element cellId.")));
  };
  output.writeVarShort(this.cellId);
};

ShowCellMessage.prototype.deserializeAs_ShowCellMessage = function(input) {
  this.sourceId = input.readInt();
  this.cellId = input.readVarUhShort();
  if ((((this.cellId < 0)) || ((this.cellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.cellId) + ") on element of ShowCellMessage.cellId.")));
  };
};

ShowCellMessage.prototype.getMessageId = function() {
  return 5612;
};

ShowCellMessage.prototype.getClassName = function() {
  return 'ShowCellMessage';
};

module.exports.id = 5612;
module.exports.class = ShowCellMessage;
var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var PaddockMoveItemRequestMessage = function() {
  this.oldCellId = 0;
  this.newCellId = 0;
};

util.inherits(PaddockMoveItemRequestMessage, BaseMessage);

PaddockMoveItemRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_PaddockMoveItemRequestMessage(output);
};

PaddockMoveItemRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PaddockMoveItemRequestMessage(input);
};

PaddockMoveItemRequestMessage.prototype.serializeAs_PaddockMoveItemRequestMessage = function(param1) {
  if (this.oldCellId < 0 || this.oldCellId > 559) {
    throw new Error("Forbidden value (" + this.oldCellId + ") on element oldCellId.");
  } else {
    param1.writeVarShort(this.oldCellId);
    if (this.newCellId < 0 || this.newCellId > 559) {
      throw new Error("Forbidden value (" + this.newCellId + ") on element newCellId.");
    } else {
      param1.writeVarShort(this.newCellId);
      return;
    }
  }
};

PaddockMoveItemRequestMessage.prototype.deserializeAs_PaddockMoveItemRequestMessage = function(param1) {
  this.oldCellId = param1.readVarUhShort();
  if (this.oldCellId < 0 || this.oldCellId > 559) {
    throw new Error("Forbidden value (" + this.oldCellId + ") on element of PaddockMoveItemRequestMessage.oldCellId.");
  } else {
    this.newCellId = param1.readVarUhShort();
    if (this.newCellId < 0 || this.newCellId > 559) {
      throw new Error("Forbidden value (" + this.newCellId + ") on element of PaddockMoveItemRequestMessage.newCellId.");
    } else {
      return;
    }
  }
};

PaddockMoveItemRequestMessage.prototype.getMessageId = function() {
  return 6052;
};

PaddockMoveItemRequestMessage.prototype.getClassName = function() {
  return 'PaddockMoveItemRequestMessage';
};

module.exports.id = 6052;
module.exports.class = PaddockMoveItemRequestMessage;
module.exports.getInstance = function() {
  return new PaddockMoveItemRequestMessage();
};
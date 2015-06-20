var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var PaddockToSellListRequestMessage = function() {
  this.pageIndex = 0;
};

util.inherits(PaddockToSellListRequestMessage, BaseMessage);

PaddockToSellListRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_PaddockToSellListRequestMessage(output);
};

PaddockToSellListRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PaddockToSellListRequestMessage(input);
};

PaddockToSellListRequestMessage.prototype.serializeAs_PaddockToSellListRequestMessage = function(param1) {
  if (this.pageIndex < 0) {
    throw new Error("Forbidden value (" + this.pageIndex + ") on element pageIndex.");
  } else {
    param1.writeVarShort(this.pageIndex);
    return;
  }
};

PaddockToSellListRequestMessage.prototype.deserializeAs_PaddockToSellListRequestMessage = function(param1) {
  this.pageIndex = param1.readVarUhShort();
  if (this.pageIndex < 0) {
    throw new Error("Forbidden value (" + this.pageIndex + ") on element of PaddockToSellListRequestMessage.pageIndex.");
  } else {
    return;
  }
};

PaddockToSellListRequestMessage.prototype.getMessageId = function() {
  return 6141;
};

PaddockToSellListRequestMessage.prototype.getClassName = function() {
  return 'PaddockToSellListRequestMessage';
};

module.exports.id = 6141;
module.exports.class = PaddockToSellListRequestMessage;
var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var HouseToSellListRequestMessage = function() {
  this.pageIndex = 0;
};

util.inherits(HouseToSellListRequestMessage, BaseMessage);

HouseToSellListRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_HouseToSellListRequestMessage(output);
};

HouseToSellListRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_HouseToSellListRequestMessage(input);
};

HouseToSellListRequestMessage.prototype.serializeAs_HouseToSellListRequestMessage = function(param1) {
  if (this.pageIndex < 0) {
    throw new Error("Forbidden value (" + this.pageIndex + ") on element pageIndex.");
  } else {
    param1.writeVarShort(this.pageIndex);
    return;
  }
};

HouseToSellListRequestMessage.prototype.deserializeAs_HouseToSellListRequestMessage = function(param1) {
  this.pageIndex = param1.readVarUhShort();
  if (this.pageIndex < 0) {
    throw new Error("Forbidden value (" + this.pageIndex + ") on element of HouseToSellListRequestMessage.pageIndex.");
  } else {
    return;
  }
};

HouseToSellListRequestMessage.prototype.getMessageId = function() {
  return 6139;
};

HouseToSellListRequestMessage.prototype.getClassName = function() {
  return 'HouseToSellListRequestMessage';
};

module.exports.id = 6139;
module.exports.class = HouseToSellListRequestMessage;
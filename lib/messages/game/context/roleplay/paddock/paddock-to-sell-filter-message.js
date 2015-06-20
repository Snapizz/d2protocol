var d2com = require('d2com'),
  BaseMessage = require('./paddock-to-sell-filter-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var PaddockToSellFilterMessage = function() {
  this.areaId = 0;
  this.atLeastNbMount = 0;
  this.atLeastNbMachine = 0;
  this.maxPrice = 0;
};

util.inherits(PaddockToSellFilterMessage, BaseMessage);

PaddockToSellFilterMessage.prototype.serialize = function(output) {
  this.serializeAs_PaddockToSellFilterMessage(output);
};

PaddockToSellFilterMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PaddockToSellFilterMessage(input);
};

PaddockToSellFilterMessage.prototype.serializeAs_PaddockToSellFilterMessage = function(param1) {
  param1.writeInt(this.areaId);
  param1.writeByte(this.atLeastNbMount);
  param1.writeByte(this.atLeastNbMachine);
  if (this.maxPrice < 0) {
    throw new Error("Forbidden value (" + this.maxPrice + ") on element maxPrice.");
  } else {
    param1.writeVarInt(this.maxPrice);
    return;
  }
};

PaddockToSellFilterMessage.prototype.deserializeAs_PaddockToSellFilterMessage = function(param1) {
  this.areaId = param1.readInt();
  this.atLeastNbMount = param1.readByte();
  this.atLeastNbMachine = param1.readByte();
  this.maxPrice = param1.readVarUhInt();
  if (this.maxPrice < 0) {
    throw new Error("Forbidden value (" + this.maxPrice + ") on element of PaddockToSellFilterMessage.maxPrice.");
  } else {
    return;
  }
};

PaddockToSellFilterMessage.prototype.getMessageId = function() {
  return 6161;
};

PaddockToSellFilterMessage.prototype.getClassName = function() {
  return 'PaddockToSellFilterMessage';
};

module.exports.id = 6161;
module.exports.class = PaddockToSellFilterMessage;
module.exports.getInstance = function() {
  return new PaddockToSellFilterMessage();
};
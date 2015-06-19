var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

PaddockToSellFilterMessage.prototype.serializeAs_PaddockToSellFilterMessage = function(output) {
  output.writeInt(this.areaId);
  output.writeByte(this.atLeastNbMount);
  output.writeByte(this.atLeastNbMachine);
  if (this.maxPrice < 0) {
    throw (new Error((("Forbidden value (" + this.maxPrice) + ") on element maxPrice.")));
  };
  output.writeVarInt(this.maxPrice);
};

PaddockToSellFilterMessage.prototype.deserializeAs_PaddockToSellFilterMessage = function(input) {
  this.areaId = input.readInt();
  this.atLeastNbMount = input.readByte();
  this.atLeastNbMachine = input.readByte();
  this.maxPrice = input.readVarUhInt();
  if (this.maxPrice < 0) {
    throw (new Error((("Forbidden value (" + this.maxPrice) + ") on element of PaddockToSellFilterMessage.maxPrice.")));
  };
};

PaddockToSellFilterMessage.prototype.getMessageId = function() {
  return 6161;
};

PaddockToSellFilterMessage.prototype.getClassName = function() {
  return 'PaddockToSellFilterMessage';
};

module.exports.id = 6161;
module.exports.class = PaddockToSellFilterMessage;
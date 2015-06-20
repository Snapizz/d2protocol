var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var HouseSellRequestMessage = function() {
  this.amount = 0;
};

util.inherits(HouseSellRequestMessage, BaseMessage);

HouseSellRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_HouseSellRequestMessage(output);
};

HouseSellRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_HouseSellRequestMessage(input);
};

HouseSellRequestMessage.prototype.serializeAs_HouseSellRequestMessage = function(param1) {
  if (this.amount < 0) {
    throw new Error("Forbidden value (" + this.amount + ") on element amount.");
  } else {
    param1.writeVarInt(this.amount);
    return;
  }
};

HouseSellRequestMessage.prototype.deserializeAs_HouseSellRequestMessage = function(param1) {
  this.amount = param1.readVarUhInt();
  if (this.amount < 0) {
    throw new Error("Forbidden value (" + this.amount + ") on element of HouseSellRequestMessage.amount.");
  } else {
    return;
  }
};

HouseSellRequestMessage.prototype.getMessageId = function() {
  return 5697;
};

HouseSellRequestMessage.prototype.getClassName = function() {
  return 'HouseSellRequestMessage';
};

module.exports.id = 5697;
module.exports.class = HouseSellRequestMessage;
module.exports.getInstance = function() {
  return new HouseSellRequestMessage();
};
var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

HouseSellRequestMessage.prototype.serializeAs_HouseSellRequestMessage = function(output) {
  if (this.amount < 0) {
    throw (new Error((("Forbidden value (" + this.amount) + ") on element amount.")));
  };
  output.writeVarInt(this.amount);
};

HouseSellRequestMessage.prototype.deserializeAs_HouseSellRequestMessage = function(input) {
  this.amount = input.readVarUhInt();
  if (this.amount < 0) {
    throw (new Error((("Forbidden value (" + this.amount) + ") on element of HouseSellRequestMessage.amount.")));
  };
};

HouseSellRequestMessage.prototype.getMessageId = function() {
  return 5697;
};

HouseSellRequestMessage.prototype.getClassName = function() {
  return 'HouseSellRequestMessage';
};

module.exports.id = 5697;
module.exports.class = HouseSellRequestMessage;
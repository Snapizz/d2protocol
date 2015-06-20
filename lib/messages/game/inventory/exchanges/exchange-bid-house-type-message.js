var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeBidHouseTypeMessage = function() {
  this.type = 0;
};

util.inherits(ExchangeBidHouseTypeMessage, BaseMessage);

ExchangeBidHouseTypeMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeBidHouseTypeMessage(output);
};

ExchangeBidHouseTypeMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeBidHouseTypeMessage(input);
};

ExchangeBidHouseTypeMessage.prototype.serializeAs_ExchangeBidHouseTypeMessage = function(output) {
  if (this.type < 0) {
    throw new Error("Forbidden value (" + this.type + ") on element type.");
  } else {
    param1.writeVarInt(this.type);
    return;
  }
};

ExchangeBidHouseTypeMessage.prototype.deserializeAs_ExchangeBidHouseTypeMessage = function(input) {
  this.type = param1.readVarUhInt();
  if (this.type < 0) {
    throw new Error("Forbidden value (" + this.type + ") on element of ExchangeBidHouseTypeMessage.type.");
  } else {
    return;
  }
};

ExchangeBidHouseTypeMessage.prototype.getMessageId = function() {
  return 5803;
};

ExchangeBidHouseTypeMessage.prototype.getClassName = function() {
  return 'ExchangeBidHouseTypeMessage';
};

module.exports.id = 5803;
module.exports.class = ExchangeBidHouseTypeMessage;
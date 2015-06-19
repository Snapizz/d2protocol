var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeBidHouseGenericItemAddedMessage = function() {
  this.objGenericId = 0;
};

util.inherits(ExchangeBidHouseGenericItemAddedMessage, BaseMessage);

ExchangeBidHouseGenericItemAddedMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeBidHouseGenericItemAddedMessage(output);
};

ExchangeBidHouseGenericItemAddedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeBidHouseGenericItemAddedMessage(input);
};

ExchangeBidHouseGenericItemAddedMessage.prototype.serializeAs_ExchangeBidHouseGenericItemAddedMessage = function(output) {
  if (this.objGenericId < 0) {
    throw (new Error((("Forbidden value (" + this.objGenericId) + ") on element objGenericId.")));
  };
  output.writeVarShort(this.objGenericId);
};

ExchangeBidHouseGenericItemAddedMessage.prototype.deserializeAs_ExchangeBidHouseGenericItemAddedMessage = function(input) {
  this.objGenericId = input.readVarUhShort();
  if (this.objGenericId < 0) {
    throw (new Error((("Forbidden value (" + this.objGenericId) + ") on element of ExchangeBidHouseGenericItemAddedMessage.objGenericId.")));
  };
};

ExchangeBidHouseGenericItemAddedMessage.prototype.getMessageId = function() {
  return 5947;
};

ExchangeBidHouseGenericItemAddedMessage.prototype.getClassName = function() {
  return 'ExchangeBidHouseGenericItemAddedMessage';
};

module.exports.id = 5947;
module.exports.class = ExchangeBidHouseGenericItemAddedMessage;
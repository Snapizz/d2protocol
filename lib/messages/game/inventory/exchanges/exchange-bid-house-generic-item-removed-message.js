var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeBidHouseGenericItemRemovedMessage = function() {
  this.objGenericId = 0;
};

util.inherits(ExchangeBidHouseGenericItemRemovedMessage, BaseMessage);

ExchangeBidHouseGenericItemRemovedMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeBidHouseGenericItemRemovedMessage(output);
};

ExchangeBidHouseGenericItemRemovedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeBidHouseGenericItemRemovedMessage(input);
};

ExchangeBidHouseGenericItemRemovedMessage.prototype.serializeAs_ExchangeBidHouseGenericItemRemovedMessage = function(output) {
  if (this.objGenericId < 0) {
    throw new Error("Forbidden value (" + this.objGenericId + ") on element objGenericId.");
  } else {
    param1.writeVarShort(this.objGenericId);
    return;
  }
};

ExchangeBidHouseGenericItemRemovedMessage.prototype.deserializeAs_ExchangeBidHouseGenericItemRemovedMessage = function(input) {
  this.objGenericId = param1.readVarUhShort();
  if (this.objGenericId < 0) {
    throw new Error("Forbidden value (" + this.objGenericId + ") on element of ExchangeBidHouseGenericItemRemovedMessage.objGenericId.");
  } else {
    return;
  }
};

ExchangeBidHouseGenericItemRemovedMessage.prototype.getMessageId = function() {
  return 5948;
};

ExchangeBidHouseGenericItemRemovedMessage.prototype.getClassName = function() {
  return 'ExchangeBidHouseGenericItemRemovedMessage';
};

module.exports.id = 5948;
module.exports.class = ExchangeBidHouseGenericItemRemovedMessage;
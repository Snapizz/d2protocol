var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var ExchangeCraftResultWithObjectIdMessage = function() {
  this.objectGenericId = 0;
};

util.inherits(ExchangeCraftResultWithObjectIdMessage, BaseMessage);

ExchangeCraftResultWithObjectIdMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeCraftResultWithObjectIdMessage(output);
};

ExchangeCraftResultWithObjectIdMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeCraftResultWithObjectIdMessage(input);
};

ExchangeCraftResultWithObjectIdMessage.prototype.serializeAs_ExchangeCraftResultWithObjectIdMessage = function(param1) {
  this.serializeAs_ExchangeCraftResultMessage(param1);
  if (this.objectGenericId < 0) {
    throw new Error("Forbidden value (" + this.objectGenericId + ") on element objectGenericId.");
  } else {
    param1.writeVarShort(this.objectGenericId);
    return;
  }
};

ExchangeCraftResultWithObjectIdMessage.prototype.deserializeAs_ExchangeCraftResultWithObjectIdMessage = function(param1) {
  this.deserialize(param1);
  this.objectGenericId = param1.readVarUhShort();
  if (this.objectGenericId < 0) {
    throw new Error("Forbidden value (" + this.objectGenericId + ") on element of ExchangeCraftResultWithObjectIdMessage.objectGenericId.");
  } else {
    return;
  }
};

ExchangeCraftResultWithObjectIdMessage.prototype.getMessageId = function() {
  return 6000;
};

ExchangeCraftResultWithObjectIdMessage.prototype.getClassName = function() {
  return 'ExchangeCraftResultWithObjectIdMessage';
};

module.exports.id = 6000;
module.exports.class = ExchangeCraftResultWithObjectIdMessage;
module.exports.getInstance = function() {
  return new ExchangeCraftResultWithObjectIdMessage();
};
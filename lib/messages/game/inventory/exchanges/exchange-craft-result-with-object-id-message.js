var d2com = require('d2com'),
  BaseMessage = require('./exchange-craft-result-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
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

ExchangeCraftResultWithObjectIdMessage.prototype.serializeAs_ExchangeCraftResultWithObjectIdMessage = function(output) {
  this.serializeAs_ExchangeCraftResultMessage(output);
  if (this.objectGenericId < 0) {
    throw (new Error((("Forbidden value (" + this.objectGenericId) + ") on element objectGenericId.")));
  };
  output.writeVarShort(this.objectGenericId);
};

ExchangeCraftResultWithObjectIdMessage.prototype.deserializeAs_ExchangeCraftResultWithObjectIdMessage = function(input) {
  this.deserialize(input);
  this.objectGenericId = input.readVarUhShort();
  if (this.objectGenericId < 0) {
    throw (new Error((("Forbidden value (" + this.objectGenericId) + ") on element of ExchangeCraftResultWithObjectIdMessage.objectGenericId.")));
  };
};

ExchangeCraftResultWithObjectIdMessage.prototype.getMessageId = function() {
  return 6000;
};

ExchangeCraftResultWithObjectIdMessage.prototype.getClassName = function() {
  return 'ExchangeCraftResultWithObjectIdMessage';
};

module.exports.id = 6000;
module.exports.class = ExchangeCraftResultWithObjectIdMessage;
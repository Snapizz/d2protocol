var d2com = require('d2com'),
  BaseMessage = require('./exchange-ok-multi-craft-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var ExchangeOkMultiCraftMessage = function() {
  this.initiatorId = 0;
  this.otherId = 0;
  this.role = 0;
};

util.inherits(ExchangeOkMultiCraftMessage, BaseMessage);

ExchangeOkMultiCraftMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeOkMultiCraftMessage(output);
};

ExchangeOkMultiCraftMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeOkMultiCraftMessage(input);
};

ExchangeOkMultiCraftMessage.prototype.serializeAs_ExchangeOkMultiCraftMessage = function(param1) {
  if (this.initiatorId < 0) {
    throw new Error("Forbidden value (" + this.initiatorId + ") on element initiatorId.");
  } else {
    param1.writeVarInt(this.initiatorId);
    if (this.otherId < 0) {
      throw new Error("Forbidden value (" + this.otherId + ") on element otherId.");
    } else {
      param1.writeVarInt(this.otherId);
      param1.writeByte(this.role);
      return;
    }
  }
};

ExchangeOkMultiCraftMessage.prototype.deserializeAs_ExchangeOkMultiCraftMessage = function(param1) {
  this.initiatorId = param1.readVarUhInt();
  if (this.initiatorId < 0) {
    throw new Error("Forbidden value (" + this.initiatorId + ") on element of ExchangeOkMultiCraftMessage.initiatorId.");
  } else {
    this.otherId = param1.readVarUhInt();
    if (this.otherId < 0) {
      throw new Error("Forbidden value (" + this.otherId + ") on element of ExchangeOkMultiCraftMessage.otherId.");
    } else {
      this.role = param1.readByte();
      return;
    }
  }
};

ExchangeOkMultiCraftMessage.prototype.getMessageId = function() {
  return 5768;
};

ExchangeOkMultiCraftMessage.prototype.getClassName = function() {
  return 'ExchangeOkMultiCraftMessage';
};

module.exports.id = 5768;
module.exports.class = ExchangeOkMultiCraftMessage;
module.exports.getInstance = function() {
  return new ExchangeOkMultiCraftMessage();
};
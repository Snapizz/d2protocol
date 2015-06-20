var d2com = require('d2com'),
  BaseMessage = require('./exchange-weight-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var ExchangeWeightMessage = function() {
  this.currentWeight = 0;
  this.maxWeight = 0;
};

util.inherits(ExchangeWeightMessage, BaseMessage);

ExchangeWeightMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeWeightMessage(output);
};

ExchangeWeightMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeWeightMessage(input);
};

ExchangeWeightMessage.prototype.serializeAs_ExchangeWeightMessage = function(param1) {
  if (this.currentWeight < 0) {
    throw new Error("Forbidden value (" + this.currentWeight + ") on element currentWeight.");
  } else {
    param1.writeVarInt(this.currentWeight);
    if (this.maxWeight < 0) {
      throw new Error("Forbidden value (" + this.maxWeight + ") on element maxWeight.");
    } else {
      param1.writeVarInt(this.maxWeight);
      return;
    }
  }
};

ExchangeWeightMessage.prototype.deserializeAs_ExchangeWeightMessage = function(param1) {
  this.currentWeight = param1.readVarUhInt();
  if (this.currentWeight < 0) {
    throw new Error("Forbidden value (" + this.currentWeight + ") on element of ExchangeWeightMessage.currentWeight.");
  } else {
    this.maxWeight = param1.readVarUhInt();
    if (this.maxWeight < 0) {
      throw new Error("Forbidden value (" + this.maxWeight + ") on element of ExchangeWeightMessage.maxWeight.");
    } else {
      return;
    }
  }
};

ExchangeWeightMessage.prototype.getMessageId = function() {
  return 5793;
};

ExchangeWeightMessage.prototype.getClassName = function() {
  return 'ExchangeWeightMessage';
};

module.exports.id = 5793;
module.exports.class = ExchangeWeightMessage;
module.exports.getInstance = function() {
  return new ExchangeWeightMessage();
};
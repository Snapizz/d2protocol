var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

ExchangeWeightMessage.prototype.serializeAs_ExchangeWeightMessage = function(output) {
  if (this.currentWeight < 0) {
    throw (new Error((("Forbidden value (" + this.currentWeight) + ") on element currentWeight.")));
  };
  output.writeVarInt(this.currentWeight);
  if (this.maxWeight < 0) {
    throw (new Error((("Forbidden value (" + this.maxWeight) + ") on element maxWeight.")));
  };
  output.writeVarInt(this.maxWeight);
};

ExchangeWeightMessage.prototype.deserializeAs_ExchangeWeightMessage = function(input) {
  this.currentWeight = input.readVarUhInt();
  if (this.currentWeight < 0) {
    throw (new Error((("Forbidden value (" + this.currentWeight) + ") on element of ExchangeWeightMessage.currentWeight.")));
  };
  this.maxWeight = input.readVarUhInt();
  if (this.maxWeight < 0) {
    throw (new Error((("Forbidden value (" + this.maxWeight) + ") on element of ExchangeWeightMessage.maxWeight.")));
  };
};

ExchangeWeightMessage.prototype.getMessageId = function() {
  return 5793;
};

ExchangeWeightMessage.prototype.getClassName = function() {
  return 'ExchangeWeightMessage';
};

module.exports.id = 5793;
module.exports.class = ExchangeWeightMessage;
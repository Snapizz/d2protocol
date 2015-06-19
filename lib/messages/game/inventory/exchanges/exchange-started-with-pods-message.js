var d2com = require('d2com'),
  BaseMessage = require('./exchange-started-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeStartedWithPodsMessage = function() {
  this.firstCharacterId = 0;
  this.firstCharacterCurrentWeight = 0;
  this.firstCharacterMaxWeight = 0;
  this.secondCharacterId = 0;
  this.secondCharacterCurrentWeight = 0;
  this.secondCharacterMaxWeight = 0;
};

util.inherits(ExchangeStartedWithPodsMessage, BaseMessage);

ExchangeStartedWithPodsMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeStartedWithPodsMessage(output);
};

ExchangeStartedWithPodsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeStartedWithPodsMessage(input);
};

ExchangeStartedWithPodsMessage.prototype.serializeAs_ExchangeStartedWithPodsMessage = function(output) {
  this.serializeAs_ExchangeStartedMessage(output);
  output.writeInt(this.firstCharacterId);
  if (this.firstCharacterCurrentWeight < 0) {
    throw (new Error((("Forbidden value (" + this.firstCharacterCurrentWeight) + ") on element firstCharacterCurrentWeight.")));
  };
  output.writeVarInt(this.firstCharacterCurrentWeight);
  if (this.firstCharacterMaxWeight < 0) {
    throw (new Error((("Forbidden value (" + this.firstCharacterMaxWeight) + ") on element firstCharacterMaxWeight.")));
  };
  output.writeVarInt(this.firstCharacterMaxWeight);
  output.writeInt(this.secondCharacterId);
  if (this.secondCharacterCurrentWeight < 0) {
    throw (new Error((("Forbidden value (" + this.secondCharacterCurrentWeight) + ") on element secondCharacterCurrentWeight.")));
  };
  output.writeVarInt(this.secondCharacterCurrentWeight);
  if (this.secondCharacterMaxWeight < 0) {
    throw (new Error((("Forbidden value (" + this.secondCharacterMaxWeight) + ") on element secondCharacterMaxWeight.")));
  };
  output.writeVarInt(this.secondCharacterMaxWeight);
};

ExchangeStartedWithPodsMessage.prototype.deserializeAs_ExchangeStartedWithPodsMessage = function(input) {
  this.deserialize(input);
  this.firstCharacterId = input.readInt();
  this.firstCharacterCurrentWeight = input.readVarUhInt();
  if (this.firstCharacterCurrentWeight < 0) {
    throw (new Error((("Forbidden value (" + this.firstCharacterCurrentWeight) + ") on element of ExchangeStartedWithPodsMessage.firstCharacterCurrentWeight.")));
  };
  this.firstCharacterMaxWeight = input.readVarUhInt();
  if (this.firstCharacterMaxWeight < 0) {
    throw (new Error((("Forbidden value (" + this.firstCharacterMaxWeight) + ") on element of ExchangeStartedWithPodsMessage.firstCharacterMaxWeight.")));
  };
  this.secondCharacterId = input.readInt();
  this.secondCharacterCurrentWeight = input.readVarUhInt();
  if (this.secondCharacterCurrentWeight < 0) {
    throw (new Error((("Forbidden value (" + this.secondCharacterCurrentWeight) + ") on element of ExchangeStartedWithPodsMessage.secondCharacterCurrentWeight.")));
  };
  this.secondCharacterMaxWeight = input.readVarUhInt();
  if (this.secondCharacterMaxWeight < 0) {
    throw (new Error((("Forbidden value (" + this.secondCharacterMaxWeight) + ") on element of ExchangeStartedWithPodsMessage.secondCharacterMaxWeight.")));
  };
};

ExchangeStartedWithPodsMessage.prototype.getMessageId = function() {
  return 6129;
};

ExchangeStartedWithPodsMessage.prototype.getClassName = function() {
  return 'ExchangeStartedWithPodsMessage';
};

module.exports.id = 6129;
module.exports.class = ExchangeStartedWithPodsMessage;
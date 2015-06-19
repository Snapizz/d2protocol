var d2com = require('d2com'),
  BaseMessage = require('./exchange-request-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangePlayerMultiCraftRequestMessage = function() {
  this.target = 0;
  this.skillId = 0;
};

util.inherits(ExchangePlayerMultiCraftRequestMessage, BaseMessage);

ExchangePlayerMultiCraftRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangePlayerMultiCraftRequestMessage(output);
};

ExchangePlayerMultiCraftRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangePlayerMultiCraftRequestMessage(input);
};

ExchangePlayerMultiCraftRequestMessage.prototype.serializeAs_ExchangePlayerMultiCraftRequestMessage = function(output) {
  this.serializeAs_ExchangeRequestMessage(output);
  if (this.target < 0) {
    throw (new Error((("Forbidden value (" + this.target) + ") on element target.")));
  };
  output.writeVarInt(this.target);
  if (this.skillId < 0) {
    throw (new Error((("Forbidden value (" + this.skillId) + ") on element skillId.")));
  };
  output.writeVarInt(this.skillId);
};

ExchangePlayerMultiCraftRequestMessage.prototype.deserializeAs_ExchangePlayerMultiCraftRequestMessage = function(input) {
  this.deserialize(input);
  this.target = input.readVarUhInt();
  if (this.target < 0) {
    throw (new Error((("Forbidden value (" + this.target) + ") on element of ExchangePlayerMultiCraftRequestMessage.target.")));
  };
  this.skillId = input.readVarUhInt();
  if (this.skillId < 0) {
    throw (new Error((("Forbidden value (" + this.skillId) + ") on element of ExchangePlayerMultiCraftRequestMessage.skillId.")));
  };
};

ExchangePlayerMultiCraftRequestMessage.prototype.getMessageId = function() {
  return 5784;
};

ExchangePlayerMultiCraftRequestMessage.prototype.getClassName = function() {
  return 'ExchangePlayerMultiCraftRequestMessage';
};

module.exports.id = 5784;
module.exports.class = ExchangePlayerMultiCraftRequestMessage;
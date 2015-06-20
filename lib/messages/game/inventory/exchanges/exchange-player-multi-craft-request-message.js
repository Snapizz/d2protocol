var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

ExchangePlayerMultiCraftRequestMessage.prototype.serializeAs_ExchangePlayerMultiCraftRequestMessage = function(param1) {
  this.serializeAs_ExchangeRequestMessage(param1);
  if (this.target < 0) {
    throw new Error("Forbidden value (" + this.target + ") on element target.");
  } else {
    param1.writeVarInt(this.target);
    if (this.skillId < 0) {
      throw new Error("Forbidden value (" + this.skillId + ") on element skillId.");
    } else {
      param1.writeVarInt(this.skillId);
      return;
    }
  }
};

ExchangePlayerMultiCraftRequestMessage.prototype.deserializeAs_ExchangePlayerMultiCraftRequestMessage = function(param1) {
  this.deserialize(param1);
  this.target = param1.readVarUhInt();
  if (this.target < 0) {
    throw new Error("Forbidden value (" + this.target + ") on element of ExchangePlayerMultiCraftRequestMessage.target.");
  } else {
    this.skillId = param1.readVarUhInt();
    if (this.skillId < 0) {
      throw new Error("Forbidden value (" + this.skillId + ") on element of ExchangePlayerMultiCraftRequestMessage.skillId.");
    } else {
      return;
    }
  }
};

ExchangePlayerMultiCraftRequestMessage.prototype.getMessageId = function() {
  return 5784;
};

ExchangePlayerMultiCraftRequestMessage.prototype.getClassName = function() {
  return 'ExchangePlayerMultiCraftRequestMessage';
};

module.exports.id = 5784;
module.exports.class = ExchangePlayerMultiCraftRequestMessage;
module.exports.getInstance = function() {
  return new ExchangePlayerMultiCraftRequestMessage();
};
var d2com = require('d2com'),
  BaseMessage = require('./exchange-types-exchanger-description-for-user-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var ExchangeTypesExchangerDescriptionForUserMessage = function() {
  this.typeDescription = [];
};

util.inherits(ExchangeTypesExchangerDescriptionForUserMessage, BaseMessage);

ExchangeTypesExchangerDescriptionForUserMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeTypesExchangerDescriptionForUserMessage(output);
};

ExchangeTypesExchangerDescriptionForUserMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeTypesExchangerDescriptionForUserMessage(input);
};

ExchangeTypesExchangerDescriptionForUserMessage.prototype.serializeAs_ExchangeTypesExchangerDescriptionForUserMessage = function(param1) {
  param1.writeShort(this.typeDescription.length);
  var _loc2_ = 0;
  while (_loc2_ < this.typeDescription.length) {
    if (this.typeDescription[_loc2_] < 0) {
      throw new Error("Forbidden value (" + this.typeDescription[_loc2_] + ") on element 1 (starting at 1) of typeDescription.");
    } else {
      param1.writeVarInt(this.typeDescription[_loc2_]);
      _loc2_++;
      continue;
    }
  }
};

ExchangeTypesExchangerDescriptionForUserMessage.prototype.deserializeAs_ExchangeTypesExchangerDescriptionForUserMessage = function(param1) {
  var _loc4_ = 0;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = param1.readVarUhInt();
    if (_loc4_ < 0) {
      throw new Error("Forbidden value (" + _loc4_ + ") on elements of typeDescription.");
    } else {
      this.typeDescription.push(_loc4_);
      _loc3_++;
      continue;
    }
  }
};

ExchangeTypesExchangerDescriptionForUserMessage.prototype.getMessageId = function() {
  return 5765;
};

ExchangeTypesExchangerDescriptionForUserMessage.prototype.getClassName = function() {
  return 'ExchangeTypesExchangerDescriptionForUserMessage';
};

module.exports.id = 5765;
module.exports.class = ExchangeTypesExchangerDescriptionForUserMessage;
module.exports.getInstance = function() {
  return new ExchangeTypesExchangerDescriptionForUserMessage();
};
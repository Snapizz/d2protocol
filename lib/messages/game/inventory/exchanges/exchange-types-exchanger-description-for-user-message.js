var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

ExchangeTypesExchangerDescriptionForUserMessage.prototype.serializeAs_ExchangeTypesExchangerDescriptionForUserMessage = function(output) {
  output.writeShort(this.typeDescription.length);
  var _i1 = 0;
  while (_i1 < this.typeDescription.length) {
    if (this.typeDescription[_i1] < 0) {
      throw (new Error((("Forbidden value (" + this.typeDescription[_i1]) + ") on element 1 (starting at 1) of typeDescription.")));
    };
    output.writeVarInt(this.typeDescription[_i1]);
    _i1++;
  };
};

ExchangeTypesExchangerDescriptionForUserMessage.prototype.deserializeAs_ExchangeTypesExchangerDescriptionForUserMessage = function(input) {
  var _val1 = 0;
  var _typeDescriptionLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _typeDescriptionLen) {
    _val1 = input.readVarUhInt();
    if (_val1 < 0) {
      throw (new Error((("Forbidden value (" + _val1) + ") on elements of typeDescription.")));
    };
    this.typeDescription.push(_val1);
    _i1++;
  };
};

ExchangeTypesExchangerDescriptionForUserMessage.prototype.getMessageId = function() {
  return 5765;
};

ExchangeTypesExchangerDescriptionForUserMessage.prototype.getClassName = function() {
  return 'ExchangeTypesExchangerDescriptionForUserMessage';
};

module.exports.id = 5765;
module.exports.class = ExchangeTypesExchangerDescriptionForUserMessage;
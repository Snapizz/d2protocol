var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeTypesItemsExchangerDescriptionForUserMessage = function() {
  this.itemTypeDescriptions = [];
};

util.inherits(ExchangeTypesItemsExchangerDescriptionForUserMessage, BaseMessage);

ExchangeTypesItemsExchangerDescriptionForUserMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeTypesItemsExchangerDescriptionForUserMessage(output);
};

ExchangeTypesItemsExchangerDescriptionForUserMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeTypesItemsExchangerDescriptionForUserMessage(input);
};

ExchangeTypesItemsExchangerDescriptionForUserMessage.prototype.serializeAs_ExchangeTypesItemsExchangerDescriptionForUserMessage = function(output) {
  output.writeShort(this.itemTypeDescriptions.length);
  var _i1;
  while (_i1 < this.itemTypeDescriptions.length) {
    (this.itemTypeDescriptions[_i1]).serializeAs_BidExchangerObjectInfo(output);
    _i1++;
  };
};

ExchangeTypesItemsExchangerDescriptionForUserMessage.prototype.deserializeAs_ExchangeTypesItemsExchangerDescriptionForUserMessage = function(input) {
  var _item1;
  var _itemTypeDescriptionsLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _itemTypeDescriptionsLen) {
    _item1 = new BidExchangerObjectInfo();
    _item1.deserialize(input);
    this.itemTypeDescriptions.push(_item1);
    _i1++;
  };
};

ExchangeTypesItemsExchangerDescriptionForUserMessage.prototype.getMessageId = function() {
  return 5752;
};

ExchangeTypesItemsExchangerDescriptionForUserMessage.prototype.getClassName = function() {
  return 'ExchangeTypesItemsExchangerDescriptionForUserMessage';
};

module.exports.id = 5752;
module.exports.class = ExchangeTypesItemsExchangerDescriptionForUserMessage;
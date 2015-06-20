var d2com = require('d2com'),
  BaseMessage = require('../exchanges/exchange-object-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeObjectsModifiedMessage = function() {
  this.object = [];
};

util.inherits(ExchangeObjectsModifiedMessage, BaseMessage);

ExchangeObjectsModifiedMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeObjectsModifiedMessage(output);
};

ExchangeObjectsModifiedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeObjectsModifiedMessage(input);
};

ExchangeObjectsModifiedMessage.prototype.serializeAs_ExchangeObjectsModifiedMessage = function(output) {
  this.serializeAs_ExchangeObjectMessage(output);
  output.writeShort(this.object.length);
  var _i1 = 0;
  while (_i1 < this.object.length) {
    (this.object[_i1]).serializeAs_ObjectItem(output);
    _i1++;
  };
};

ExchangeObjectsModifiedMessage.prototype.deserializeAs_ExchangeObjectsModifiedMessage = function(input) {
  var _item1;
  this.deserialize(input);
  var _objectLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _objectLen) {
    _item1 = new ObjectItem();
    _item1.deserialize(input);
    this.object.push(_item1);
    _i1++;
  };
};

ExchangeObjectsModifiedMessage.prototype.getMessageId = function() {
  return 6533;
};

ExchangeObjectsModifiedMessage.prototype.getClassName = function() {
  return 'ExchangeObjectsModifiedMessage';
};

module.exports.id = 6533;
module.exports.class = ExchangeObjectsModifiedMessage;
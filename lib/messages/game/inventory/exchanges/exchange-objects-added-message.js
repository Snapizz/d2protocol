var d2com = require('d2com'),
  BaseMessage = require('./exchange-object-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeObjectsAddedMessage = function() {
  this.object = [];
};

util.inherits(ExchangeObjectsAddedMessage, BaseMessage);

ExchangeObjectsAddedMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeObjectsAddedMessage(output);
};

ExchangeObjectsAddedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeObjectsAddedMessage(input);
};

ExchangeObjectsAddedMessage.prototype.serializeAs_ExchangeObjectsAddedMessage = function(output) {
  this.serializeAs_ExchangeObjectMessage(output);
  output.writeShort(this.object.length);
  var _i1;
  while (_i1 < this.object.length) {
    (this.object[_i1]).serializeAs_ObjectItem(output);
    _i1++;
  };
};

ExchangeObjectsAddedMessage.prototype.deserializeAs_ExchangeObjectsAddedMessage = function(input) {
  var _item1;
  this.deserialize(input);
  var _objectLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _objectLen) {
    _item1 = new ObjectItem();
    _item1.deserialize(input);
    this.object.push(_item1);
    _i1++;
  };
};

ExchangeObjectsAddedMessage.prototype.getMessageId = function() {
  return 6535;
};

ExchangeObjectsAddedMessage.prototype.getClassName = function() {
  return 'ExchangeObjectsAddedMessage';
};

module.exports.id = 6535;
module.exports.class = ExchangeObjectsAddedMessage;
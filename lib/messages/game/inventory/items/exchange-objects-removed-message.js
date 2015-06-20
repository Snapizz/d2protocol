var d2com = require('d2com'),
  BaseMessage = require('../exchanges/exchange-object-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeObjectsRemovedMessage = function() {
  this.objectUID = [];
};

util.inherits(ExchangeObjectsRemovedMessage, BaseMessage);

ExchangeObjectsRemovedMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeObjectsRemovedMessage(output);
};

ExchangeObjectsRemovedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeObjectsRemovedMessage(input);
};

ExchangeObjectsRemovedMessage.prototype.serializeAs_ExchangeObjectsRemovedMessage = function(output) {
  this.serializeAs_ExchangeObjectMessage(output);
  output.writeShort(this.objectUID.length);
  var _i1 = 0;
  while (_i1 < this.objectUID.length) {
    if (this.objectUID[_i1] < 0) {
      throw (new Error((("Forbidden value (" + this.objectUID[_i1]) + ") on element 1 (starting at 1) of objectUID.")));
    };
    output.writeVarInt(this.objectUID[_i1]);
    _i1++;
  };
};

ExchangeObjectsRemovedMessage.prototype.deserializeAs_ExchangeObjectsRemovedMessage = function(input) {
  var _val1 = 0;
  this.deserialize(input);
  var _objectUIDLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _objectUIDLen) {
    _val1 = input.readVarUhInt();
    if (_val1 < 0) {
      throw (new Error((("Forbidden value (" + _val1) + ") on elements of objectUID.")));
    };
    this.objectUID.push(_val1);
    _i1++;
  };
};

ExchangeObjectsRemovedMessage.prototype.getMessageId = function() {
  return 6532;
};

ExchangeObjectsRemovedMessage.prototype.getClassName = function() {
  return 'ExchangeObjectsRemovedMessage';
};

module.exports.id = 6532;
module.exports.class = ExchangeObjectsRemovedMessage;
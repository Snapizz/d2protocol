var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeObjectTransfertListFromInvMessage = function() {
  this.ids = [];
};

util.inherits(ExchangeObjectTransfertListFromInvMessage, BaseMessage);

ExchangeObjectTransfertListFromInvMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeObjectTransfertListFromInvMessage(output);
};

ExchangeObjectTransfertListFromInvMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeObjectTransfertListFromInvMessage(input);
};

ExchangeObjectTransfertListFromInvMessage.prototype.serializeAs_ExchangeObjectTransfertListFromInvMessage = function(output) {
  output.writeShort(this.ids.length);
  var _i1 = 0;
  while (_i1 < this.ids.length) {
    if (this.ids[_i1] < 0) {
      throw (new Error((("Forbidden value (" + this.ids[_i1]) + ") on element 1 (starting at 1) of ids.")));
    };
    output.writeVarInt(this.ids[_i1]);
    _i1++;
  };
};

ExchangeObjectTransfertListFromInvMessage.prototype.deserializeAs_ExchangeObjectTransfertListFromInvMessage = function(input) {
  var _val1 = 0;
  var _idsLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _idsLen) {
    _val1 = input.readVarUhInt();
    if (_val1 < 0) {
      throw (new Error((("Forbidden value (" + _val1) + ") on elements of ids.")));
    };
    this.ids.push(_val1);
    _i1++;
  };
};

ExchangeObjectTransfertListFromInvMessage.prototype.getMessageId = function() {
  return 6183;
};

ExchangeObjectTransfertListFromInvMessage.prototype.getClassName = function() {
  return 'ExchangeObjectTransfertListFromInvMessage';
};

module.exports.id = 6183;
module.exports.class = ExchangeObjectTransfertListFromInvMessage;
var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeObjectTransfertListWithQuantityToInvMessage = function() {
  this.ids = [];
  this.qtys = [];
};

util.inherits(ExchangeObjectTransfertListWithQuantityToInvMessage, BaseMessage);

ExchangeObjectTransfertListWithQuantityToInvMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeObjectTransfertListWithQuantityToInvMessage(output);
};

ExchangeObjectTransfertListWithQuantityToInvMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeObjectTransfertListWithQuantityToInvMessage(input);
};

ExchangeObjectTransfertListWithQuantityToInvMessage.prototype.serializeAs_ExchangeObjectTransfertListWithQuantityToInvMessage = function(output) {
  output.writeShort(this.ids.length);
  var _i1;
  while (_i1 < this.ids.length) {
    if (this.ids[_i1] < 0) {
      throw (new Error((("Forbidden value (" + this.ids[_i1]) + ") on element 1 (starting at 1) of ids.")));
    };
    output.writeVarInt(this.ids[_i1]);
    _i1++;
  };
  output.writeShort(this.qtys.length);
  var _i2;
  while (_i2 < this.qtys.length) {
    if (this.qtys[_i2] < 0) {
      throw (new Error((("Forbidden value (" + this.qtys[_i2]) + ") on element 2 (starting at 1) of qtys.")));
    };
    output.writeVarInt(this.qtys[_i2]);
    _i2++;
  };
};

ExchangeObjectTransfertListWithQuantityToInvMessage.prototype.deserializeAs_ExchangeObjectTransfertListWithQuantityToInvMessage = function(input) {
  var _val1;
  var _val2;
  var _idsLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _idsLen) {
    _val1 = input.readVarUhInt();
    if (_val1 < 0) {
      throw (new Error((("Forbidden value (" + _val1) + ") on elements of ids.")));
    };
    this.ids.push(_val1);
    _i1++;
  };
  var _qtysLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _qtysLen) {
    _val2 = input.readVarUhInt();
    if (_val2 < 0) {
      throw (new Error((("Forbidden value (" + _val2) + ") on elements of qtys.")));
    };
    this.qtys.push(_val2);
    _i2++;
  };
};

ExchangeObjectTransfertListWithQuantityToInvMessage.prototype.getMessageId = function() {
  return 6470;
};

ExchangeObjectTransfertListWithQuantityToInvMessage.prototype.getClassName = function() {
  return 'ExchangeObjectTransfertListWithQuantityToInvMessage';
};

module.exports.id = 6470;
module.exports.class = ExchangeObjectTransfertListWithQuantityToInvMessage;
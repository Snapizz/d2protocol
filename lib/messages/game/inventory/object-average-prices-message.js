var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ObjectAveragePricesMessage = function() {
  this.ids = [];
  this.avgPrices = [];
};

util.inherits(ObjectAveragePricesMessage, BaseMessage);

ObjectAveragePricesMessage.prototype.serialize = function(output) {
  this.serializeAs_ObjectAveragePricesMessage(output);
};

ObjectAveragePricesMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectAveragePricesMessage(input);
};

ObjectAveragePricesMessage.prototype.serializeAs_ObjectAveragePricesMessage = function(output) {
  output.writeShort(this.ids.length);
  var _i1 = 0;
  while (_i1 < this.ids.length) {
    if (this.ids[_i1] < 0) {
      throw (new Error((("Forbidden value (" + this.ids[_i1]) + ") on element 1 (starting at 1) of ids.")));
    };
    output.writeVarShort(this.ids[_i1]);
    _i1++;
  };
  output.writeShort(this.avgPrices.length);
  var _i2 = 0;
  while (_i2 < this.avgPrices.length) {
    if (this.avgPrices[_i2] < 0) {
      throw (new Error((("Forbidden value (" + this.avgPrices[_i2]) + ") on element 2 (starting at 1) of avgPrices.")));
    };
    output.writeVarInt(this.avgPrices[_i2]);
    _i2++;
  };
};

ObjectAveragePricesMessage.prototype.deserializeAs_ObjectAveragePricesMessage = function(input) {
  var _val1 = 0;
  var _val2 = 0;
  var _idsLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _idsLen) {
    _val1 = input.readVarUhShort();
    if (_val1 < 0) {
      throw (new Error((("Forbidden value (" + _val1) + ") on elements of ids.")));
    };
    this.ids.push(_val1);
    _i1++;
  };
  var _avgPricesLen = input.readUnsignedShort();
  var _i2 = 0;
  while (_i2 < _avgPricesLen) {
    _val2 = input.readVarUhInt();
    if (_val2 < 0) {
      throw (new Error((("Forbidden value (" + _val2) + ") on elements of avgPrices.")));
    };
    this.avgPrices.push(_val2);
    _i2++;
  };
};

ObjectAveragePricesMessage.prototype.getMessageId = function() {
  return 6335;
};

ObjectAveragePricesMessage.prototype.getClassName = function() {
  return 'ObjectAveragePricesMessage';
};

module.exports.id = 6335;
module.exports.class = ObjectAveragePricesMessage;
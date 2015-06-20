var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeBidHouseInListAddedMessage = function() {
  this.itemUID = 0;
  this.objGenericId = 0;
  this.effects = [];
  this.prices = [];
};

util.inherits(ExchangeBidHouseInListAddedMessage, BaseMessage);

ExchangeBidHouseInListAddedMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeBidHouseInListAddedMessage(output);
};

ExchangeBidHouseInListAddedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeBidHouseInListAddedMessage(input);
};

ExchangeBidHouseInListAddedMessage.prototype.serializeAs_ExchangeBidHouseInListAddedMessage = function(output) {
  output.writeInt(this.itemUID);
  output.writeInt(this.objGenericId);
  output.writeShort(this.effects.length);
  var _i3 = 0;
  while (_i3 < this.effects.length) {
    output.writeShort((this.effects[_i3]).getTypeId());
    (this.effects[_i3]).serialize(output);
    _i3++;
  };
  output.writeShort(this.prices.length);
  var _i4 = 0;
  while (_i4 < this.prices.length) {
    if (this.prices[_i4] < 0) {
      throw (new Error((("Forbidden value (" + this.prices[_i4]) + ") on element 4 (starting at 1) of prices.")));
    };
    output.writeVarInt(this.prices[_i4]);
    _i4++;
  };
};

ExchangeBidHouseInListAddedMessage.prototype.deserializeAs_ExchangeBidHouseInListAddedMessage = function(input) {
  var _id3 = 0;
  var _item3;
  var _val4 = 0;
  this.itemUID = input.readInt();
  this.objGenericId = input.readInt();
  var _effectsLen = input.readUnsignedShort();
  var _i3 = 0;
  while (_i3 < _effectsLen) {
    _id3 = input.readUnsignedShort();
    _item3 = ProtocolTypeManager.getInstance(ObjectEffect, _id3);
    _item3.deserialize(input);
    this.effects.push(_item3);
    _i3++;
  };
  var _pricesLen = input.readUnsignedShort();
  var _i4 = 0;
  while (_i4 < _pricesLen) {
    _val4 = input.readVarUhInt();
    if (_val4 < 0) {
      throw (new Error((("Forbidden value (" + _val4) + ") on elements of prices.")));
    };
    this.prices.push(_val4);
    _i4++;
  };
};

ExchangeBidHouseInListAddedMessage.prototype.getMessageId = function() {
  return 5949;
};

ExchangeBidHouseInListAddedMessage.prototype.getClassName = function() {
  return 'ExchangeBidHouseInListAddedMessage';
};

module.exports.id = 5949;
module.exports.class = ExchangeBidHouseInListAddedMessage;
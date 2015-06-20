var BidExchangerObjectInfo = function() {
  this.objectUID = 0;
  this.effects = [];
  this.prices = [];
};



BidExchangerObjectInfo.prototype.serialize = function(output) {
  this.serializeAs_BidExchangerObjectInfo(output);
};

BidExchangerObjectInfo.prototype.deserialize = function(input) {
  this.deserializeAs_BidExchangerObjectInfo(input);
};

BidExchangerObjectInfo.prototype.serializeAs_BidExchangerObjectInfo = function(output) {
  if (this.objectUID < 0) {
    throw (new Error((("Forbidden value (" + this.objectUID) + ") on element objectUID.")));
  };
  output.writeVarInt(this.objectUID);
  output.writeShort(this.effects.length);
  var _i2 = 0;
  while (_i2 < this.effects.length) {
    output.writeShort((this.effects[_i2]).getTypeId());
    (this.effects[_i2]).serialize(output);
    _i2++;
  };
  output.writeShort(this.prices.length);
  var _i3 = 0;
  while (_i3 < this.prices.length) {
    if (this.prices[_i3] < 0) {
      throw (new Error((("Forbidden value (" + this.prices[_i3]) + ") on element 3 (starting at 1) of prices.")));
    };
    output.writeInt(this.prices[_i3]);
    _i3++;
  };
};

BidExchangerObjectInfo.prototype.deserializeAs_BidExchangerObjectInfo = function(input) {
  var _id2 = 0;
  var _item2;
  var _val3 = 0;
  this.objectUID = input.readVarUhInt();
  if (this.objectUID < 0) {
    throw (new Error((("Forbidden value (" + this.objectUID) + ") on element of BidExchangerObjectInfo.objectUID.")));
  };
  var _effectsLen = input.readUnsignedShort();
  var _i2 = 0;
  while (_i2 < _effectsLen) {
    _id2 = input.readUnsignedShort();
    _item2 = ProtocolTypeManager.getInstance(ObjectEffect, _id2);
    _item2.deserialize(input);
    this.effects.push(_item2);
    _i2++;
  };
  var _pricesLen = input.readUnsignedShort();
  var _i3 = 0;
  while (_i3 < _pricesLen) {
    _val3 = input.readInt();
    if (_val3 < 0) {
      throw (new Error((("Forbidden value (" + _val3) + ") on elements of prices.")));
    };
    this.prices.push(_val3);
    _i3++;
  };
};

BidExchangerObjectInfo.prototype.getTypeId = function() {
  return 122;
};

BidExchangerObjectInfo.prototype.getClassName = function() {
  return 'BidExchangerObjectInfo';
};

module.exports.id = 122;
module.exports.class = BidExchangerObjectInfo;
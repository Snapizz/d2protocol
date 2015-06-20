var SellerBuyerDescriptor = function() {
  this.quantities = [];
  this.types = [];
  this.taxPercentage = 0;
  this.taxModificationPercentage = 0;
  this.maxItemLevel = 0;
  this.maxItemPerAccount = 0;
  this.npcContextualId = 0;
  this.unsoldDelay = 0;
};



SellerBuyerDescriptor.prototype.serialize = function(output) {
  this.serializeAs_SellerBuyerDescriptor(output);
};

SellerBuyerDescriptor.prototype.deserialize = function(input) {
  this.deserializeAs_SellerBuyerDescriptor(input);
};

SellerBuyerDescriptor.prototype.serializeAs_SellerBuyerDescriptor = function(output) {
  output.writeShort(this.quantities.length);
  var _i1 = 0;
  while (_i1 < this.quantities.length) {
    if (this.quantities[_i1] < 0) {
      throw (new Error((("Forbidden value (" + this.quantities[_i1]) + ") on element 1 (starting at 1) of quantities.")));
    };
    output.writeVarInt(this.quantities[_i1]);
    _i1++;
  };
  output.writeShort(this.types.length);
  var _i2 = 0;
  while (_i2 < this.types.length) {
    if (this.types[_i2] < 0) {
      throw (new Error((("Forbidden value (" + this.types[_i2]) + ") on element 2 (starting at 1) of types.")));
    };
    output.writeVarInt(this.types[_i2]);
    _i2++;
  };
  output.writeFloat(this.taxPercentage);
  output.writeFloat(this.taxModificationPercentage);
  if ((((this.maxItemLevel < 0)) || ((this.maxItemLevel > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.maxItemLevel) + ") on element maxItemLevel.")));
  };
  output.writeByte(this.maxItemLevel);
  if (this.maxItemPerAccount < 0) {
    throw (new Error((("Forbidden value (" + this.maxItemPerAccount) + ") on element maxItemPerAccount.")));
  };
  output.writeVarInt(this.maxItemPerAccount);
  output.writeInt(this.npcContextualId);
  if (this.unsoldDelay < 0) {
    throw (new Error((("Forbidden value (" + this.unsoldDelay) + ") on element unsoldDelay.")));
  };
  output.writeVarShort(this.unsoldDelay);
};

SellerBuyerDescriptor.prototype.deserializeAs_SellerBuyerDescriptor = function(input) {
  var _val1 = 0;
  var _val2 = 0;
  var _quantitiesLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _quantitiesLen) {
    _val1 = input.readVarUhInt();
    if (_val1 < 0) {
      throw (new Error((("Forbidden value (" + _val1) + ") on elements of quantities.")));
    };
    this.quantities.push(_val1);
    _i1++;
  };
  var _typesLen = input.readUnsignedShort();
  var _i2 = 0;
  while (_i2 < _typesLen) {
    _val2 = input.readVarUhInt();
    if (_val2 < 0) {
      throw (new Error((("Forbidden value (" + _val2) + ") on elements of types.")));
    };
    this.types.push(_val2);
    _i2++;
  };
  this.taxPercentage = input.readFloat();
  this.taxModificationPercentage = input.readFloat();
  this.maxItemLevel = input.readUnsignedByte();
  if ((((this.maxItemLevel < 0)) || ((this.maxItemLevel > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.maxItemLevel) + ") on element of SellerBuyerDescriptor.maxItemLevel.")));
  };
  this.maxItemPerAccount = input.readVarUhInt();
  if (this.maxItemPerAccount < 0) {
    throw (new Error((("Forbidden value (" + this.maxItemPerAccount) + ") on element of SellerBuyerDescriptor.maxItemPerAccount.")));
  };
  this.npcContextualId = input.readInt();
  this.unsoldDelay = input.readVarUhShort();
  if (this.unsoldDelay < 0) {
    throw (new Error((("Forbidden value (" + this.unsoldDelay) + ") on element of SellerBuyerDescriptor.unsoldDelay.")));
  };
};

SellerBuyerDescriptor.prototype.getTypeId = function() {
  return 121;
};

SellerBuyerDescriptor.prototype.getClassName = function() {
  return 'SellerBuyerDescriptor';
};

module.exports.id = 121;
module.exports.class = SellerBuyerDescriptor;
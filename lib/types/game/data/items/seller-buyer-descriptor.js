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

SellerBuyerDescriptor.prototype.serializeAs_SellerBuyerDescriptor = function(param1) {
  param1.writeShort(this.quantities.length);
  var _loc2_ = 0;
  while (_loc2_ < this.quantities.length) {
    if (this.quantities[_loc2_] < 0) {
      throw new Error("Forbidden value (" + this.quantities[_loc2_] + ") on element 1 (starting at 1) of quantities.");
    } else {
      param1.writeVarInt(this.quantities[_loc2_]);
      _loc2_++;
      continue;
    }
  }
  param1.writeShort(this.types.length);
  var _loc3_ = 0;
  while (_loc3_ < this.types.length) {
    if (this.types[_loc3_] < 0) {
      throw new Error("Forbidden value (" + this.types[_loc3_] + ") on element 2 (starting at 1) of types.");
    } else {
      param1.writeVarInt(this.types[_loc3_]);
      _loc3_++;
      continue;
    }
  }
  param1.writeFloat(this.taxPercentage);
  param1.writeFloat(this.taxModificationPercentage);
  if (this.maxItemLevel < 0 || this.maxItemLevel > 255) {
    throw new Error("Forbidden value (" + this.maxItemLevel + ") on element maxItemLevel.");
  } else {
    param1.writeByte(this.maxItemLevel);
    if (this.maxItemPerAccount < 0) {
      throw new Error("Forbidden value (" + this.maxItemPerAccount + ") on element maxItemPerAccount.");
    } else {
      param1.writeVarInt(this.maxItemPerAccount);
      param1.writeInt(this.npcContextualId);
      if (this.unsoldDelay < 0) {
        throw new Error("Forbidden value (" + this.unsoldDelay + ") on element unsoldDelay.");
      } else {
        param1.writeVarShort(this.unsoldDelay);
        return;
      }
    }
  }
};

SellerBuyerDescriptor.prototype.deserializeAs_SellerBuyerDescriptor = function(param1) {
  var _loc6_ = 0;
  var _loc7_ = 0;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc6_ = param1.readVarUhInt();
    if (_loc6_ < 0) {
      throw new Error("Forbidden value (" + _loc6_ + ") on elements of quantities.");
    } else {
      this.quantities.push(_loc6_);
      _loc3_++;
      continue;
    }
  }
  var _loc4_ = param1.readUnsignedShort();
  var _loc5_ = 0;
  while (_loc5_ < _loc4_) {
    _loc7_ = param1.readVarUhInt();
    if (_loc7_ < 0) {
      throw new Error("Forbidden value (" + _loc7_ + ") on elements of types.");
    } else {
      this.types.push(_loc7_);
      _loc5_++;
      continue;
    }
  }
  this.taxPercentage = param1.readFloat();
  this.taxModificationPercentage = param1.readFloat();
  this.maxItemLevel = param1.readUnsignedByte();
  if (this.maxItemLevel < 0 || this.maxItemLevel > 255) {
    throw new Error("Forbidden value (" + this.maxItemLevel + ") on element of SellerBuyerDescriptor.maxItemLevel.");
  } else {
    this.maxItemPerAccount = param1.readVarUhInt();
    if (this.maxItemPerAccount < 0) {
      throw new Error("Forbidden value (" + this.maxItemPerAccount + ") on element of SellerBuyerDescriptor.maxItemPerAccount.");
    } else {
      this.npcContextualId = param1.readInt();
      this.unsoldDelay = param1.readVarUhShort();
      if (this.unsoldDelay < 0) {
        throw new Error("Forbidden value (" + this.unsoldDelay + ") on element of SellerBuyerDescriptor.unsoldDelay.");
      } else {
        return;
      }
    }
  }
};

SellerBuyerDescriptor.prototype.getTypeId = function() {
  return 121;
};

SellerBuyerDescriptor.prototype.getClassName = function() {
  return 'SellerBuyerDescriptor';
};

module.exports.id = 121;
module.exports.class = SellerBuyerDescriptor;
module.exports.getInstance = function() {
  return new SellerBuyerDescriptor();
};
var BaseMessage = require('./entity-look.js').class,
  util = require('util');

var EntityLook = function() {
  this.bonesId = 0;
  this.skins = [];
  this.indexedColors = [];
  this.scales = [];
  this.subentities = [];
};

util.inherits(EntityLook, BaseMessage);

EntityLook.prototype.serialize = function(output) {
  this.serializeAs_EntityLook(output);
};

EntityLook.prototype.deserialize = function(input) {
  this.deserializeAs_EntityLook(input);
};

EntityLook.prototype.serializeAs_EntityLook = function(param1) {
  if (this.bonesId < 0) {
    throw new Error("Forbidden value (" + this.bonesId + ") on element bonesId.");
  } else {
    param1.writeVarShort(this.bonesId);
    param1.writeShort(this.skins.length);
    var _loc2_ = 0;
    while (_loc2_ < this.skins.length) {
      if (this.skins[_loc2_] < 0) {
        throw new Error("Forbidden value (" + this.skins[_loc2_] + ") on element 2 (starting at 1) of skins.");
      } else {
        param1.writeVarShort(this.skins[_loc2_]);
        _loc2_++;
        continue;
      }
    }
    param1.writeShort(this.indexedColors.length);
    var _loc3_ = 0;
    while (_loc3_ < this.indexedColors.length) {
      param1.writeInt(this.indexedColors[_loc3_]);
      _loc3_++;
    }
    param1.writeShort(this.scales.length);
    var _loc4_ = 0;
    while (_loc4_ < this.scales.length) {
      param1.writeVarShort(this.scales[_loc4_]);
      _loc4_++;
    }
    param1.writeShort(this.subentities.length);
    var _loc5_ = 0;
    while (_loc5_ < this.subentities.length) {
      (this.subentities[_loc5_]).serializeAs_SubEntity(param1);
      _loc5_++;
    }
    return;
  }
};

EntityLook.prototype.deserializeAs_EntityLook = function(param1) {
  var _loc10_ = 0;
  var _loc11_ = 0;
  var _loc12_ = 0;
  var _loc13_ = null;
  this.bonesId = param1.readVarUhShort();
  if (this.bonesId < 0) {
    throw new Error("Forbidden value (" + this.bonesId + ") on element of EntityLook.bonesId.");
  } else {
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
      _loc10_ = param1.readVarUhShort();
      if (_loc10_ < 0) {
        throw new Error("Forbidden value (" + _loc10_ + ") on elements of skins.");
      } else {
        this.skins.push(_loc10_);
        _loc3_++;
        continue;
      }
    }
    var _loc4_ = param1.readUnsignedShort();
    var _loc5_ = 0;
    while (_loc5_ < _loc4_) {
      _loc11_ = param1.readInt();
      this.indexedColors.push(_loc11_);
      _loc5_++;
    }
    var _loc6_ = param1.readUnsignedShort();
    var _loc7_ = 0;
    while (_loc7_ < _loc6_) {
      _loc12_ = param1.readVarShort();
      this.scales.push(_loc12_);
      _loc7_++;
    }
    var _loc8_ = param1.readUnsignedShort();
    var _loc9_ = 0;
    while (_loc9_ < _loc8_) {
      _loc13_ = new SubEntity();
      _loc13_.deserialize(param1);
      this.subentities.push(_loc13_);
      _loc9_++;
    }
    return;
  }
};

EntityLook.prototype.getTypeId = function() {
  return 55;
};

EntityLook.prototype.getClassName = function() {
  return 'EntityLook';
};

module.exports.id = 55;
module.exports.class = EntityLook;
module.exports.getInstance = function() {
  return new EntityLook();
};
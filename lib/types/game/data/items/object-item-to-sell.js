var BaseMessage = require('./object-item-to-sell.js').class,
  util = require('util');

var ObjectItemToSell = function() {
  this.objectGID = 0;
  this.effects = [];
  this.objectUID = 0;
  this.quantity = 0;
  this.objectPrice = 0;
};

util.inherits(ObjectItemToSell, BaseMessage);

ObjectItemToSell.prototype.serialize = function(output) {
  this.serializeAs_ObjectItemToSell(output);
};

ObjectItemToSell.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectItemToSell(input);
};

ObjectItemToSell.prototype.serializeAs_ObjectItemToSell = function(param1) {
  this.serializeAs_Item(param1);
  if (this.objectGID < 0) {
    throw new Error("Forbidden value (" + this.objectGID + ") on element objectGID.");
  } else {
    param1.writeVarShort(this.objectGID);
    param1.writeShort(this.effects.length);
    var _loc2_ = 0;
    while (_loc2_ < this.effects.length) {
      param1.writeShort((this.effects[_loc2_]).getTypeId());
      (this.effects[_loc2_]).serialize(param1);
      _loc2_++;
    }
    if (this.objectUID < 0) {
      throw new Error("Forbidden value (" + this.objectUID + ") on element objectUID.");
    } else {
      param1.writeVarInt(this.objectUID);
      if (this.quantity < 0) {
        throw new Error("Forbidden value (" + this.quantity + ") on element quantity.");
      } else {
        param1.writeVarInt(this.quantity);
        if (this.objectPrice < 0) {
          throw new Error("Forbidden value (" + this.objectPrice + ") on element objectPrice.");
        } else {
          param1.writeVarInt(this.objectPrice);
          return;
        }
      }
    }
  }
};

ObjectItemToSell.prototype.deserializeAs_ObjectItemToSell = function(param1) {
  var _loc4_ = 0;
  var _loc5_ = null;
  this.deserialize(param1);
  this.objectGID = param1.readVarUhShort();
  if (this.objectGID < 0) {
    throw new Error("Forbidden value (" + this.objectGID + ") on element of ObjectItemToSell.objectGID.");
  } else {
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
      _loc4_ = param1.readUnsignedShort();
      _loc5_ = ProtocolTypeManager.getInstance(ObjectEffect, _loc4_);
      _loc5_.deserialize(param1);
      this.effects.push(_loc5_);
      _loc3_++;
    }
    this.objectUID = param1.readVarUhInt();
    if (this.objectUID < 0) {
      throw new Error("Forbidden value (" + this.objectUID + ") on element of ObjectItemToSell.objectUID.");
    } else {
      this.quantity = param1.readVarUhInt();
      if (this.quantity < 0) {
        throw new Error("Forbidden value (" + this.quantity + ") on element of ObjectItemToSell.quantity.");
      } else {
        this.objectPrice = param1.readVarUhInt();
        if (this.objectPrice < 0) {
          throw new Error("Forbidden value (" + this.objectPrice + ") on element of ObjectItemToSell.objectPrice.");
        } else {
          return;
        }
      }
    }
  }
};

ObjectItemToSell.prototype.getTypeId = function() {
  return 120;
};

ObjectItemToSell.prototype.getClassName = function() {
  return 'ObjectItemToSell';
};

module.exports.id = 120;
module.exports.class = ObjectItemToSell;
module.exports.getInstance = function() {
  return new ObjectItemToSell();
};
var ObjectItemNotInContainer = function() {
  this.objectGID = 0;
  this.effects = [];
  this.objectUID = 0;
  this.quantity = 0;
};



ObjectItemNotInContainer.prototype.serialize = function(output) {
  this.serializeAs_ObjectItemNotInContainer(output);
};

ObjectItemNotInContainer.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectItemNotInContainer(input);
};

ObjectItemNotInContainer.prototype.serializeAs_ObjectItemNotInContainer = function(output) {
  super.serializeAs_Item(param1);
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
        return;
      }
    }
  }
};

ObjectItemNotInContainer.prototype.deserializeAs_ObjectItemNotInContainer = function(input) {
  var _loc4_ = 0;
  var _loc5_ = null;
  super.deserialize(param1);
  this.objectGID = param1.readVarUhShort();
  if (this.objectGID < 0) {
    throw new Error("Forbidden value (" + this.objectGID + ") on element of ObjectItemNotInContainer.objectGID.");
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
      throw new Error("Forbidden value (" + this.objectUID + ") on element of ObjectItemNotInContainer.objectUID.");
    } else {
      this.quantity = param1.readVarUhInt();
      if (this.quantity < 0) {
        throw new Error("Forbidden value (" + this.quantity + ") on element of ObjectItemNotInContainer.quantity.");
      } else {
        return;
      }
    }
  }
};

ObjectItemNotInContainer.prototype.getTypeId = function() {
  return 134;
};

ObjectItemNotInContainer.prototype.getClassName = function() {
  return 'ObjectItemNotInContainer';
};

module.exports.id = 134;
module.exports.class = ObjectItemNotInContainer;
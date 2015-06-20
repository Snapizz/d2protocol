var ObjectItemMinimalInformation = function() {
  this.objectGID = 0;
  this.effects = [];
};



ObjectItemMinimalInformation.prototype.serialize = function(output) {
  this.serializeAs_ObjectItemMinimalInformation(output);
};

ObjectItemMinimalInformation.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectItemMinimalInformation(input);
};

ObjectItemMinimalInformation.prototype.serializeAs_ObjectItemMinimalInformation = function(output) {
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
    return;
  }
};

ObjectItemMinimalInformation.prototype.deserializeAs_ObjectItemMinimalInformation = function(input) {
  var _loc4_ = 0;
  var _loc5_ = null;
  this.deserialize(param1);
  this.objectGID = param1.readVarUhShort();
  if (this.objectGID < 0) {
    throw new Error("Forbidden value (" + this.objectGID + ") on element of ObjectItemMinimalInformation.objectGID.");
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
    return;
  }
};

ObjectItemMinimalInformation.prototype.getTypeId = function() {
  return 124;
};

ObjectItemMinimalInformation.prototype.getClassName = function() {
  return 'ObjectItemMinimalInformation';
};

module.exports.id = 124;
module.exports.class = ObjectItemMinimalInformation;
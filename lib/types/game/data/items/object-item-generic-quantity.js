var ObjectItemGenericQuantity = function() {
  this.objectGID = 0;
  this.quantity = 0;
};



ObjectItemGenericQuantity.prototype.serialize = function(output) {
  this.serializeAs_ObjectItemGenericQuantity(output);
};

ObjectItemGenericQuantity.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectItemGenericQuantity(input);
};

ObjectItemGenericQuantity.prototype.serializeAs_ObjectItemGenericQuantity = function(param1) {
  this.serializeAs_Item(param1);
  if (this.objectGID < 0) {
    throw new Error("Forbidden value (" + this.objectGID + ") on element objectGID.");
  } else {
    param1.writeVarShort(this.objectGID);
    if (this.quantity < 0) {
      throw new Error("Forbidden value (" + this.quantity + ") on element quantity.");
    } else {
      param1.writeVarInt(this.quantity);
      return;
    }
  }
};

ObjectItemGenericQuantity.prototype.deserializeAs_ObjectItemGenericQuantity = function(param1) {
  super.deserialize(param1);
  this.objectGID = param1.readVarUhShort();
  if (this.objectGID < 0) {
    throw new Error("Forbidden value (" + this.objectGID + ") on element of ObjectItemGenericQuantity.objectGID.");
  } else {
    this.quantity = param1.readVarUhInt();
    if (this.quantity < 0) {
      throw new Error("Forbidden value (" + this.quantity + ") on element of ObjectItemGenericQuantity.quantity.");
    } else {
      return;
    }
  }
};

ObjectItemGenericQuantity.prototype.getTypeId = function() {
  return 483;
};

ObjectItemGenericQuantity.prototype.getClassName = function() {
  return 'ObjectItemGenericQuantity';
};

module.exports.id = 483;
module.exports.class = ObjectItemGenericQuantity;
module.exports.getInstance = function() {
  return new ObjectItemGenericQuantity();
};
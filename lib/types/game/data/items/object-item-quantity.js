var BaseMessage = require('./object-item-quantity.js').class,
  util = require('util');

var ObjectItemQuantity = function() {
  this.objectUID = 0;
  this.quantity = 0;
};

util.inherits(ObjectItemQuantity, BaseMessage);

ObjectItemQuantity.prototype.serialize = function(output) {
  this.serializeAs_ObjectItemQuantity(output);
};

ObjectItemQuantity.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectItemQuantity(input);
};

ObjectItemQuantity.prototype.serializeAs_ObjectItemQuantity = function(param1) {
  this.serializeAs_Item(param1);
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
};

ObjectItemQuantity.prototype.deserializeAs_ObjectItemQuantity = function(param1) {
  this.deserialize(param1);
  this.objectUID = param1.readVarUhInt();
  if (this.objectUID < 0) {
    throw new Error("Forbidden value (" + this.objectUID + ") on element of ObjectItemQuantity.objectUID.");
  } else {
    this.quantity = param1.readVarUhInt();
    if (this.quantity < 0) {
      throw new Error("Forbidden value (" + this.quantity + ") on element of ObjectItemQuantity.quantity.");
    } else {
      return;
    }
  }
};

ObjectItemQuantity.prototype.getTypeId = function() {
  return 119;
};

ObjectItemQuantity.prototype.getClassName = function() {
  return 'ObjectItemQuantity';
};

module.exports.id = 119;
module.exports.class = ObjectItemQuantity;
module.exports.getInstance = function() {
  return new ObjectItemQuantity();
};
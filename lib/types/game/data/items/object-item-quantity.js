var BaseMessage = require('./item.js').class,
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

ObjectItemQuantity.prototype.serializeAs_ObjectItemQuantity = function(output) {
  this.serializeAs_Item(output);
  if (this.objectUID < 0) {
    throw (new Error((("Forbidden value (" + this.objectUID) + ") on element objectUID.")));
  };
  output.writeVarInt(this.objectUID);
  if (this.quantity < 0) {
    throw (new Error((("Forbidden value (" + this.quantity) + ") on element quantity.")));
  };
  output.writeVarInt(this.quantity);
};

ObjectItemQuantity.prototype.deserializeAs_ObjectItemQuantity = function(input) {
  this.deserialize(input);
  this.objectUID = input.readVarUhInt();
  if (this.objectUID < 0) {
    throw (new Error((("Forbidden value (" + this.objectUID) + ") on element of ObjectItemQuantity.objectUID.")));
  };
  this.quantity = input.readVarUhInt();
  if (this.quantity < 0) {
    throw (new Error((("Forbidden value (" + this.quantity) + ") on element of ObjectItemQuantity.quantity.")));
  };
};

ObjectItemQuantity.prototype.getTypeId = function() {
  return 119;
};

ObjectItemQuantity.prototype.getClassName = function() {
  return 'ObjectItemQuantity';
};

module.exports.id = 119;
module.exports.class = ObjectItemQuantity;
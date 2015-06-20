var BaseMessage = require('./object-item-information-with-quantity.js').class,
  util = require('util');

var ObjectItemInformationWithQuantity = function() {
  this.quantity = 0;
};

util.inherits(ObjectItemInformationWithQuantity, BaseMessage);

ObjectItemInformationWithQuantity.prototype.serialize = function(output) {
  this.serializeAs_ObjectItemInformationWithQuantity(output);
};

ObjectItemInformationWithQuantity.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectItemInformationWithQuantity(input);
};

ObjectItemInformationWithQuantity.prototype.serializeAs_ObjectItemInformationWithQuantity = function(param1) {
  this.serializeAs_ObjectItemMinimalInformation(param1);
  if (this.quantity < 0) {
    throw new Error("Forbidden value (" + this.quantity + ") on element quantity.");
  } else {
    param1.writeVarInt(this.quantity);
    return;
  }
};

ObjectItemInformationWithQuantity.prototype.deserializeAs_ObjectItemInformationWithQuantity = function(param1) {
  this.deserialize(param1);
  this.quantity = param1.readVarUhInt();
  if (this.quantity < 0) {
    throw new Error("Forbidden value (" + this.quantity + ") on element of ObjectItemInformationWithQuantity.quantity.");
  } else {
    return;
  }
};

ObjectItemInformationWithQuantity.prototype.getTypeId = function() {
  return 387;
};

ObjectItemInformationWithQuantity.prototype.getClassName = function() {
  return 'ObjectItemInformationWithQuantity';
};

module.exports.id = 387;
module.exports.class = ObjectItemInformationWithQuantity;
module.exports.getInstance = function() {
  return new ObjectItemInformationWithQuantity();
};
var BaseMessage = require('./object-item-minimal-information.js').class,
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

ObjectItemInformationWithQuantity.prototype.serializeAs_ObjectItemInformationWithQuantity = function(output) {
  this.serializeAs_ObjectItemMinimalInformation(output);
  if (this.quantity < 0) {
    throw (new Error((("Forbidden value (" + this.quantity) + ") on element quantity.")));
  };
  output.writeVarInt(this.quantity);
};

ObjectItemInformationWithQuantity.prototype.deserializeAs_ObjectItemInformationWithQuantity = function(input) {
  this.deserialize(input);
  this.quantity = input.readVarUhInt();
  if (this.quantity < 0) {
    throw (new Error((("Forbidden value (" + this.quantity) + ") on element of ObjectItemInformationWithQuantity.quantity.")));
  };
};

ObjectItemInformationWithQuantity.prototype.getTypeId = function() {
  return 387;
};

ObjectItemInformationWithQuantity.prototype.getClassName = function() {
  return 'ObjectItemInformationWithQuantity';
};

module.exports.id = 387;
module.exports.class = ObjectItemInformationWithQuantity;
var BaseMessage = require('./object-item-minimal-information.js').class,
  util = require('util');

var ObjectItemToSellInNpcShop = function() {
  this.objectPrice = 0;
  this.buyCriterion = "";
};

util.inherits(ObjectItemToSellInNpcShop, BaseMessage);

ObjectItemToSellInNpcShop.prototype.serialize = function(output) {
  this.serializeAs_ObjectItemToSellInNpcShop(output);
};

ObjectItemToSellInNpcShop.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectItemToSellInNpcShop(input);
};

ObjectItemToSellInNpcShop.prototype.serializeAs_ObjectItemToSellInNpcShop = function(output) {
  this.serializeAs_ObjectItemMinimalInformation(output);
  if (this.objectPrice < 0) {
    throw (new Error((("Forbidden value (" + this.objectPrice) + ") on element objectPrice.")));
  };
  output.writeVarInt(this.objectPrice);
  output.writeUTF(this.buyCriterion);
};

ObjectItemToSellInNpcShop.prototype.deserializeAs_ObjectItemToSellInNpcShop = function(input) {
  this.deserialize(input);
  this.objectPrice = input.readVarUhInt();
  if (this.objectPrice < 0) {
    throw (new Error((("Forbidden value (" + this.objectPrice) + ") on element of ObjectItemToSellInNpcShop.objectPrice.")));
  };
  this.buyCriterion = input.readUTF();
};

ObjectItemToSellInNpcShop.prototype.getTypeId = function() {
  return 352;
};

ObjectItemToSellInNpcShop.prototype.getClassName = function() {
  return 'ObjectItemToSellInNpcShop';
};

module.exports.id = 352;
module.exports.class = ObjectItemToSellInNpcShop;
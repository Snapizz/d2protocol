var ObjectItemToSellInNpcShop = function() {
  this.objectPrice = 0;
  this.buyCriterion = "";
};



ObjectItemToSellInNpcShop.prototype.serialize = function(output) {
  this.serializeAs_ObjectItemToSellInNpcShop(output);
};

ObjectItemToSellInNpcShop.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectItemToSellInNpcShop(input);
};

ObjectItemToSellInNpcShop.prototype.serializeAs_ObjectItemToSellInNpcShop = function(output) {
  super.serializeAs_ObjectItemMinimalInformation(param1);
  if (this.objectPrice < 0) {
    throw new Error("Forbidden value (" + this.objectPrice + ") on element objectPrice.");
  } else {
    param1.writeVarInt(this.objectPrice);
    param1.writeUTF(this.buyCriterion);
    return;
  }
};

ObjectItemToSellInNpcShop.prototype.deserializeAs_ObjectItemToSellInNpcShop = function(input) {
  super.deserialize(param1);
  this.objectPrice = param1.readVarUhInt();
  if (this.objectPrice < 0) {
    throw new Error("Forbidden value (" + this.objectPrice + ") on element of ObjectItemToSellInNpcShop.objectPrice.");
  } else {
    this.buyCriterion = param1.readUTF();
    return;
  }
};

ObjectItemToSellInNpcShop.prototype.getTypeId = function() {
  return 352;
};

ObjectItemToSellInNpcShop.prototype.getClassName = function() {
  return 'ObjectItemToSellInNpcShop';
};

module.exports.id = 352;
module.exports.class = ObjectItemToSellInNpcShop;
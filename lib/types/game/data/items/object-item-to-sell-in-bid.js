var ObjectItemToSellInBid = function() {
  this.unsoldDelay = 0;
};



ObjectItemToSellInBid.prototype.serialize = function(output) {
  this.serializeAs_ObjectItemToSellInBid(output);
};

ObjectItemToSellInBid.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectItemToSellInBid(input);
};

ObjectItemToSellInBid.prototype.serializeAs_ObjectItemToSellInBid = function(param1) {
  this.serializeAs_ObjectItemToSell(param1);
  if (this.unsoldDelay < 0) {
    throw new Error("Forbidden value (" + this.unsoldDelay + ") on element unsoldDelay.");
  } else {
    param1.writeInt(this.unsoldDelay);
    return;
  }
};

ObjectItemToSellInBid.prototype.deserializeAs_ObjectItemToSellInBid = function(param1) {
  super.deserialize(param1);
  this.unsoldDelay = param1.readInt();
  if (this.unsoldDelay < 0) {
    throw new Error("Forbidden value (" + this.unsoldDelay + ") on element of ObjectItemToSellInBid.unsoldDelay.");
  } else {
    return;
  }
};

ObjectItemToSellInBid.prototype.getTypeId = function() {
  return 164;
};

ObjectItemToSellInBid.prototype.getClassName = function() {
  return 'ObjectItemToSellInBid';
};

module.exports.id = 164;
module.exports.class = ObjectItemToSellInBid;
module.exports.getInstance = function() {
  return new ObjectItemToSellInBid();
};
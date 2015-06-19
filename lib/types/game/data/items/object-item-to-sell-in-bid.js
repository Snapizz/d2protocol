var BaseMessage = require('./object-item-to-sell.js').class,
  util = require('util');

var ObjectItemToSellInBid = function() {
  this.unsoldDelay = 0;
};

util.inherits(ObjectItemToSellInBid, BaseMessage);

ObjectItemToSellInBid.prototype.serialize = function(output) {
  this.serializeAs_ObjectItemToSellInBid(output);
};

ObjectItemToSellInBid.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectItemToSellInBid(input);
};

ObjectItemToSellInBid.prototype.serializeAs_ObjectItemToSellInBid = function(output) {
  this.serializeAs_ObjectItemToSell(output);
  if (this.unsoldDelay < 0) {
    throw (new Error((("Forbidden value (" + this.unsoldDelay) + ") on element unsoldDelay.")));
  };
  output.writeInt(this.unsoldDelay);
};

ObjectItemToSellInBid.prototype.deserializeAs_ObjectItemToSellInBid = function(input) {
  this.deserialize(input);
  this.unsoldDelay = input.readInt();
  if (this.unsoldDelay < 0) {
    throw (new Error((("Forbidden value (" + this.unsoldDelay) + ") on element of ObjectItemToSellInBid.unsoldDelay.")));
  };
};

ObjectItemToSellInBid.prototype.getTypeId = function() {
  return 164;
};

ObjectItemToSellInBid.prototype.getClassName = function() {
  return 'ObjectItemToSellInBid';
};

module.exports.id = 164;
module.exports.class = ObjectItemToSellInBid;
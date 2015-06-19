var BaseMessage = require('./item.js').class,
  util = require('util');

var GoldItem = function() {
  this.sum = 0;
};

util.inherits(GoldItem, BaseMessage);

GoldItem.prototype.serialize = function(output) {
  this.serializeAs_GoldItem(output);
};

GoldItem.prototype.deserialize = function(input) {
  this.deserializeAs_GoldItem(input);
};

GoldItem.prototype.serializeAs_GoldItem = function(output) {
  this.serializeAs_Item(output);
  if (this.sum < 0) {
    throw (new Error((("Forbidden value (" + this.sum) + ") on element sum.")));
  };
  output.writeVarInt(this.sum);
};

GoldItem.prototype.deserializeAs_GoldItem = function(input) {
  this.deserialize(input);
  this.sum = input.readVarUhInt();
  if (this.sum < 0) {
    throw (new Error((("Forbidden value (" + this.sum) + ") on element of GoldItem.sum.")));
  };
};

GoldItem.prototype.getTypeId = function() {
  return 123;
};

GoldItem.prototype.getClassName = function() {
  return 'GoldItem';
};

module.exports.id = 123;
module.exports.class = GoldItem;
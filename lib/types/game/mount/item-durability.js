var BaseMessage = require('./item-durability.js').class,
  util = require('util');

var ItemDurability = function() {
  this.durability = 0;
  this.durabilityMax = 0;
};

util.inherits(ItemDurability, BaseMessage);

ItemDurability.prototype.serialize = function(output) {
  this.serializeAs_ItemDurability(output);
};

ItemDurability.prototype.deserialize = function(input) {
  this.deserializeAs_ItemDurability(input);
};

ItemDurability.prototype.serializeAs_ItemDurability = function(param1) {
  param1.writeShort(this.durability);
  param1.writeShort(this.durabilityMax);
};

ItemDurability.prototype.deserializeAs_ItemDurability = function(param1) {
  this.durability = param1.readShort();
  this.durabilityMax = param1.readShort();
};

ItemDurability.prototype.getTypeId = function() {
  return 168;
};

ItemDurability.prototype.getClassName = function() {
  return 'ItemDurability';
};

module.exports.id = 168;
module.exports.class = ItemDurability;
module.exports.getInstance = function() {
  return new ItemDurability();
};
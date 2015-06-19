var BaseMessage = require('../context/roleplay/object-item-in-role-play.js').class,
  util = require('util');

var PaddockItem = function() {
  this.durability;
};

util.inherits(PaddockItem, BaseMessage);

PaddockItem.prototype.serialize = function(output) {
  this.serializeAs_PaddockItem(output);
};

PaddockItem.prototype.deserialize = function(input) {
  this.deserializeAs_PaddockItem(input);
};

PaddockItem.prototype.serializeAs_PaddockItem = function(output) {
  this.serializeAs_ObjectItemInRolePlay(output);
  this.durability.serializeAs_ItemDurability(output);
};

PaddockItem.prototype.deserializeAs_PaddockItem = function(input) {
  this.deserialize(input);
  this.durability = new ItemDurability();
  this.durability.deserialize(input);
};

PaddockItem.prototype.getTypeId = function() {
  return 185;
};

PaddockItem.prototype.getClassName = function() {
  return 'PaddockItem';
};

module.exports.id = 185;
module.exports.class = PaddockItem;
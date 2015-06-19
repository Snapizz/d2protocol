var ItemDurability = function() {
  this.durability = 0;
  this.durabilityMax = 0;
};



ItemDurability.prototype.serialize = function(output) {
  this.serializeAs_ItemDurability(output);
};

ItemDurability.prototype.deserialize = function(input) {
  this.deserializeAs_ItemDurability(input);
};

ItemDurability.prototype.serializeAs_ItemDurability = function(output) {
  output.writeShort(this.durability);
  output.writeShort(this.durabilityMax);
};

ItemDurability.prototype.deserializeAs_ItemDurability = function(input) {
  this.durability = input.readShort();
  this.durabilityMax = input.readShort();
};

ItemDurability.prototype.getTypeId = function() {
  return 168;
};

ItemDurability.prototype.getClassName = function() {
  return 'ItemDurability';
};

module.exports.id = 168;
module.exports.class = ItemDurability;
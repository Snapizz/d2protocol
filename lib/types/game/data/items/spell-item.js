var BaseMessage = require('./item.js').class,
  util = require('util');

var SpellItem = function() {
  this.position = 0;
  this.spellId = 0;
  this.spellLevel = 0;
};

util.inherits(SpellItem, BaseMessage);

SpellItem.prototype.serialize = function(output) {
  this.serializeAs_SpellItem(output);
};

SpellItem.prototype.deserialize = function(input) {
  this.deserializeAs_SpellItem(input);
};

SpellItem.prototype.serializeAs_SpellItem = function(output) {
  this.serializeAs_Item(output);
  if ((((this.position < 63)) || ((this.position > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.position) + ") on element position.")));
  };
  output.writeByte(this.position);
  output.writeInt(this.spellId);
  if ((((this.spellLevel < 1)) || ((this.spellLevel > 6)))) {
    throw (new Error((("Forbidden value (" + this.spellLevel) + ") on element spellLevel.")));
  };
  output.writeByte(this.spellLevel);
};

SpellItem.prototype.deserializeAs_SpellItem = function(input) {
  this.deserialize(input);
  this.position = input.readUnsignedByte();
  if ((((this.position < 63)) || ((this.position > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.position) + ") on element of SpellItem.position.")));
  };
  this.spellId = input.readInt();
  this.spellLevel = input.readByte();
  if ((((this.spellLevel < 1)) || ((this.spellLevel > 6)))) {
    throw (new Error((("Forbidden value (" + this.spellLevel) + ") on element of SpellItem.spellLevel.")));
  };
};

SpellItem.prototype.getTypeId = function() {
  return 49;
};

SpellItem.prototype.getClassName = function() {
  return 'SpellItem';
};

module.exports.id = 49;
module.exports.class = SpellItem;
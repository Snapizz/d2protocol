var BaseMessage = require('./spell-item.js').class,
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

SpellItem.prototype.serializeAs_SpellItem = function(param1) {
  this.serializeAs_Item(param1);
  if (this.position < 63 || this.position > 255) {
    throw new Error("Forbidden value (" + this.position + ") on element position.");
  } else {
    param1.writeByte(this.position);
    param1.writeInt(this.spellId);
    if (this.spellLevel < 1 || this.spellLevel > 6) {
      throw new Error("Forbidden value (" + this.spellLevel + ") on element spellLevel.");
    } else {
      param1.writeByte(this.spellLevel);
      return;
    }
  }
};

SpellItem.prototype.deserializeAs_SpellItem = function(param1) {
  this.deserialize(param1);
  this.position = param1.readUnsignedByte();
  if (this.position < 63 || this.position > 255) {
    throw new Error("Forbidden value (" + this.position + ") on element of SpellItem.position.");
  } else {
    this.spellId = param1.readInt();
    this.spellLevel = param1.readByte();
    if (this.spellLevel < 1 || this.spellLevel > 6) {
      throw new Error("Forbidden value (" + this.spellLevel + ") on element of SpellItem.spellLevel.");
    } else {
      return;
    }
  }
};

SpellItem.prototype.getTypeId = function() {
  return 49;
};

SpellItem.prototype.getClassName = function() {
  return 'SpellItem';
};

module.exports.id = 49;
module.exports.class = SpellItem;
module.exports.getInstance = function() {
  return new SpellItem();
};
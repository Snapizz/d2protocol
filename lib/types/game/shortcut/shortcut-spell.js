var BaseMessage = require('./shortcut.js').class,
  util = require('util');

var ShortcutSpell = function() {
  this.spellId = 0;
};

util.inherits(ShortcutSpell, BaseMessage);

ShortcutSpell.prototype.serialize = function(output) {
  this.serializeAs_ShortcutSpell(output);
};

ShortcutSpell.prototype.deserialize = function(input) {
  this.deserializeAs_ShortcutSpell(input);
};

ShortcutSpell.prototype.serializeAs_ShortcutSpell = function(output) {
  this.serializeAs_Shortcut(output);
  if (this.spellId < 0) {
    throw (new Error((("Forbidden value (" + this.spellId) + ") on element spellId.")));
  };
  output.writeVarShort(this.spellId);
};

ShortcutSpell.prototype.deserializeAs_ShortcutSpell = function(input) {
  this.deserialize(input);
  this.spellId = input.readVarUhShort();
  if (this.spellId < 0) {
    throw (new Error((("Forbidden value (" + this.spellId) + ") on element of ShortcutSpell.spellId.")));
  };
};

ShortcutSpell.prototype.getTypeId = function() {
  return 368;
};

ShortcutSpell.prototype.getClassName = function() {
  return 'ShortcutSpell';
};

module.exports.id = 368;
module.exports.class = ShortcutSpell;
var ShortcutSpell = function() {
    this.spellId = 0;
};

require('util').inherits(ShortcutSpell, require('./shortcut.js').class);

ShortcutSpell.prototype.serialize = function(output) {
    this.serializeAs_ShortcutSpell(output);
};

ShortcutSpell.prototype.deserialize = function(input) {
    this.deserializeAs_ShortcutSpell(input);
};

ShortcutSpell.prototype.serializeAs_ShortcutSpell = function(param1) {
    this.serializeAs_ShortcutAs_Shortcut(param1);
    if (this.spellId < 0) {
        throw new Error("Forbidden value (" + this.spellId + ") on element spellId.");
    } else {
        param1.writeVarShort(this.spellId);
        return;
    }
};

ShortcutSpell.prototype.deserializeAs_ShortcutSpell = function(param1) {
    this.deserializeAs_Shortcut(param1);
    this.spellId = param1.readVarUhShort();
    if (this.spellId < 0) {
        throw new Error("Forbidden value (" + this.spellId + ") on element of ShortcutSpell.spellId.");
    } else {
        return;
    }
};

ShortcutSpell.prototype.getTypeId = function() {
    return 368;
};

ShortcutSpell.prototype.getClassName = function() {
    return 'ShortcutSpell';
};

module.exports.id = 368;
module.exports.class = ShortcutSpell;
module.exports.getInstance = function() {
    return new ShortcutSpell;
};
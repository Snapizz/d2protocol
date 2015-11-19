/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Shortcut = require('./shortcut');
var ShortcutSpell = (function (_super) {
    __extends(ShortcutSpell, _super);
    function ShortcutSpell() {
        this.spellId = 0;
        _super.call(this);
    }
    ShortcutSpell.prototype.getTypeId = function () {
        return ShortcutSpell.ID;
    };
    ShortcutSpell.prototype.reset = function () {
        this.spellId = 0;
    };
    ShortcutSpell.prototype.serialize = function (param1) {
        this.serializeAs_ShortcutSpell(param1);
    };
    ShortcutSpell.prototype.serializeAs_ShortcutSpell = function (param1) {
        _super.prototype.serializeAs_Shortcut.call(this, param1);
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element spellId.');
        }
        param1.writeVarShort(this.spellId);
    };
    ShortcutSpell.prototype.deserialize = function (param1) {
        this.deserializeAs_ShortcutSpell(param1);
    };
    ShortcutSpell.prototype.deserializeAs_ShortcutSpell = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.spellId = param1.readVarUhShort();
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element of ShortcutSpell.spellId.');
        }
    };
    ShortcutSpell.ID = 368;
    return ShortcutSpell;
})(Shortcut);
module.exports = ShortcutSpell;

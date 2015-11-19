/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Item = require('./item');
var SpellItem = (function (_super) {
    __extends(SpellItem, _super);
    function SpellItem() {
        this.position = 0;
        this.spellId = 0;
        this.spellLevel = 0;
        _super.call(this);
    }
    SpellItem.prototype.getTypeId = function () {
        return SpellItem.ID;
    };
    SpellItem.prototype.reset = function () {
        this.position = 0;
        this.spellId = 0;
        this.spellLevel = 0;
    };
    SpellItem.prototype.serialize = function (param1) {
        this.serializeAs_SpellItem(param1);
    };
    SpellItem.prototype.serializeAs_SpellItem = function (param1) {
        _super.prototype.serializeAs_Item.call(this, param1);
        if (this.position < 63 || this.position > 255) {
            throw new Error('Forbidden value (' + this.position + ') on element position.');
        }
        param1.writeByte(this.position);
        param1.writeInt(this.spellId);
        if (this.spellLevel < 1 || this.spellLevel > 6) {
            throw new Error('Forbidden value (' + this.spellLevel + ') on element spellLevel.');
        }
        param1.writeByte(this.spellLevel);
    };
    SpellItem.prototype.deserialize = function (param1) {
        this.deserializeAs_SpellItem(param1);
    };
    SpellItem.prototype.deserializeAs_SpellItem = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.position = param1.readUnsignedByte();
        if (this.position < 63 || this.position > 255) {
            throw new Error('Forbidden value (' + this.position + ') on element of SpellItem.position.');
        }
        this.spellId = param1.readInt();
        this.spellLevel = param1.readByte();
        if (this.spellLevel < 1 || this.spellLevel > 6) {
            throw new Error('Forbidden value (' + this.spellLevel + ') on element of SpellItem.spellLevel.');
        }
    };
    SpellItem.ID = 49;
    return SpellItem;
})(Item);
module.exports = SpellItem;

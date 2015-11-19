/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Shortcut = require('./shortcut');
var ShortcutEmote = (function (_super) {
    __extends(ShortcutEmote, _super);
    function ShortcutEmote() {
        this.emoteId = 0;
        _super.call(this);
    }
    ShortcutEmote.prototype.getTypeId = function () {
        return ShortcutEmote.ID;
    };
    ShortcutEmote.prototype.reset = function () {
        this.emoteId = 0;
    };
    ShortcutEmote.prototype.serialize = function (param1) {
        this.serializeAs_ShortcutEmote(param1);
    };
    ShortcutEmote.prototype.serializeAs_ShortcutEmote = function (param1) {
        _super.prototype.serializeAs_Shortcut.call(this, param1);
        if (this.emoteId < 0 || this.emoteId > 255) {
            throw new Error('Forbidden value (' + this.emoteId + ') on element emoteId.');
        }
        param1.writeByte(this.emoteId);
    };
    ShortcutEmote.prototype.deserialize = function (param1) {
        this.deserializeAs_ShortcutEmote(param1);
    };
    ShortcutEmote.prototype.deserializeAs_ShortcutEmote = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.emoteId = param1.readUnsignedByte();
        if (this.emoteId < 0 || this.emoteId > 255) {
            throw new Error('Forbidden value (' + this.emoteId + ') on element of ShortcutEmote.emoteId.');
        }
    };
    ShortcutEmote.ID = 389;
    return ShortcutEmote;
})(Shortcut);
module.exports = ShortcutEmote;

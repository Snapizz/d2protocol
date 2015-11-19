/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Shortcut = require('./shortcut');
var ShortcutSmiley = (function (_super) {
    __extends(ShortcutSmiley, _super);
    function ShortcutSmiley() {
        this.smileyId = 0;
        _super.call(this);
    }
    ShortcutSmiley.prototype.getTypeId = function () {
        return ShortcutSmiley.ID;
    };
    ShortcutSmiley.prototype.reset = function () {
        this.smileyId = 0;
    };
    ShortcutSmiley.prototype.serialize = function (param1) {
        this.serializeAs_ShortcutSmiley(param1);
    };
    ShortcutSmiley.prototype.serializeAs_ShortcutSmiley = function (param1) {
        _super.prototype.serializeAs_Shortcut.call(this, param1);
        if (this.smileyId < 0) {
            throw new Error('Forbidden value (' + this.smileyId + ') on element smileyId.');
        }
        param1.writeVarShort(this.smileyId);
    };
    ShortcutSmiley.prototype.deserialize = function (param1) {
        this.deserializeAs_ShortcutSmiley(param1);
    };
    ShortcutSmiley.prototype.deserializeAs_ShortcutSmiley = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.smileyId = param1.readVarUhShort();
        if (this.smileyId < 0) {
            throw new Error('Forbidden value (' + this.smileyId + ') on element of ShortcutSmiley.smileyId.');
        }
    };
    ShortcutSmiley.ID = 388;
    return ShortcutSmiley;
})(Shortcut);
module.exports = ShortcutSmiley;

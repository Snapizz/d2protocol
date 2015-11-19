/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Shortcut = require('./shortcut');
var ShortcutObject = (function (_super) {
    __extends(ShortcutObject, _super);
    function ShortcutObject() {
        _super.call(this);
    }
    ShortcutObject.prototype.getTypeId = function () {
        return ShortcutObject.ID;
    };
    ShortcutObject.prototype.reset = function () {
    };
    ShortcutObject.prototype.serialize = function (param1) {
        this.serializeAs_ShortcutObject(param1);
    };
    ShortcutObject.prototype.serializeAs_ShortcutObject = function (param1) {
        _super.prototype.serializeAs_Shortcut.call(this, param1);
    };
    ShortcutObject.prototype.deserialize = function (param1) {
        this.deserializeAs_ShortcutObject(param1);
    };
    ShortcutObject.prototype.deserializeAs_ShortcutObject = function (param1) {
        _super.prototype.deserialize.call(this, param1);
    };
    ShortcutObject.ID = 367;
    return ShortcutObject;
})(Shortcut);
module.exports = ShortcutObject;

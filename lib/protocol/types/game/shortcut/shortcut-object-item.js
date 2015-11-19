/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ShortcutObject = require('./shortcut-object');
var ShortcutObjectItem = (function (_super) {
    __extends(ShortcutObjectItem, _super);
    function ShortcutObjectItem() {
        this.itemUID = 0;
        this.itemGID = 0;
        _super.call(this);
    }
    ShortcutObjectItem.prototype.getTypeId = function () {
        return ShortcutObjectItem.ID;
    };
    ShortcutObjectItem.prototype.reset = function () {
        this.itemUID = 0;
        this.itemGID = 0;
    };
    ShortcutObjectItem.prototype.serialize = function (param1) {
        this.serializeAs_ShortcutObjectItem(param1);
    };
    ShortcutObjectItem.prototype.serializeAs_ShortcutObjectItem = function (param1) {
        _super.prototype.serializeAs_ShortcutObject.call(this, param1);
        param1.writeInt(this.itemUID);
        param1.writeInt(this.itemGID);
    };
    ShortcutObjectItem.prototype.deserialize = function (param1) {
        this.deserializeAs_ShortcutObjectItem(param1);
    };
    ShortcutObjectItem.prototype.deserializeAs_ShortcutObjectItem = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.itemUID = param1.readInt();
        this.itemGID = param1.readInt();
    };
    ShortcutObjectItem.ID = 371;
    return ShortcutObjectItem;
})(ShortcutObject);
module.exports = ShortcutObjectItem;

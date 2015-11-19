/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ShortcutObject = require('./shortcut-object');
var ShortcutObjectIdolsPreset = (function (_super) {
    __extends(ShortcutObjectIdolsPreset, _super);
    function ShortcutObjectIdolsPreset() {
        this.presetId = 0;
        _super.call(this);
    }
    ShortcutObjectIdolsPreset.prototype.getTypeId = function () {
        return ShortcutObjectIdolsPreset.ID;
    };
    ShortcutObjectIdolsPreset.prototype.reset = function () {
        this.presetId = 0;
    };
    ShortcutObjectIdolsPreset.prototype.serialize = function (param1) {
        this.serializeAs_ShortcutObjectIdolsPreset(param1);
    };
    ShortcutObjectIdolsPreset.prototype.serializeAs_ShortcutObjectIdolsPreset = function (param1) {
        _super.prototype.serializeAs_ShortcutObject.call(this, param1);
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element presetId.');
        }
        param1.writeByte(this.presetId);
    };
    ShortcutObjectIdolsPreset.prototype.deserialize = function (param1) {
        this.deserializeAs_ShortcutObjectIdolsPreset(param1);
    };
    ShortcutObjectIdolsPreset.prototype.deserializeAs_ShortcutObjectIdolsPreset = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.presetId = param1.readByte();
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element of ShortcutObjectIdolsPreset.presetId.');
        }
    };
    ShortcutObjectIdolsPreset.ID = 492;
    return ShortcutObjectIdolsPreset;
})(ShortcutObject);
module.exports = ShortcutObjectIdolsPreset;

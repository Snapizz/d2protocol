/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ShortcutObject = require('./shortcut-object');
var ShortcutObjectPreset = (function (_super) {
    __extends(ShortcutObjectPreset, _super);
    function ShortcutObjectPreset() {
        this.presetId = 0;
        _super.call(this);
    }
    ShortcutObjectPreset.prototype.getTypeId = function () {
        return ShortcutObjectPreset.ID;
    };
    ShortcutObjectPreset.prototype.reset = function () {
        this.presetId = 0;
    };
    ShortcutObjectPreset.prototype.serialize = function (param1) {
        this.serializeAs_ShortcutObjectPreset(param1);
    };
    ShortcutObjectPreset.prototype.serializeAs_ShortcutObjectPreset = function (param1) {
        _super.prototype.serializeAs_ShortcutObject.call(this, param1);
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element presetId.');
        }
        param1.writeByte(this.presetId);
    };
    ShortcutObjectPreset.prototype.deserialize = function (param1) {
        this.deserializeAs_ShortcutObjectPreset(param1);
    };
    ShortcutObjectPreset.prototype.deserializeAs_ShortcutObjectPreset = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.presetId = param1.readByte();
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element of ShortcutObjectPreset.presetId.');
        }
    };
    ShortcutObjectPreset.ID = 370;
    return ShortcutObjectPreset;
})(ShortcutObject);
module.exports = ShortcutObjectPreset;

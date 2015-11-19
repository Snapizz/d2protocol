/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var PresetItem = require('./preset-item');
var Preset = (function () {
    function Preset() {
        this.presetId = 0;
        this.symbolId = 0;
        this.mount = false;
        this.objects = [];
    }
    Preset.prototype.getTypeId = function () {
        return Preset.ID;
    };
    Preset.prototype.reset = function () {
        this.presetId = 0;
        this.symbolId = 0;
        this.mount = false;
        this.objects = [];
    };
    Preset.prototype.serialize = function (param1) {
        this.serializeAs_Preset(param1);
    };
    Preset.prototype.serializeAs_Preset = function (param1) {
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element presetId.');
        }
        param1.writeByte(this.presetId);
        if (this.symbolId < 0) {
            throw new Error('Forbidden value (' + this.symbolId + ') on element symbolId.');
        }
        param1.writeByte(this.symbolId);
        param1.writeBoolean(this.mount);
        param1.writeShort(this.objects.length);
        var _loc2_ = 0;
        while (_loc2_ < this.objects.length) {
            (this.objects[_loc2_]).serializeAs_PresetItem(param1);
            _loc2_++;
        }
    };
    Preset.prototype.deserialize = function (param1) {
        this.deserializeAs_Preset(param1);
    };
    Preset.prototype.deserializeAs_Preset = function (param1) {
        var _loc4_ = null;
        this.presetId = param1.readByte();
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element of Preset.presetId.');
        }
        this.symbolId = param1.readByte();
        if (this.symbolId < 0) {
            throw new Error('Forbidden value (' + this.symbolId + ') on element of Preset.symbolId.');
        }
        this.mount = param1.readBoolean();
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new PresetItem();
            _loc4_.deserialize(param1);
            this.objects.push(_loc4_);
            _loc3_++;
        }
    };
    Preset.ID = 355;
    return Preset;
})();
module.exports = Preset;

/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var IdolsPreset = (function () {
    function IdolsPreset() {
        this.presetId = 0;
        this.symbolId = 0;
        this.idolId = [];
    }
    IdolsPreset.prototype.getTypeId = function () {
        return IdolsPreset.ID;
    };
    IdolsPreset.prototype.reset = function () {
        this.presetId = 0;
        this.symbolId = 0;
        this.idolId = [];
    };
    IdolsPreset.prototype.serialize = function (param1) {
        this.serializeAs_IdolsPreset(param1);
    };
    IdolsPreset.prototype.serializeAs_IdolsPreset = function (param1) {
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element presetId.');
        }
        param1.writeByte(this.presetId);
        if (this.symbolId < 0) {
            throw new Error('Forbidden value (' + this.symbolId + ') on element symbolId.');
        }
        param1.writeByte(this.symbolId);
        param1.writeShort(this.idolId.length);
        var _loc2_ = 0;
        while (_loc2_ < this.idolId.length) {
            if (this.idolId[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.idolId[_loc2_] + ') on element 3 (starting at 1) of idolId.');
            }
            param1.writeVarShort(this.idolId[_loc2_]);
            _loc2_++;
        }
    };
    IdolsPreset.prototype.deserialize = function (param1) {
        this.deserializeAs_IdolsPreset(param1);
    };
    IdolsPreset.prototype.deserializeAs_IdolsPreset = function (param1) {
        var _loc4_ = 0;
        this.presetId = param1.readByte();
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element of IdolsPreset.presetId.');
        }
        this.symbolId = param1.readByte();
        if (this.symbolId < 0) {
            throw new Error('Forbidden value (' + this.symbolId + ') on element of IdolsPreset.symbolId.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readVarUhShort();
            if (_loc4_ < 0) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of idolId.');
            }
            this.idolId.push(_loc4_);
            _loc3_++;
        }
    };
    IdolsPreset.ID = 491;
    return IdolsPreset;
})();
module.exports = IdolsPreset;

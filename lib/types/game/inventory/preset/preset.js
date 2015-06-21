var Preset = module.exports = function() {
    this.presetId = 0;
    this.symbolId = 0;
    this.mount = false;
    this.objects = [];

    return this;
};

Preset.prototype.serialize = function(output) {
    this.serializeAs_Preset(output);
};

Preset.prototype.deserialize = function(input) {
    this.deserializeAs_Preset(input);
};

Preset.prototype.serializeAs_Preset = function(param1) {
    if (this.presetId < 0) {
        throw new Error("Forbidden value (" + this.presetId + ") on element presetId.");
    } else {
        param1.writeByte(this.presetId);
        if (this.symbolId < 0) {
            throw new Error("Forbidden value (" + this.symbolId + ") on element symbolId.");
        } else {
            param1.writeByte(this.symbolId);
            param1.writeBoolean(this.mount);
            param1.writeShort(this.objects.length);
            var _loc2_ = 0;
            while (_loc2_ < this.objects.length) {
                (this.objects[_loc2_]).serializeAs_PresetItem(param1);
                _loc2_++;
            }
            return;
        }
    }
};

Preset.prototype.deserializeAs_Preset = function(param1) {
    var _loc4_ = null;
    this.presetId = param1.readByte();
    if (this.presetId < 0) {
        throw new Error("Forbidden value (" + this.presetId + ") on element of Preset.presetId.");
    } else {
        this.symbolId = param1.readByte();
        if (this.symbolId < 0) {
            throw new Error("Forbidden value (" + this.symbolId + ") on element of Preset.symbolId.");
        } else {
            this.mount = param1.readBoolean();
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = new PresetItem();
                _loc4_.deserialize(param1);
                this.objects.push(_loc4_);
                _loc3_++;
            }
            return;
        }
    }
};

Preset.prototype.getTypeId = function() {
    return 355;
};

Preset.prototype.getClassName = function() {
    return 'Preset';
};

module.exports.id = 355;
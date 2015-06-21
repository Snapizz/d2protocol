var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var InventoryPresetUseResultMessage = module.exports = function() {
    this.presetId = 0;
    this.code = 3;
    this.unlinkedPosition = [];

    return this;
};

require('util').inherits(InventoryPresetUseResultMessage, d2com.NetworkMessage.class);

InventoryPresetUseResultMessage.prototype.serialize = function(output) {
    this.serializeAs_InventoryPresetUseResultMessage(output);
};

InventoryPresetUseResultMessage.prototype.deserialize = function(input) {
    this.deserializeAs_InventoryPresetUseResultMessage(input);
};

InventoryPresetUseResultMessage.prototype.serializeAs_InventoryPresetUseResultMessage = function(param1) {
    if (this.presetId < 0) {
        throw new Error("Forbidden value (" + this.presetId + ") on element presetId.");
    } else {
        param1.writeByte(this.presetId);
        param1.writeByte(this.code);
        param1.writeShort(this.unlinkedPosition.length);
        var _loc2_ = 0;
        while (_loc2_ < this.unlinkedPosition.length) {
            param1.writeByte(this.unlinkedPosition[_loc2_]);
            _loc2_++;
        }
        return;
    }
};

InventoryPresetUseResultMessage.prototype.deserializeAs_InventoryPresetUseResultMessage = function(param1) {
    var _loc4_ = 0;
    this.presetId = param1.readByte();
    if (this.presetId < 0) {
        throw new Error("Forbidden value (" + this.presetId + ") on element of InventoryPresetUseResultMessage.presetId.");
    } else {
        this.code = param1.readByte();
        if (this.code < 0) {
            throw new Error("Forbidden value (" + this.code + ") on element of InventoryPresetUseResultMessage.code.");
        } else {
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readUnsignedByte();
                if (_loc4_ < 0 || _loc4_ > 255) {
                    throw new Error("Forbidden value (" + _loc4_ + ") on elements of unlinkedPosition.");
                } else {
                    this.unlinkedPosition.push(_loc4_);
                    _loc3_++;
                    continue;
                }
            }
            return;
        }
    }
};

InventoryPresetUseResultMessage.prototype.getMessageId = function() {
    return 6163;
};

InventoryPresetUseResultMessage.prototype.getClassName = function() {
    return 'InventoryPresetUseResultMessage';
};

module.exports.id = 6163;
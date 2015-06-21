var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var InventoryPresetSaveCustomMessage = function() {
    this.presetId = 0;
    this.symbolId = 0;
    this.itemsPositions = [];
    this.itemsUids = [];
};

require('util').inherits(InventoryPresetSaveCustomMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new InventoryPresetSaveCustomMessage();
};

InventoryPresetSaveCustomMessage.prototype.serialize = function(output) {
    this.serializeAs_InventoryPresetSaveCustomMessage(output);
};

InventoryPresetSaveCustomMessage.prototype.deserialize = function(input) {
    this.deserializeAs_InventoryPresetSaveCustomMessage(input);
};

InventoryPresetSaveCustomMessage.prototype.serializeAs_InventoryPresetSaveCustomMessage = function(param1) {
    if (this.presetId < 0) {
        throw new Error("Forbidden value (" + this.presetId + ") on element presetId.");
    } else {
        param1.writeByte(this.presetId);
        if (this.symbolId < 0) {
            throw new Error("Forbidden value (" + this.symbolId + ") on element symbolId.");
        } else {
            param1.writeByte(this.symbolId);
            param1.writeShort(this.itemsPositions.length);
            var _loc2_ = 0;
            while (_loc2_ < this.itemsPositions.length) {
                param1.writeByte(this.itemsPositions[_loc2_]);
                _loc2_++;
            }
            param1.writeShort(this.itemsUids.length);
            var _loc3_ = 0;
            while (_loc3_ < this.itemsUids.length) {
                if (this.itemsUids[_loc3_] < 0) {
                    throw new Error("Forbidden value (" + this.itemsUids[_loc3_] + ") on element 4 (starting at 1) of itemsUids.");
                } else {
                    param1.writeVarInt(this.itemsUids[_loc3_]);
                    _loc3_++;
                    continue;
                }
            }
            return;
        }
    }
};

InventoryPresetSaveCustomMessage.prototype.deserializeAs_InventoryPresetSaveCustomMessage = function(param1) {
    var _loc6_ = 0;
    var _loc7_ = 0;
    this.presetId = param1.readByte();
    if (this.presetId < 0) {
        throw new Error("Forbidden value (" + this.presetId + ") on element of InventoryPresetSaveCustomMessage.presetId.");
    } else {
        this.symbolId = param1.readByte();
        if (this.symbolId < 0) {
            throw new Error("Forbidden value (" + this.symbolId + ") on element of InventoryPresetSaveCustomMessage.symbolId.");
        } else {
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc6_ = param1.readUnsignedByte();
                if (_loc6_ < 0 || _loc6_ > 255) {
                    throw new Error("Forbidden value (" + _loc6_ + ") on elements of itemsPositions.");
                } else {
                    this.itemsPositions.push(_loc6_);
                    _loc3_++;
                    continue;
                }
            }
            var _loc4_ = param1.readUnsignedShort();
            var _loc5_ = 0;
            while (_loc5_ < _loc4_) {
                _loc7_ = param1.readVarUhInt();
                if (_loc7_ < 0) {
                    throw new Error("Forbidden value (" + _loc7_ + ") on elements of itemsUids.");
                } else {
                    this.itemsUids.push(_loc7_);
                    _loc5_++;
                    continue;
                }
            }
            return;
        }
    }
};

InventoryPresetSaveCustomMessage.prototype.getMessageId = function() {
    return 6329;
};

InventoryPresetSaveCustomMessage.prototype.getClassName = function() {
    return 'InventoryPresetSaveCustomMessage';
};

module.exports.id = 6329;
module.exports.InventoryPresetSaveCustomMessage = InventoryPresetSaveCustomMessage;
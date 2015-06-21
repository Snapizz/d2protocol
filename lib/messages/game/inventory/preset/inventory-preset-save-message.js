var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var InventoryPresetSaveMessage = function() {
    this.presetId = 0;
    this.symbolId = 0;
    this.saveEquipment = false;
};

require('util').inherits(InventoryPresetSaveMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new InventoryPresetSaveMessage();
};

InventoryPresetSaveMessage.prototype.serialize = function(output) {
    this.serializeAs_InventoryPresetSaveMessage(output);
};

InventoryPresetSaveMessage.prototype.deserialize = function(input) {
    this.deserializeAs_InventoryPresetSaveMessage(input);
};

InventoryPresetSaveMessage.prototype.serializeAs_InventoryPresetSaveMessage = function(param1) {
    if (this.presetId < 0) {
        throw new Error("Forbidden value (" + this.presetId + ") on element presetId.");
    } else {
        param1.writeByte(this.presetId);
        if (this.symbolId < 0) {
            throw new Error("Forbidden value (" + this.symbolId + ") on element symbolId.");
        } else {
            param1.writeByte(this.symbolId);
            param1.writeBoolean(this.saveEquipment);
            return;
        }
    }
};

InventoryPresetSaveMessage.prototype.deserializeAs_InventoryPresetSaveMessage = function(param1) {
    this.presetId = param1.readByte();
    if (this.presetId < 0) {
        throw new Error("Forbidden value (" + this.presetId + ") on element of InventoryPresetSaveMessage.presetId.");
    } else {
        this.symbolId = param1.readByte();
        if (this.symbolId < 0) {
            throw new Error("Forbidden value (" + this.symbolId + ") on element of InventoryPresetSaveMessage.symbolId.");
        } else {
            this.saveEquipment = param1.readBoolean();
            return;
        }
    }
};

InventoryPresetSaveMessage.prototype.getMessageId = function() {
    return 6165;
};

InventoryPresetSaveMessage.prototype.getClassName = function() {
    return 'InventoryPresetSaveMessage';
};

module.exports.id = 6165;
module.exports.InventoryPresetSaveMessage = InventoryPresetSaveMessage;
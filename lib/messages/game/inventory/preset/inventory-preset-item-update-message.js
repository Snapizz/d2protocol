var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var PresetItem = require('../../../../types/game/inventory/preset/preset-item.js').PresetItem;

var InventoryPresetItemUpdateMessage = function() {
    this.presetId = 0;
    this.presetItem = new PresetItem();
};

require('util').inherits(InventoryPresetItemUpdateMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new InventoryPresetItemUpdateMessage();
};

InventoryPresetItemUpdateMessage.prototype.serialize = function(output) {
    this.serializeAs_InventoryPresetItemUpdateMessage(output);
};

InventoryPresetItemUpdateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_InventoryPresetItemUpdateMessage(input);
};

InventoryPresetItemUpdateMessage.prototype.serializeAs_InventoryPresetItemUpdateMessage = function(param1) {
    if (this.presetId < 0) {
        throw new Error("Forbidden value (" + this.presetId + ") on element presetId.");
    } else {
        param1.writeByte(this.presetId);
        this.presetItem.serializeAs_PresetItem(param1);
        return;
    }
};

InventoryPresetItemUpdateMessage.prototype.deserializeAs_InventoryPresetItemUpdateMessage = function(param1) {
    this.presetId = param1.readByte();
    if (this.presetId < 0) {
        throw new Error("Forbidden value (" + this.presetId + ") on element of InventoryPresetItemUpdateMessage.presetId.");
    } else {
        this.presetItem = new PresetItem();
        this.presetItem.deserialize(param1);
        return;
    }
};

InventoryPresetItemUpdateMessage.prototype.getMessageId = function() {
    return 6168;
};

InventoryPresetItemUpdateMessage.prototype.getClassName = function() {
    return 'InventoryPresetItemUpdateMessage';
};

module.exports.id = 6168;
module.exports.InventoryPresetItemUpdateMessage = InventoryPresetItemUpdateMessage;
var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var InventoryPresetUseMessage = function() {
    this.presetId = 0;
};

require('util').inherits(InventoryPresetUseMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new InventoryPresetUseMessage();
};

InventoryPresetUseMessage.prototype.serialize = function(output) {
    this.serializeAs_InventoryPresetUseMessage(output);
};

InventoryPresetUseMessage.prototype.deserialize = function(input) {
    this.deserializeAs_InventoryPresetUseMessage(input);
};

InventoryPresetUseMessage.prototype.serializeAs_InventoryPresetUseMessage = function(param1) {
    if (this.presetId < 0) {
        throw new Error("Forbidden value (" + this.presetId + ") on element presetId.");
    } else {
        param1.writeByte(this.presetId);
        return;
    }
};

InventoryPresetUseMessage.prototype.deserializeAs_InventoryPresetUseMessage = function(param1) {
    this.presetId = param1.readByte();
    if (this.presetId < 0) {
        throw new Error("Forbidden value (" + this.presetId + ") on element of InventoryPresetUseMessage.presetId.");
    } else {
        return;
    }
};

InventoryPresetUseMessage.prototype.getMessageId = function() {
    return 6167;
};

InventoryPresetUseMessage.prototype.getClassName = function() {
    return 'InventoryPresetUseMessage';
};

module.exports.id = 6167;
module.exports.InventoryPresetUseMessage = InventoryPresetUseMessage;
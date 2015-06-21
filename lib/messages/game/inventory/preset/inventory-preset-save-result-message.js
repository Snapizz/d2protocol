var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var InventoryPresetSaveResultMessage = function() {
    this.presetId = 0;
    this.code = 2;
};

require('util').inherits(InventoryPresetSaveResultMessage, d2com.NetworkMessage.class);

InventoryPresetSaveResultMessage.prototype.serialize = function(output) {
    this.serializeAs_InventoryPresetSaveResultMessage(output);
};

InventoryPresetSaveResultMessage.prototype.deserialize = function(input) {
    this.deserializeAs_InventoryPresetSaveResultMessage(input);
};

InventoryPresetSaveResultMessage.prototype.serializeAs_InventoryPresetSaveResultMessage = function(param1) {
    if (this.presetId < 0) {
        throw new Error("Forbidden value (" + this.presetId + ") on element presetId.");
    } else {
        param1.writeByte(this.presetId);
        param1.writeByte(this.code);
        return;
    }
};

InventoryPresetSaveResultMessage.prototype.deserializeAs_InventoryPresetSaveResultMessage = function(param1) {
    this.presetId = param1.readByte();
    if (this.presetId < 0) {
        throw new Error("Forbidden value (" + this.presetId + ") on element of InventoryPresetSaveResultMessage.presetId.");
    } else {
        this.code = param1.readByte();
        if (this.code < 0) {
            throw new Error("Forbidden value (" + this.code + ") on element of InventoryPresetSaveResultMessage.code.");
        } else {
            return;
        }
    }
};

InventoryPresetSaveResultMessage.prototype.getMessageId = function() {
    return 6170;
};

InventoryPresetSaveResultMessage.prototype.getClassName = function() {
    return 'InventoryPresetSaveResultMessage';
};

module.exports.id = 6170;
module.exports.class = InventoryPresetSaveResultMessage;
module.exports.getInstance = function() {
    return new InventoryPresetSaveResultMessage;
};
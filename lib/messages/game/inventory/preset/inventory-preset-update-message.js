var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var Preset = require('../../../../types/game/inventory/preset/preset.js').class;

var InventoryPresetUpdateMessage = function() {
    this.preset = new Preset();
};

require('util').inherits(InventoryPresetUpdateMessage, d2com.NetworkMessage.class);

InventoryPresetUpdateMessage.prototype.serialize = function(output) {
    this.serializeAs_InventoryPresetUpdateMessage(output);
};

InventoryPresetUpdateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_InventoryPresetUpdateMessage(input);
};

InventoryPresetUpdateMessage.prototype.serializeAs_InventoryPresetUpdateMessage = function(param1) {
    this.preset.serializeAs_Preset(param1);
};

InventoryPresetUpdateMessage.prototype.deserializeAs_InventoryPresetUpdateMessage = function(param1) {
    this.preset = new Preset();
    this.preset.deserialize(param1);
};

InventoryPresetUpdateMessage.prototype.getMessageId = function() {
    return 6171;
};

InventoryPresetUpdateMessage.prototype.getClassName = function() {
    return 'InventoryPresetUpdateMessage';
};

module.exports.id = 6171;
module.exports.class = InventoryPresetUpdateMessage;
module.exports.getInstance = function() {
    return new InventoryPresetUpdateMessage;
};
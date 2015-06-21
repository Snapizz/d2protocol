var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var Preset = require('../../../../types/game/inventory/preset/preset.js').class;
var ObjectItem = require('../../../../types/game/data/items/object-item.js').class;

var InventoryContentAndPresetMessage = function() {
    this.presets = [];
};

require('util').inherits(InventoryContentAndPresetMessage, require('./inventory-content-message.js'));

module.exports = function() {
    return new InventoryContentAndPresetMessage();
};

InventoryContentAndPresetMessage.prototype.serialize = function(output) {
    this.serializeAs_InventoryContentAndPresetMessage(output);
};

InventoryContentAndPresetMessage.prototype.deserialize = function(input) {
    this.deserializeAs_InventoryContentAndPresetMessage(input);
};

InventoryContentAndPresetMessage.prototype.serializeAs_InventoryContentAndPresetMessage = function(param1) {
    this.serializeAs_InventoryContentMessage(param1);
    param1.writeShort(this.presets.length);
    var _loc2_ = 0;
    while (_loc2_ < this.presets.length) {
        (this.presets[_loc2_]).serializeAs_Preset(param1);
        _loc2_++;
    }
};

InventoryContentAndPresetMessage.prototype.deserializeAs_InventoryContentAndPresetMessage = function(param1) {
    var _loc4_ = null;
    this.deserializeAs_InventoryContentMessage(param1);
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = new Preset();
        _loc4_.deserialize(param1);
        this.presets.push(_loc4_);
        _loc3_++;
    }
};

InventoryContentAndPresetMessage.prototype.getMessageId = function() {
    return 6162;
};

InventoryContentAndPresetMessage.prototype.getClassName = function() {
    return 'InventoryContentAndPresetMessage';
};

module.exports.id = 6162;
module.exports.InventoryContentAndPresetMessage = InventoryContentAndPresetMessage;
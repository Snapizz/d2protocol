var d2com = require('d2com'),
  BaseMessage = require('./inventory-preset-item-update-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');

var PresetItem = require('../../../../types/game/inventory/preset/preset-item.js').class;

var InventoryPresetItemUpdateMessage = function() {
  this.presetId = 0;
  this.presetItem = new PresetItem();
};

util.inherits(InventoryPresetItemUpdateMessage, BaseMessage);

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
module.exports.class = InventoryPresetItemUpdateMessage;
module.exports.getInstance = function() {
  return new InventoryPresetItemUpdateMessage();
};
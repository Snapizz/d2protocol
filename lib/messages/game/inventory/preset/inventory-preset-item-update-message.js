var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var InventoryPresetItemUpdateMessage = function() {
  this.presetId = 0;
  this.presetItem;
};

util.inherits(InventoryPresetItemUpdateMessage, BaseMessage);

InventoryPresetItemUpdateMessage.prototype.serialize = function(output) {
  this.serializeAs_InventoryPresetItemUpdateMessage(output);
};

InventoryPresetItemUpdateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_InventoryPresetItemUpdateMessage(input);
};

InventoryPresetItemUpdateMessage.prototype.serializeAs_InventoryPresetItemUpdateMessage = function(output) {
  if (this.presetId < 0) {
    throw (new Error((("Forbidden value (" + this.presetId) + ") on element presetId.")));
  };
  output.writeByte(this.presetId);
  this.presetItem.serializeAs_PresetItem(output);
};

InventoryPresetItemUpdateMessage.prototype.deserializeAs_InventoryPresetItemUpdateMessage = function(input) {
  this.presetId = input.readByte();
  if (this.presetId < 0) {
    throw (new Error((("Forbidden value (" + this.presetId) + ") on element of InventoryPresetItemUpdateMessage.presetId.")));
  };
  this.presetItem = new PresetItem();
  this.presetItem.deserialize(input);
};

InventoryPresetItemUpdateMessage.prototype.getMessageId = function() {
  return 0;
};

InventoryPresetItemUpdateMessage.prototype.getClassName = function() {
  return 'InventoryPresetItemUpdateMessage';
};

module.exports.id = 0;
module.exports.class = InventoryPresetItemUpdateMessage;
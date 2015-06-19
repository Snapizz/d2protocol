var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var InventoryPresetUpdateMessage = function() {
  this.preset;
};

util.inherits(InventoryPresetUpdateMessage, BaseMessage);

InventoryPresetUpdateMessage.prototype.serialize = function(output) {
  this.serializeAs_InventoryPresetUpdateMessage(output);
};

InventoryPresetUpdateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_InventoryPresetUpdateMessage(input);
};

InventoryPresetUpdateMessage.prototype.serializeAs_InventoryPresetUpdateMessage = function(output) {
  this.preset.serializeAs_Preset(output);
};

InventoryPresetUpdateMessage.prototype.deserializeAs_InventoryPresetUpdateMessage = function(input) {
  this.preset = new Preset();
  this.preset.deserialize(input);
};

InventoryPresetUpdateMessage.prototype.getMessageId = function() {
  return 6171;
};

InventoryPresetUpdateMessage.prototype.getClassName = function() {
  return 'InventoryPresetUpdateMessage';
};

module.exports.id = 6171;
module.exports.class = InventoryPresetUpdateMessage;
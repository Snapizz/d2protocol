var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var InventoryPresetUseMessage = function() {
  this.presetId = 0;
};

util.inherits(InventoryPresetUseMessage, BaseMessage);

InventoryPresetUseMessage.prototype.serialize = function(output) {
  this.serializeAs_InventoryPresetUseMessage(output);
};

InventoryPresetUseMessage.prototype.deserialize = function(input) {
  this.deserializeAs_InventoryPresetUseMessage(input);
};

InventoryPresetUseMessage.prototype.serializeAs_InventoryPresetUseMessage = function(output) {
  if (this.presetId < 0) {
    throw (new Error((("Forbidden value (" + this.presetId) + ") on element presetId.")));
  };
  output.writeByte(this.presetId);
};

InventoryPresetUseMessage.prototype.deserializeAs_InventoryPresetUseMessage = function(input) {
  this.presetId = input.readByte();
  if (this.presetId < 0) {
    throw (new Error((("Forbidden value (" + this.presetId) + ") on element of InventoryPresetUseMessage.presetId.")));
  };
};

InventoryPresetUseMessage.prototype.getMessageId = function() {
  return 6167;
};

InventoryPresetUseMessage.prototype.getClassName = function() {
  return 'InventoryPresetUseMessage';
};

module.exports.id = 6167;
module.exports.class = InventoryPresetUseMessage;
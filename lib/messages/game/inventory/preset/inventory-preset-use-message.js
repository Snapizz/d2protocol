var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
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
module.exports.class = InventoryPresetUseMessage;
module.exports.getInstance = function() {
  return new InventoryPresetUseMessage();
};
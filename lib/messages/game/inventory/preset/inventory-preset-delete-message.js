var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var InventoryPresetDeleteMessage = function() {
  this.presetId = 0;
};

util.inherits(InventoryPresetDeleteMessage, BaseMessage);

InventoryPresetDeleteMessage.prototype.serialize = function(output) {
  this.serializeAs_InventoryPresetDeleteMessage(output);
};

InventoryPresetDeleteMessage.prototype.deserialize = function(input) {
  this.deserializeAs_InventoryPresetDeleteMessage(input);
};

InventoryPresetDeleteMessage.prototype.serializeAs_InventoryPresetDeleteMessage = function(param1) {
  if (this.presetId < 0) {
    throw new Error("Forbidden value (" + this.presetId + ") on element presetId.");
  } else {
    param1.writeByte(this.presetId);
    return;
  }
};

InventoryPresetDeleteMessage.prototype.deserializeAs_InventoryPresetDeleteMessage = function(param1) {
  this.presetId = param1.readByte();
  if (this.presetId < 0) {
    throw new Error("Forbidden value (" + this.presetId + ") on element of InventoryPresetDeleteMessage.presetId.");
  } else {
    return;
  }
};

InventoryPresetDeleteMessage.prototype.getMessageId = function() {
  return 6169;
};

InventoryPresetDeleteMessage.prototype.getClassName = function() {
  return 'InventoryPresetDeleteMessage';
};

module.exports.id = 6169;
module.exports.class = InventoryPresetDeleteMessage;
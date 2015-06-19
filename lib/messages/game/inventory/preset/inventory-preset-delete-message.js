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

InventoryPresetDeleteMessage.prototype.serializeAs_InventoryPresetDeleteMessage = function(output) {
  if (this.presetId < 0) {
    throw (new Error((("Forbidden value (" + this.presetId) + ") on element presetId.")));
  };
  output.writeByte(this.presetId);
};

InventoryPresetDeleteMessage.prototype.deserializeAs_InventoryPresetDeleteMessage = function(input) {
  this.presetId = input.readByte();
  if (this.presetId < 0) {
    throw (new Error((("Forbidden value (" + this.presetId) + ") on element of InventoryPresetDeleteMessage.presetId.")));
  };
};

InventoryPresetDeleteMessage.prototype.getMessageId = function() {
  return 6169;
};

InventoryPresetDeleteMessage.prototype.getClassName = function() {
  return 'InventoryPresetDeleteMessage';
};

module.exports.id = 6169;
module.exports.class = InventoryPresetDeleteMessage;
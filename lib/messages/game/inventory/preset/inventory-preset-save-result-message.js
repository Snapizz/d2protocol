var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var InventoryPresetSaveResultMessage = function() {
  this.presetId = 0;
  this.code = 2;
};

util.inherits(InventoryPresetSaveResultMessage, BaseMessage);

InventoryPresetSaveResultMessage.prototype.serialize = function(output) {
  this.serializeAs_InventoryPresetSaveResultMessage(output);
};

InventoryPresetSaveResultMessage.prototype.deserialize = function(input) {
  this.deserializeAs_InventoryPresetSaveResultMessage(input);
};

InventoryPresetSaveResultMessage.prototype.serializeAs_InventoryPresetSaveResultMessage = function(output) {
  if (this.presetId < 0) {
    throw (new Error((("Forbidden value (" + this.presetId) + ") on element presetId.")));
  };
  output.writeByte(this.presetId);
  output.writeByte(this.code);
};

InventoryPresetSaveResultMessage.prototype.deserializeAs_InventoryPresetSaveResultMessage = function(input) {
  this.presetId = input.readByte();
  if (this.presetId < 0) {
    throw (new Error((("Forbidden value (" + this.presetId) + ") on element of InventoryPresetSaveResultMessage.presetId.")));
  };
  this.code = input.readByte();
  if (this.code < 0) {
    throw (new Error((("Forbidden value (" + this.code) + ") on element of InventoryPresetSaveResultMessage.code.")));
  };
};

InventoryPresetSaveResultMessage.prototype.getMessageId = function() {
  return 6170;
};

InventoryPresetSaveResultMessage.prototype.getClassName = function() {
  return 'InventoryPresetSaveResultMessage';
};

module.exports.id = 6170;
module.exports.class = InventoryPresetSaveResultMessage;
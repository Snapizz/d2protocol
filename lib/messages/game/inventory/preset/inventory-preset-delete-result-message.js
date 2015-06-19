var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var InventoryPresetDeleteResultMessage = function() {
  this.presetId = 0;
  this.code = 2;
};

util.inherits(InventoryPresetDeleteResultMessage, BaseMessage);

InventoryPresetDeleteResultMessage.prototype.serialize = function(output) {
  this.serializeAs_InventoryPresetDeleteResultMessage(output);
};

InventoryPresetDeleteResultMessage.prototype.deserialize = function(input) {
  this.deserializeAs_InventoryPresetDeleteResultMessage(input);
};

InventoryPresetDeleteResultMessage.prototype.serializeAs_InventoryPresetDeleteResultMessage = function(output) {
  if (this.presetId < 0) {
    throw (new Error((("Forbidden value (" + this.presetId) + ") on element presetId.")));
  };
  output.writeByte(this.presetId);
  output.writeByte(this.code);
};

InventoryPresetDeleteResultMessage.prototype.deserializeAs_InventoryPresetDeleteResultMessage = function(input) {
  this.presetId = input.readByte();
  if (this.presetId < 0) {
    throw (new Error((("Forbidden value (" + this.presetId) + ") on element of InventoryPresetDeleteResultMessage.presetId.")));
  };
  this.code = input.readByte();
  if (this.code < 0) {
    throw (new Error((("Forbidden value (" + this.code) + ") on element of InventoryPresetDeleteResultMessage.code.")));
  };
};

InventoryPresetDeleteResultMessage.prototype.getMessageId = function() {
  return 6173;
};

InventoryPresetDeleteResultMessage.prototype.getClassName = function() {
  return 'InventoryPresetDeleteResultMessage';
};

module.exports.id = 6173;
module.exports.class = InventoryPresetDeleteResultMessage;
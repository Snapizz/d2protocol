var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var InventoryPresetItemUpdateErrorMessage = function() {
  this.code = 1;
};

util.inherits(InventoryPresetItemUpdateErrorMessage, BaseMessage);

InventoryPresetItemUpdateErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_InventoryPresetItemUpdateErrorMessage(output);
};

InventoryPresetItemUpdateErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_InventoryPresetItemUpdateErrorMessage(input);
};

InventoryPresetItemUpdateErrorMessage.prototype.serializeAs_InventoryPresetItemUpdateErrorMessage = function(output) {
  output.writeByte(this.code);
};

InventoryPresetItemUpdateErrorMessage.prototype.deserializeAs_InventoryPresetItemUpdateErrorMessage = function(input) {
  this.code = input.readByte();
  if (this.code < 0) {
    throw (new Error((("Forbidden value (" + this.code) + ") on element of InventoryPresetItemUpdateErrorMessage.code.")));
  };
};

InventoryPresetItemUpdateErrorMessage.prototype.getMessageId = function() {
  return 6211;
};

InventoryPresetItemUpdateErrorMessage.prototype.getClassName = function() {
  return 'InventoryPresetItemUpdateErrorMessage';
};

module.exports.id = 6211;
module.exports.class = InventoryPresetItemUpdateErrorMessage;
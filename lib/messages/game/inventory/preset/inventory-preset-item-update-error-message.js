var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
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

InventoryPresetItemUpdateErrorMessage.prototype.serializeAs_InventoryPresetItemUpdateErrorMessage = function(param1) {
  param1.writeByte(this.code);
};

InventoryPresetItemUpdateErrorMessage.prototype.deserializeAs_InventoryPresetItemUpdateErrorMessage = function(param1) {
  this.code = param1.readByte();
  if (this.code < 0) {
    throw new Error("Forbidden value (" + this.code + ") on element of InventoryPresetItemUpdateErrorMessage.code.");
  } else {
    return;
  }
};

InventoryPresetItemUpdateErrorMessage.prototype.getMessageId = function() {
  return 6211;
};

InventoryPresetItemUpdateErrorMessage.prototype.getClassName = function() {
  return 'InventoryPresetItemUpdateErrorMessage';
};

module.exports.id = 6211;
module.exports.class = InventoryPresetItemUpdateErrorMessage;
module.exports.getInstance = function() {
  return new InventoryPresetItemUpdateErrorMessage();
};
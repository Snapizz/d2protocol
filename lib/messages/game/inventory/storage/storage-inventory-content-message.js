var d2com = require('d2com'),
  BaseMessage = require('./storage-inventory-content-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var StorageInventoryContentMessage = function() {

};

util.inherits(StorageInventoryContentMessage, BaseMessage);

StorageInventoryContentMessage.prototype.serialize = function(output) {
  this.serializeAs_StorageInventoryContentMessage(output);
};

StorageInventoryContentMessage.prototype.deserialize = function(input) {
  this.deserializeAs_StorageInventoryContentMessage(input);
};

StorageInventoryContentMessage.prototype.serializeAs_StorageInventoryContentMessage = function(param1) {
  this.serializeAs_InventoryContentMessage(param1);
};

StorageInventoryContentMessage.prototype.deserializeAs_StorageInventoryContentMessage = function(param1) {
  this.deserialize(param1);
};

StorageInventoryContentMessage.prototype.getMessageId = function() {
  return 5646;
};

StorageInventoryContentMessage.prototype.getClassName = function() {
  return 'StorageInventoryContentMessage';
};

module.exports.id = 5646;
module.exports.class = StorageInventoryContentMessage;
module.exports.getInstance = function() {
  return new StorageInventoryContentMessage();
};
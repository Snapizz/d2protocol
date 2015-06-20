var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

StorageInventoryContentMessage.prototype.serializeAs_StorageInventoryContentMessage = function(output) {
  super.serializeAs_InventoryContentMessage(param1);
};

StorageInventoryContentMessage.prototype.deserializeAs_StorageInventoryContentMessage = function(input) {
  super.deserialize(param1);
};

StorageInventoryContentMessage.prototype.getMessageId = function() {
  return 5646;
};

StorageInventoryContentMessage.prototype.getClassName = function() {
  return 'StorageInventoryContentMessage';
};

module.exports.id = 5646;
module.exports.class = StorageInventoryContentMessage;
var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var StorageObjectRemoveMessage = function() {
  this.objectUID = 0;
};

util.inherits(StorageObjectRemoveMessage, BaseMessage);

StorageObjectRemoveMessage.prototype.serialize = function(output) {
  this.serializeAs_StorageObjectRemoveMessage(output);
};

StorageObjectRemoveMessage.prototype.deserialize = function(input) {
  this.deserializeAs_StorageObjectRemoveMessage(input);
};

StorageObjectRemoveMessage.prototype.serializeAs_StorageObjectRemoveMessage = function(output) {
  if (this.objectUID < 0) {
    throw (new Error((("Forbidden value (" + this.objectUID) + ") on element objectUID.")));
  };
  output.writeVarInt(this.objectUID);
};

StorageObjectRemoveMessage.prototype.deserializeAs_StorageObjectRemoveMessage = function(input) {
  this.objectUID = input.readVarUhInt();
  if (this.objectUID < 0) {
    throw (new Error((("Forbidden value (" + this.objectUID) + ") on element of StorageObjectRemoveMessage.objectUID.")));
  };
};

StorageObjectRemoveMessage.prototype.getMessageId = function() {
  return 5648;
};

StorageObjectRemoveMessage.prototype.getClassName = function() {
  return 'StorageObjectRemoveMessage';
};

module.exports.id = 5648;
module.exports.class = StorageObjectRemoveMessage;
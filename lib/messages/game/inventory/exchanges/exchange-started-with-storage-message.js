var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var ExchangeStartedWithStorageMessage = function() {
  this.storageMaxSlot = 0;
};

util.inherits(ExchangeStartedWithStorageMessage, BaseMessage);

ExchangeStartedWithStorageMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeStartedWithStorageMessage(output);
};

ExchangeStartedWithStorageMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeStartedWithStorageMessage(input);
};

ExchangeStartedWithStorageMessage.prototype.serializeAs_ExchangeStartedWithStorageMessage = function(param1) {
  this.serializeAs_ExchangeStartedMessage(param1);
  if (this.storageMaxSlot < 0) {
    throw new Error("Forbidden value (" + this.storageMaxSlot + ") on element storageMaxSlot.");
  } else {
    param1.writeVarInt(this.storageMaxSlot);
    return;
  }
};

ExchangeStartedWithStorageMessage.prototype.deserializeAs_ExchangeStartedWithStorageMessage = function(param1) {
  this.deserialize(param1);
  this.storageMaxSlot = param1.readVarUhInt();
  if (this.storageMaxSlot < 0) {
    throw new Error("Forbidden value (" + this.storageMaxSlot + ") on element of ExchangeStartedWithStorageMessage.storageMaxSlot.");
  } else {
    return;
  }
};

ExchangeStartedWithStorageMessage.prototype.getMessageId = function() {
  return 6236;
};

ExchangeStartedWithStorageMessage.prototype.getClassName = function() {
  return 'ExchangeStartedWithStorageMessage';
};

module.exports.id = 6236;
module.exports.class = ExchangeStartedWithStorageMessage;
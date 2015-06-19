var d2com = require('d2com'),
  BaseMessage = require('./exchange-started-message.js').class,
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

ExchangeStartedWithStorageMessage.prototype.serializeAs_ExchangeStartedWithStorageMessage = function(output) {
  this.serializeAs_ExchangeStartedMessage(output);
  if (this.storageMaxSlot < 0) {
    throw (new Error((("Forbidden value (" + this.storageMaxSlot) + ") on element storageMaxSlot.")));
  };
  output.writeVarInt(this.storageMaxSlot);
};

ExchangeStartedWithStorageMessage.prototype.deserializeAs_ExchangeStartedWithStorageMessage = function(input) {
  this.deserialize(input);
  this.storageMaxSlot = input.readVarUhInt();
  if (this.storageMaxSlot < 0) {
    throw (new Error((("Forbidden value (" + this.storageMaxSlot) + ") on element of ExchangeStartedWithStorageMessage.storageMaxSlot.")));
  };
};

ExchangeStartedWithStorageMessage.prototype.getMessageId = function() {
  return 6236;
};

ExchangeStartedWithStorageMessage.prototype.getClassName = function() {
  return 'ExchangeStartedWithStorageMessage';
};

module.exports.id = 6236;
module.exports.class = ExchangeStartedWithStorageMessage;
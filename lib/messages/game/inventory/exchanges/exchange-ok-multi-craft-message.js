var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeOkMultiCraftMessage = function() {
  this.initiatorId = 0;
  this.otherId = 0;
  this.role = 0;
};

util.inherits(ExchangeOkMultiCraftMessage, BaseMessage);

ExchangeOkMultiCraftMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeOkMultiCraftMessage(output);
};

ExchangeOkMultiCraftMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeOkMultiCraftMessage(input);
};

ExchangeOkMultiCraftMessage.prototype.serializeAs_ExchangeOkMultiCraftMessage = function(output) {
  if (this.initiatorId < 0) {
    throw (new Error((("Forbidden value (" + this.initiatorId) + ") on element initiatorId.")));
  };
  output.writeVarInt(this.initiatorId);
  if (this.otherId < 0) {
    throw (new Error((("Forbidden value (" + this.otherId) + ") on element otherId.")));
  };
  output.writeVarInt(this.otherId);
  output.writeByte(this.role);
};

ExchangeOkMultiCraftMessage.prototype.deserializeAs_ExchangeOkMultiCraftMessage = function(input) {
  this.initiatorId = input.readVarUhInt();
  if (this.initiatorId < 0) {
    throw (new Error((("Forbidden value (" + this.initiatorId) + ") on element of ExchangeOkMultiCraftMessage.initiatorId.")));
  };
  this.otherId = input.readVarUhInt();
  if (this.otherId < 0) {
    throw (new Error((("Forbidden value (" + this.otherId) + ") on element of ExchangeOkMultiCraftMessage.otherId.")));
  };
  this.role = input.readByte();
};

ExchangeOkMultiCraftMessage.prototype.getMessageId = function() {
  return 5768;
};

ExchangeOkMultiCraftMessage.prototype.getClassName = function() {
  return 'ExchangeOkMultiCraftMessage';
};

module.exports.id = 5768;
module.exports.class = ExchangeOkMultiCraftMessage;
var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeStartOkMulticraftCrafterMessage = function() {
  this.maxCase = 0;
  this.skillId = 0;
};

util.inherits(ExchangeStartOkMulticraftCrafterMessage, BaseMessage);

ExchangeStartOkMulticraftCrafterMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeStartOkMulticraftCrafterMessage(output);
};

ExchangeStartOkMulticraftCrafterMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeStartOkMulticraftCrafterMessage(input);
};

ExchangeStartOkMulticraftCrafterMessage.prototype.serializeAs_ExchangeStartOkMulticraftCrafterMessage = function(output) {
  if (this.maxCase < 0) {
    throw (new Error((("Forbidden value (" + this.maxCase) + ") on element maxCase.")));
  };
  output.writeByte(this.maxCase);
  if (this.skillId < 0) {
    throw (new Error((("Forbidden value (" + this.skillId) + ") on element skillId.")));
  };
  output.writeVarInt(this.skillId);
};

ExchangeStartOkMulticraftCrafterMessage.prototype.deserializeAs_ExchangeStartOkMulticraftCrafterMessage = function(input) {
  this.maxCase = input.readByte();
  if (this.maxCase < 0) {
    throw (new Error((("Forbidden value (" + this.maxCase) + ") on element of ExchangeStartOkMulticraftCrafterMessage.maxCase.")));
  };
  this.skillId = input.readVarUhInt();
  if (this.skillId < 0) {
    throw (new Error((("Forbidden value (" + this.skillId) + ") on element of ExchangeStartOkMulticraftCrafterMessage.skillId.")));
  };
};

ExchangeStartOkMulticraftCrafterMessage.prototype.getMessageId = function() {
  return 5818;
};

ExchangeStartOkMulticraftCrafterMessage.prototype.getClassName = function() {
  return 'ExchangeStartOkMulticraftCrafterMessage';
};

module.exports.id = 5818;
module.exports.class = ExchangeStartOkMulticraftCrafterMessage;
var d2com = require('d2com'),
  BaseMessage = require('./exchange-start-ok-craft-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeStartOkCraftWithInformationMessage = function() {
  this.nbCase = 0;
  this.skillId = 0;
};

util.inherits(ExchangeStartOkCraftWithInformationMessage, BaseMessage);

ExchangeStartOkCraftWithInformationMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeStartOkCraftWithInformationMessage(output);
};

ExchangeStartOkCraftWithInformationMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeStartOkCraftWithInformationMessage(input);
};

ExchangeStartOkCraftWithInformationMessage.prototype.serializeAs_ExchangeStartOkCraftWithInformationMessage = function(output) {
  this.serializeAs_ExchangeStartOkCraftMessage(output);
  if (this.nbCase < 0) {
    throw (new Error((("Forbidden value (" + this.nbCase) + ") on element nbCase.")));
  };
  output.writeByte(this.nbCase);
  if (this.skillId < 0) {
    throw (new Error((("Forbidden value (" + this.skillId) + ") on element skillId.")));
  };
  output.writeVarInt(this.skillId);
};

ExchangeStartOkCraftWithInformationMessage.prototype.deserializeAs_ExchangeStartOkCraftWithInformationMessage = function(input) {
  this.deserialize(input);
  this.nbCase = input.readByte();
  if (this.nbCase < 0) {
    throw (new Error((("Forbidden value (" + this.nbCase) + ") on element of ExchangeStartOkCraftWithInformationMessage.nbCase.")));
  };
  this.skillId = input.readVarUhInt();
  if (this.skillId < 0) {
    throw (new Error((("Forbidden value (" + this.skillId) + ") on element of ExchangeStartOkCraftWithInformationMessage.skillId.")));
  };
};

ExchangeStartOkCraftWithInformationMessage.prototype.getMessageId = function() {
  return 5941;
};

ExchangeStartOkCraftWithInformationMessage.prototype.getClassName = function() {
  return 'ExchangeStartOkCraftWithInformationMessage';
};

module.exports.id = 5941;
module.exports.class = ExchangeStartOkCraftWithInformationMessage;
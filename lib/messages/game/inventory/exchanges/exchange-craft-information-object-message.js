var d2com = require('d2com'),
  BaseMessage = require('./exchange-craft-result-with-object-id-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeCraftInformationObjectMessage = function() {
  this.playerId = 0;
};

util.inherits(ExchangeCraftInformationObjectMessage, BaseMessage);

ExchangeCraftInformationObjectMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeCraftInformationObjectMessage(output);
};

ExchangeCraftInformationObjectMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeCraftInformationObjectMessage(input);
};

ExchangeCraftInformationObjectMessage.prototype.serializeAs_ExchangeCraftInformationObjectMessage = function(output) {
  this.serializeAs_ExchangeCraftResultWithObjectIdMessage(output);
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element playerId.")));
  };
  output.writeVarInt(this.playerId);
};

ExchangeCraftInformationObjectMessage.prototype.deserializeAs_ExchangeCraftInformationObjectMessage = function(input) {
  this.deserialize(input);
  this.playerId = input.readVarUhInt();
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element of ExchangeCraftInformationObjectMessage.playerId.")));
  };
};

ExchangeCraftInformationObjectMessage.prototype.getMessageId = function() {
  return 5794;
};

ExchangeCraftInformationObjectMessage.prototype.getClassName = function() {
  return 'ExchangeCraftInformationObjectMessage';
};

module.exports.id = 5794;
module.exports.class = ExchangeCraftInformationObjectMessage;
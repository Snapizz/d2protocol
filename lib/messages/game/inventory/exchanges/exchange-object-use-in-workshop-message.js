var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeObjectUseInWorkshopMessage = function() {
  this.objectUID = 0;
  this.quantity = 0;
};

util.inherits(ExchangeObjectUseInWorkshopMessage, BaseMessage);

ExchangeObjectUseInWorkshopMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeObjectUseInWorkshopMessage(output);
};

ExchangeObjectUseInWorkshopMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeObjectUseInWorkshopMessage(input);
};

ExchangeObjectUseInWorkshopMessage.prototype.serializeAs_ExchangeObjectUseInWorkshopMessage = function(output) {
  if (this.objectUID < 0) {
    throw (new Error((("Forbidden value (" + this.objectUID) + ") on element objectUID.")));
  };
  output.writeVarInt(this.objectUID);
  output.writeVarInt(this.quantity);
};

ExchangeObjectUseInWorkshopMessage.prototype.deserializeAs_ExchangeObjectUseInWorkshopMessage = function(input) {
  this.objectUID = input.readVarUhInt();
  if (this.objectUID < 0) {
    throw (new Error((("Forbidden value (" + this.objectUID) + ") on element of ExchangeObjectUseInWorkshopMessage.objectUID.")));
  };
  this.quantity = input.readVarInt();
};

ExchangeObjectUseInWorkshopMessage.prototype.getMessageId = function() {
  return 6004;
};

ExchangeObjectUseInWorkshopMessage.prototype.getClassName = function() {
  return 'ExchangeObjectUseInWorkshopMessage';
};

module.exports.id = 6004;
module.exports.class = ExchangeObjectUseInWorkshopMessage;
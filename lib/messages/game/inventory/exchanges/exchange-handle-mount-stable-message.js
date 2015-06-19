var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeHandleMountStableMessage = function() {
  this.actionType = 0;
  this.rideId = 0;
};

util.inherits(ExchangeHandleMountStableMessage, BaseMessage);

ExchangeHandleMountStableMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeHandleMountStableMessage(output);
};

ExchangeHandleMountStableMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeHandleMountStableMessage(input);
};

ExchangeHandleMountStableMessage.prototype.serializeAs_ExchangeHandleMountStableMessage = function(output) {
  output.writeByte(this.actionType);
  if (this.rideId < 0) {
    throw (new Error((("Forbidden value (" + this.rideId) + ") on element rideId.")));
  };
  output.writeVarInt(this.rideId);
};

ExchangeHandleMountStableMessage.prototype.deserializeAs_ExchangeHandleMountStableMessage = function(input) {
  this.actionType = input.readByte();
  this.rideId = input.readVarUhInt();
  if (this.rideId < 0) {
    throw (new Error((("Forbidden value (" + this.rideId) + ") on element of ExchangeHandleMountStableMessage.rideId.")));
  };
};

ExchangeHandleMountStableMessage.prototype.getMessageId = function() {
  return 5965;
};

ExchangeHandleMountStableMessage.prototype.getClassName = function() {
  return 'ExchangeHandleMountStableMessage';
};

module.exports.id = 5965;
module.exports.class = ExchangeHandleMountStableMessage;
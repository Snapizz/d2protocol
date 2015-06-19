var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var OnConnectionEventMessage = function() {
  this.eventType = 0;
};

util.inherits(OnConnectionEventMessage, BaseMessage);

OnConnectionEventMessage.prototype.serialize = function(output) {
  this.serializeAs_OnConnectionEventMessage(output);
};

OnConnectionEventMessage.prototype.deserialize = function(input) {
  this.deserializeAs_OnConnectionEventMessage(input);
};

OnConnectionEventMessage.prototype.serializeAs_OnConnectionEventMessage = function(output) {
  output.writeByte(this.eventType);
};

OnConnectionEventMessage.prototype.deserializeAs_OnConnectionEventMessage = function(input) {
  this.eventType = input.readByte();
  if (this.eventType < 0) {
    throw (new Error((("Forbidden value (" + this.eventType) + ") on element of OnConnectionEventMessage.eventType.")));
  };
};

OnConnectionEventMessage.prototype.getMessageId = function() {
  return 5726;
};

OnConnectionEventMessage.prototype.getClassName = function() {
  return 'OnConnectionEventMessage';
};

module.exports.id = 5726;
module.exports.class = OnConnectionEventMessage;
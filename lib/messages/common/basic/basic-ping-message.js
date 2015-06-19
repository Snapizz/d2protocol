var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var BasicPingMessage = function() {
  this.quiet = false;
};

util.inherits(BasicPingMessage, BaseMessage);

BasicPingMessage.prototype.serialize = function(output) {
  this.serializeAs_BasicPingMessage(output);
};

BasicPingMessage.prototype.deserialize = function(input) {
  this.deserializeAs_BasicPingMessage(input);
};

BasicPingMessage.prototype.serializeAs_BasicPingMessage = function(output) {
  output.writeBoolean(this.quiet);
};

BasicPingMessage.prototype.deserializeAs_BasicPingMessage = function(input) {
  this.quiet = input.readBoolean();
};

BasicPingMessage.prototype.getMessageId = function() {
  return 182;
};

BasicPingMessage.prototype.getClassName = function() {
  return 'BasicPingMessage';
};

module.exports.id = 182;
module.exports.class = BasicPingMessage;
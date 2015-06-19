var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var BasicPongMessage = function() {
  this.quiet = false;
};

util.inherits(BasicPongMessage, BaseMessage);

BasicPongMessage.prototype.serialize = function(output) {
  this.serializeAs_BasicPongMessage(output);
};

BasicPongMessage.prototype.deserialize = function(input) {
  this.deserializeAs_BasicPongMessage(input);
};

BasicPongMessage.prototype.serializeAs_BasicPongMessage = function(output) {
  output.writeBoolean(this.quiet);
};

BasicPongMessage.prototype.deserializeAs_BasicPongMessage = function(input) {
  this.quiet = input.readBoolean();
};

BasicPongMessage.prototype.getMessageId = function() {
  return 183;
};

BasicPongMessage.prototype.getClassName = function() {
  return 'BasicPongMessage';
};

module.exports.id = 183;
module.exports.class = BasicPongMessage;
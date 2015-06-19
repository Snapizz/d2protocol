var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var BasicWhoAmIRequestMessage = function() {
  this.verbose = false;
};

util.inherits(BasicWhoAmIRequestMessage, BaseMessage);

BasicWhoAmIRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_BasicWhoAmIRequestMessage(output);
};

BasicWhoAmIRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_BasicWhoAmIRequestMessage(input);
};

BasicWhoAmIRequestMessage.prototype.serializeAs_BasicWhoAmIRequestMessage = function(output) {
  output.writeBoolean(this.verbose);
};

BasicWhoAmIRequestMessage.prototype.deserializeAs_BasicWhoAmIRequestMessage = function(input) {
  this.verbose = input.readBoolean();
};

BasicWhoAmIRequestMessage.prototype.getMessageId = function() {
  return 5664;
};

BasicWhoAmIRequestMessage.prototype.getClassName = function() {
  return 'BasicWhoAmIRequestMessage';
};

module.exports.id = 5664;
module.exports.class = BasicWhoAmIRequestMessage;
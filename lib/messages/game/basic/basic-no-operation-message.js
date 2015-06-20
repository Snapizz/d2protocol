var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var BasicNoOperationMessage = function() {

};

util.inherits(BasicNoOperationMessage, BaseMessage);

BasicNoOperationMessage.prototype.serialize = function(output) {
  this.serializeAs_BasicNoOperationMessage(output);
};

BasicNoOperationMessage.prototype.deserialize = function(input) {
  this.deserializeAs_BasicNoOperationMessage(input);
};

BasicNoOperationMessage.prototype.serializeAs_BasicNoOperationMessage = function(param1) {

};

BasicNoOperationMessage.prototype.deserializeAs_BasicNoOperationMessage = function(param1) {

};

BasicNoOperationMessage.prototype.getMessageId = function() {
  return 176;
};

BasicNoOperationMessage.prototype.getClassName = function() {
  return 'BasicNoOperationMessage';
};

module.exports.id = 176;
module.exports.class = BasicNoOperationMessage;
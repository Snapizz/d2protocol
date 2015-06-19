var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var InteractiveElementUpdatedMessage = function() {
  this.interactiveElement;
};

util.inherits(InteractiveElementUpdatedMessage, BaseMessage);

InteractiveElementUpdatedMessage.prototype.serialize = function(output) {
  this.serializeAs_InteractiveElementUpdatedMessage(output);
};

InteractiveElementUpdatedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_InteractiveElementUpdatedMessage(input);
};

InteractiveElementUpdatedMessage.prototype.serializeAs_InteractiveElementUpdatedMessage = function(output) {
  this.interactiveElement.serializeAs_InteractiveElement(output);
};

InteractiveElementUpdatedMessage.prototype.deserializeAs_InteractiveElementUpdatedMessage = function(input) {
  this.interactiveElement = new InteractiveElement();
  this.interactiveElement.deserialize(input);
};

InteractiveElementUpdatedMessage.prototype.getMessageId = function() {
  return 5708;
};

InteractiveElementUpdatedMessage.prototype.getClassName = function() {
  return 'InteractiveElementUpdatedMessage';
};

module.exports.id = 5708;
module.exports.class = InteractiveElementUpdatedMessage;
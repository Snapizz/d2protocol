var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var InteractiveElement = require('../../../types/game/interactive/interactive-element.js').class;

var InteractiveElementUpdatedMessage = function() {
  this.interactiveElement = new InteractiveElement();
};

util.inherits(InteractiveElementUpdatedMessage, BaseMessage);

InteractiveElementUpdatedMessage.prototype.serialize = function(output) {
  this.serializeAs_InteractiveElementUpdatedMessage(output);
};

InteractiveElementUpdatedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_InteractiveElementUpdatedMessage(input);
};

InteractiveElementUpdatedMessage.prototype.serializeAs_InteractiveElementUpdatedMessage = function(param1) {
  this.interactiveElement.serializeAs_InteractiveElement(param1);
};

InteractiveElementUpdatedMessage.prototype.deserializeAs_InteractiveElementUpdatedMessage = function(param1) {
  this.interactiveElement = new InteractiveElement();
  this.interactiveElement.deserialize(param1);
};

InteractiveElementUpdatedMessage.prototype.getMessageId = function() {
  return 5708;
};

InteractiveElementUpdatedMessage.prototype.getClassName = function() {
  return 'InteractiveElementUpdatedMessage';
};

module.exports.id = 5708;
module.exports.class = InteractiveElementUpdatedMessage;
module.exports.getInstance = function() {
  return new InteractiveElementUpdatedMessage();
};
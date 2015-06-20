var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var StatedElementUpdatedMessage = function() {
  this.statedElement;
};

util.inherits(StatedElementUpdatedMessage, BaseMessage);

StatedElementUpdatedMessage.prototype.serialize = function(output) {
  this.serializeAs_StatedElementUpdatedMessage(output);
};

StatedElementUpdatedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_StatedElementUpdatedMessage(input);
};

StatedElementUpdatedMessage.prototype.serializeAs_StatedElementUpdatedMessage = function(param1) {
  this.statedElement.serializeAs_StatedElement(param1);
};

StatedElementUpdatedMessage.prototype.deserializeAs_StatedElementUpdatedMessage = function(param1) {
  this.statedElement = new StatedElement();
  this.statedElement.deserialize(param1);
};

StatedElementUpdatedMessage.prototype.getMessageId = function() {
  return 5709;
};

StatedElementUpdatedMessage.prototype.getClassName = function() {
  return 'StatedElementUpdatedMessage';
};

module.exports.id = 5709;
module.exports.class = StatedElementUpdatedMessage;
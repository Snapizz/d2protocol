var d2com = require('d2com'),
  BaseMessage = require('./stated-element-updated-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');

var StatedElement = require('../../../types/game/interactive/stated-element.js').class;

var StatedElementUpdatedMessage = function() {
  this.statedElement = new StatedElement();
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
module.exports.getInstance = function() {
  return new StatedElementUpdatedMessage();
};
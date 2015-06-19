var d2com = require('d2com'),
  BaseMessage = require('./abstract-party-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AbstractPartyEventMessage = function() {

};

util.inherits(AbstractPartyEventMessage, BaseMessage);

AbstractPartyEventMessage.prototype.serialize = function(output) {
  this.serializeAs_AbstractPartyEventMessage(output);
};

AbstractPartyEventMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AbstractPartyEventMessage(input);
};

AbstractPartyEventMessage.prototype.serializeAs_AbstractPartyEventMessage = function(output) {
  this.serializeAs_AbstractPartyMessage(output);
};

AbstractPartyEventMessage.prototype.deserializeAs_AbstractPartyEventMessage = function(input) {
  this.deserialize(input);
};

AbstractPartyEventMessage.prototype.getMessageId = function() {
  return 6273;
};

AbstractPartyEventMessage.prototype.getClassName = function() {
  return 'AbstractPartyEventMessage';
};

module.exports.id = 6273;
module.exports.class = AbstractPartyEventMessage;
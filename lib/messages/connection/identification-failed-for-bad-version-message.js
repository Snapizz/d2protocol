var d2com = require('d2com'),
  BaseMessage = require('./identification-failed-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var IdentificationFailedForBadVersionMessage = function() {
  this.requiredVersion;
};

util.inherits(IdentificationFailedForBadVersionMessage, BaseMessage);

IdentificationFailedForBadVersionMessage.prototype.serialize = function(output) {
  this.serializeAs_IdentificationFailedForBadVersionMessage(output);
};

IdentificationFailedForBadVersionMessage.prototype.deserialize = function(input) {
  this.deserializeAs_IdentificationFailedForBadVersionMessage(input);
};

IdentificationFailedForBadVersionMessage.prototype.serializeAs_IdentificationFailedForBadVersionMessage = function(output) {
  this.serializeAs_IdentificationFailedMessage(output);
  this.requiredVersion.serializeAs_Version(output);
};

IdentificationFailedForBadVersionMessage.prototype.deserializeAs_IdentificationFailedForBadVersionMessage = function(input) {
  this.deserialize(input);
  this.requiredVersion = new Version();
  this.requiredVersion.deserialize(input);
};

IdentificationFailedForBadVersionMessage.prototype.getMessageId = function() {
  return 21;
};

IdentificationFailedForBadVersionMessage.prototype.getClassName = function() {
  return 'IdentificationFailedForBadVersionMessage';
};

module.exports.id = 21;
module.exports.class = IdentificationFailedForBadVersionMessage;
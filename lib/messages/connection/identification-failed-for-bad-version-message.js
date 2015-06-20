var d2com = require('d2com'),
  BaseMessage = require('./identification-failed-for-bad-version-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');

var Version = require('../../types/version/version.js').class;

var IdentificationFailedForBadVersionMessage = function() {
  this.requiredVersion = new Version();
};

util.inherits(IdentificationFailedForBadVersionMessage, BaseMessage);

IdentificationFailedForBadVersionMessage.prototype.serialize = function(output) {
  this.serializeAs_IdentificationFailedForBadVersionMessage(output);
};

IdentificationFailedForBadVersionMessage.prototype.deserialize = function(input) {
  this.deserializeAs_IdentificationFailedForBadVersionMessage(input);
};

IdentificationFailedForBadVersionMessage.prototype.serializeAs_IdentificationFailedForBadVersionMessage = function(param1) {
  this.serializeAs_IdentificationFailedMessage(param1);
  this.requiredVersion.serializeAs_Version(param1);
};

IdentificationFailedForBadVersionMessage.prototype.deserializeAs_IdentificationFailedForBadVersionMessage = function(param1) {
  this.deserialize(param1);
  this.requiredVersion = new Version();
  this.requiredVersion.deserialize(param1);
};

IdentificationFailedForBadVersionMessage.prototype.getMessageId = function() {
  return 21;
};

IdentificationFailedForBadVersionMessage.prototype.getClassName = function() {
  return 'IdentificationFailedForBadVersionMessage';
};

module.exports.id = 21;
module.exports.class = IdentificationFailedForBadVersionMessage;
module.exports.getInstance = function() {
  return new IdentificationFailedForBadVersionMessage();
};
var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var IgnoredAddFailureMessage = function() {
  this.reason = 0;
};

util.inherits(IgnoredAddFailureMessage, BaseMessage);

IgnoredAddFailureMessage.prototype.serialize = function(output) {
  this.serializeAs_IgnoredAddFailureMessage(output);
};

IgnoredAddFailureMessage.prototype.deserialize = function(input) {
  this.deserializeAs_IgnoredAddFailureMessage(input);
};

IgnoredAddFailureMessage.prototype.serializeAs_IgnoredAddFailureMessage = function(param1) {
  param1.writeByte(this.reason);
};

IgnoredAddFailureMessage.prototype.deserializeAs_IgnoredAddFailureMessage = function(param1) {
  this.reason = param1.readByte();
  if (this.reason < 0) {
    throw new Error("Forbidden value (" + this.reason + ") on element of IgnoredAddFailureMessage.reason.");
  } else {
    return;
  }
};

IgnoredAddFailureMessage.prototype.getMessageId = function() {
  return 5679;
};

IgnoredAddFailureMessage.prototype.getClassName = function() {
  return 'IgnoredAddFailureMessage';
};

module.exports.id = 5679;
module.exports.class = IgnoredAddFailureMessage;
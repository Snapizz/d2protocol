var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var KrosmasterAuthTokenErrorMessage = function() {
  this.reason = 0;
};

util.inherits(KrosmasterAuthTokenErrorMessage, BaseMessage);

KrosmasterAuthTokenErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_KrosmasterAuthTokenErrorMessage(output);
};

KrosmasterAuthTokenErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_KrosmasterAuthTokenErrorMessage(input);
};

KrosmasterAuthTokenErrorMessage.prototype.serializeAs_KrosmasterAuthTokenErrorMessage = function(output) {
  output.writeByte(this.reason);
};

KrosmasterAuthTokenErrorMessage.prototype.deserializeAs_KrosmasterAuthTokenErrorMessage = function(input) {
  this.reason = input.readByte();
  if (this.reason < 0) {
    throw (new Error((("Forbidden value (" + this.reason) + ") on element of KrosmasterAuthTokenErrorMessage.reason.")));
  };
};

KrosmasterAuthTokenErrorMessage.prototype.getMessageId = function() {
  return 6345;
};

KrosmasterAuthTokenErrorMessage.prototype.getClassName = function() {
  return 'KrosmasterAuthTokenErrorMessage';
};

module.exports.id = 6345;
module.exports.class = KrosmasterAuthTokenErrorMessage;
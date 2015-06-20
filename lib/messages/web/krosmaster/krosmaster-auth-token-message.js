var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var KrosmasterAuthTokenMessage = function() {
  this.token = "";
};

util.inherits(KrosmasterAuthTokenMessage, BaseMessage);

KrosmasterAuthTokenMessage.prototype.serialize = function(output) {
  this.serializeAs_KrosmasterAuthTokenMessage(output);
};

KrosmasterAuthTokenMessage.prototype.deserialize = function(input) {
  this.deserializeAs_KrosmasterAuthTokenMessage(input);
};

KrosmasterAuthTokenMessage.prototype.serializeAs_KrosmasterAuthTokenMessage = function(param1) {
  param1.writeUTF(this.token);
};

KrosmasterAuthTokenMessage.prototype.deserializeAs_KrosmasterAuthTokenMessage = function(param1) {
  this.token = param1.readUTF();
};

KrosmasterAuthTokenMessage.prototype.getMessageId = function() {
  return 6351;
};

KrosmasterAuthTokenMessage.prototype.getClassName = function() {
  return 'KrosmasterAuthTokenMessage';
};

module.exports.id = 6351;
module.exports.class = KrosmasterAuthTokenMessage;
module.exports.getInstance = function() {
  return new KrosmasterAuthTokenMessage();
};
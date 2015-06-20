var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var ReloginTokenStatusMessage = function() {
  this.validToken = false;
  this.token = "";
};

util.inherits(ReloginTokenStatusMessage, BaseMessage);

ReloginTokenStatusMessage.prototype.serialize = function(output) {
  this.serializeAs_ReloginTokenStatusMessage(output);
};

ReloginTokenStatusMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ReloginTokenStatusMessage(input);
};

ReloginTokenStatusMessage.prototype.serializeAs_ReloginTokenStatusMessage = function(param1) {
  param1.writeBoolean(this.validToken);
  param1.writeUTF(this.token);
};

ReloginTokenStatusMessage.prototype.deserializeAs_ReloginTokenStatusMessage = function(param1) {
  this.validToken = param1.readBoolean();
  this.token = param1.readUTF();
};

ReloginTokenStatusMessage.prototype.getMessageId = function() {
  return 6539;
};

ReloginTokenStatusMessage.prototype.getClassName = function() {
  return 'ReloginTokenStatusMessage';
};

module.exports.id = 6539;
module.exports.class = ReloginTokenStatusMessage;
module.exports.getInstance = function() {
  return new ReloginTokenStatusMessage();
};
var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var IdentificationAccountForceMessage = function() {
  this.forcedAccountLogin = "";
};

util.inherits(IdentificationAccountForceMessage, BaseMessage);

IdentificationAccountForceMessage.prototype.serialize = function(output) {
  this.serializeAs_IdentificationAccountForceMessage(output);
};

IdentificationAccountForceMessage.prototype.deserialize = function(input) {
  this.deserializeAs_IdentificationAccountForceMessage(input);
};

IdentificationAccountForceMessage.prototype.serializeAs_IdentificationAccountForceMessage = function(param1) {
  this.serializeAs_IdentificationMessage(param1);
  param1.writeUTF(this.forcedAccountLogin);
};

IdentificationAccountForceMessage.prototype.deserializeAs_IdentificationAccountForceMessage = function(param1) {
  this.deserialize(param1);
  this.forcedAccountLogin = param1.readUTF();
};

IdentificationAccountForceMessage.prototype.getMessageId = function() {
  return 6119;
};

IdentificationAccountForceMessage.prototype.getClassName = function() {
  return 'IdentificationAccountForceMessage';
};

module.exports.id = 6119;
module.exports.class = IdentificationAccountForceMessage;
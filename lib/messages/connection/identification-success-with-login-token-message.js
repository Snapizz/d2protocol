var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var IdentificationSuccessWithLoginTokenMessage = function() {
  this.loginToken = "";
};

util.inherits(IdentificationSuccessWithLoginTokenMessage, BaseMessage);

IdentificationSuccessWithLoginTokenMessage.prototype.serialize = function(output) {
  this.serializeAs_IdentificationSuccessWithLoginTokenMessage(output);
};

IdentificationSuccessWithLoginTokenMessage.prototype.deserialize = function(input) {
  this.deserializeAs_IdentificationSuccessWithLoginTokenMessage(input);
};

IdentificationSuccessWithLoginTokenMessage.prototype.serializeAs_IdentificationSuccessWithLoginTokenMessage = function(param1) {
  this.serializeAs_IdentificationSuccessMessage(param1);
  param1.writeUTF(this.loginToken);
};

IdentificationSuccessWithLoginTokenMessage.prototype.deserializeAs_IdentificationSuccessWithLoginTokenMessage = function(param1) {
  this.deserialize(param1);
  this.loginToken = param1.readUTF();
};

IdentificationSuccessWithLoginTokenMessage.prototype.getMessageId = function() {
  return 6209;
};

IdentificationSuccessWithLoginTokenMessage.prototype.getClassName = function() {
  return 'IdentificationSuccessWithLoginTokenMessage';
};

module.exports.id = 6209;
module.exports.class = IdentificationSuccessWithLoginTokenMessage;
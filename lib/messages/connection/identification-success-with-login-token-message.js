var d2com = require('d2com'),
  BaseMessage = require('./identification-success-message.js').class,
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

IdentificationSuccessWithLoginTokenMessage.prototype.serializeAs_IdentificationSuccessWithLoginTokenMessage = function(output) {
  this.serializeAs_IdentificationSuccessMessage(output);
  output.writeUTF(this.loginToken);
};

IdentificationSuccessWithLoginTokenMessage.prototype.deserializeAs_IdentificationSuccessWithLoginTokenMessage = function(input) {
  this.deserialize(input);
  this.loginToken = input.readUTF();
};

IdentificationSuccessWithLoginTokenMessage.prototype.getMessageId = function() {
  return 6209;
};

IdentificationSuccessWithLoginTokenMessage.prototype.getClassName = function() {
  return 'IdentificationSuccessWithLoginTokenMessage';
};

module.exports.id = 6209;
module.exports.class = IdentificationSuccessWithLoginTokenMessage;
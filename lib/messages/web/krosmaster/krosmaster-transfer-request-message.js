var d2com = require('d2com'),
  BaseMessage = require('./krosmaster-transfer-request-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var KrosmasterTransferRequestMessage = function() {
  this.uid = "";
};

util.inherits(KrosmasterTransferRequestMessage, BaseMessage);

KrosmasterTransferRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_KrosmasterTransferRequestMessage(output);
};

KrosmasterTransferRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_KrosmasterTransferRequestMessage(input);
};

KrosmasterTransferRequestMessage.prototype.serializeAs_KrosmasterTransferRequestMessage = function(param1) {
  param1.writeUTF(this.uid);
};

KrosmasterTransferRequestMessage.prototype.deserializeAs_KrosmasterTransferRequestMessage = function(param1) {
  this.uid = param1.readUTF();
};

KrosmasterTransferRequestMessage.prototype.getMessageId = function() {
  return 6349;
};

KrosmasterTransferRequestMessage.prototype.getClassName = function() {
  return 'KrosmasterTransferRequestMessage';
};

module.exports.id = 6349;
module.exports.class = KrosmasterTransferRequestMessage;
module.exports.getInstance = function() {
  return new KrosmasterTransferRequestMessage();
};
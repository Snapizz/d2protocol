var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var KrosmasterTransferMessage = function() {
  this.uid = "";
  this.failure = 0;
};

util.inherits(KrosmasterTransferMessage, BaseMessage);

KrosmasterTransferMessage.prototype.serialize = function(output) {
  this.serializeAs_KrosmasterTransferMessage(output);
};

KrosmasterTransferMessage.prototype.deserialize = function(input) {
  this.deserializeAs_KrosmasterTransferMessage(input);
};

KrosmasterTransferMessage.prototype.serializeAs_KrosmasterTransferMessage = function(output) {
  output.writeUTF(this.uid);
  output.writeByte(this.failure);
};

KrosmasterTransferMessage.prototype.deserializeAs_KrosmasterTransferMessage = function(input) {
  this.uid = input.readUTF();
  this.failure = input.readByte();
  if (this.failure < 0) {
    throw (new Error((("Forbidden value (" + this.failure) + ") on element of KrosmasterTransferMessage.failure.")));
  };
};

KrosmasterTransferMessage.prototype.getMessageId = function() {
  return 6348;
};

KrosmasterTransferMessage.prototype.getClassName = function() {
  return 'KrosmasterTransferMessage';
};

module.exports.id = 6348;
module.exports.class = KrosmasterTransferMessage;
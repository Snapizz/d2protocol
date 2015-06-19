var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PopupWarningMessage = function() {
  this.lockDuration = 0;
  this.author = "";
  this.content = "";
};

util.inherits(PopupWarningMessage, BaseMessage);

PopupWarningMessage.prototype.serialize = function(output) {
  this.serializeAs_PopupWarningMessage(output);
};

PopupWarningMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PopupWarningMessage(input);
};

PopupWarningMessage.prototype.serializeAs_PopupWarningMessage = function(output) {
  if ((((this.lockDuration < 0)) || ((this.lockDuration > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.lockDuration) + ") on element lockDuration.")));
  };
  output.writeByte(this.lockDuration);
  output.writeUTF(this.author);
  output.writeUTF(this.content);
};

PopupWarningMessage.prototype.deserializeAs_PopupWarningMessage = function(input) {
  this.lockDuration = input.readUnsignedByte();
  if ((((this.lockDuration < 0)) || ((this.lockDuration > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.lockDuration) + ") on element of PopupWarningMessage.lockDuration.")));
  };
  this.author = input.readUTF();
  this.content = input.readUTF();
};

PopupWarningMessage.prototype.getMessageId = function() {
  return 6134;
};

PopupWarningMessage.prototype.getClassName = function() {
  return 'PopupWarningMessage';
};

module.exports.id = 6134;
module.exports.class = PopupWarningMessage;
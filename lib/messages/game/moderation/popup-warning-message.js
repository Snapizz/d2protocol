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

PopupWarningMessage.prototype.serializeAs_PopupWarningMessage = function(param1) {
  if (this.lockDuration < 0 || this.lockDuration > 255) {
    throw new Error("Forbidden value (" + this.lockDuration + ") on element lockDuration.");
  } else {
    param1.writeByte(this.lockDuration);
    param1.writeUTF(this.author);
    param1.writeUTF(this.content);
    return;
  }
};

PopupWarningMessage.prototype.deserializeAs_PopupWarningMessage = function(param1) {
  this.lockDuration = param1.readUnsignedByte();
  if (this.lockDuration < 0 || this.lockDuration > 255) {
    throw new Error("Forbidden value (" + this.lockDuration + ") on element of PopupWarningMessage.lockDuration.");
  } else {
    this.author = param1.readUTF();
    this.content = param1.readUTF();
    return;
  }
};

PopupWarningMessage.prototype.getMessageId = function() {
  return 6134;
};

PopupWarningMessage.prototype.getClassName = function() {
  return 'PopupWarningMessage';
};

module.exports.id = 6134;
module.exports.class = PopupWarningMessage;
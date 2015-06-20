var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var DebugInClientMessage = function() {
  this.level = 0;
  this.message = "";
};

util.inherits(DebugInClientMessage, BaseMessage);

DebugInClientMessage.prototype.serialize = function(output) {
  this.serializeAs_DebugInClientMessage(output);
};

DebugInClientMessage.prototype.deserialize = function(input) {
  this.deserializeAs_DebugInClientMessage(input);
};

DebugInClientMessage.prototype.serializeAs_DebugInClientMessage = function(param1) {
  param1.writeByte(this.level);
  param1.writeUTF(this.message);
};

DebugInClientMessage.prototype.deserializeAs_DebugInClientMessage = function(param1) {
  this.level = param1.readByte();
  if (this.level < 0) {
    throw new Error("Forbidden value (" + this.level + ") on element of DebugInClientMessage.level.");
  } else {
    this.message = param1.readUTF();
    return;
  }
};

DebugInClientMessage.prototype.getMessageId = function() {
  return 6028;
};

DebugInClientMessage.prototype.getClassName = function() {
  return 'DebugInClientMessage';
};

module.exports.id = 6028;
module.exports.class = DebugInClientMessage;
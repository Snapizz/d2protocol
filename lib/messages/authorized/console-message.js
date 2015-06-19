var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ConsoleMessage = function() {
  this.type = 0;
  this.content = "";
};

util.inherits(ConsoleMessage, BaseMessage);

ConsoleMessage.prototype.serialize = function(output) {
  this.serializeAs_ConsoleMessage(output);
};

ConsoleMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ConsoleMessage(input);
};

ConsoleMessage.prototype.serializeAs_ConsoleMessage = function(output) {
  output.writeByte(this.type);
  output.writeUTF(this.content);
};

ConsoleMessage.prototype.deserializeAs_ConsoleMessage = function(input) {
  this.type = input.readByte();
  if (this.type < 0) {
    throw (new Error((("Forbidden value (" + this.type) + ") on element of ConsoleMessage.type.")));
  };
  this.content = input.readUTF();
};

ConsoleMessage.prototype.getMessageId = function() {
  return 75;
};

ConsoleMessage.prototype.getClassName = function() {
  return 'ConsoleMessage';
};

module.exports.id = 75;
module.exports.class = ConsoleMessage;
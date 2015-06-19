var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ChatAbstractServerMessage = function() {
  this.channel = 0;
  this.content = "";
  this.timestamp = 0;
  this.fingerprint = "";
};

util.inherits(ChatAbstractServerMessage, BaseMessage);

ChatAbstractServerMessage.prototype.serialize = function(output) {
  this.serializeAs_ChatAbstractServerMessage(output);
};

ChatAbstractServerMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ChatAbstractServerMessage(input);
};

ChatAbstractServerMessage.prototype.serializeAs_ChatAbstractServerMessage = function(output) {
  output.writeByte(this.channel);
  output.writeUTF(this.content);
  if (this.timestamp < 0) {
    throw (new Error((("Forbidden value (" + this.timestamp) + ") on element timestamp.")));
  };
  output.writeInt(this.timestamp);
  output.writeUTF(this.fingerprint);
};

ChatAbstractServerMessage.prototype.deserializeAs_ChatAbstractServerMessage = function(input) {
  this.channel = input.readByte();
  if (this.channel < 0) {
    throw (new Error((("Forbidden value (" + this.channel) + ") on element of ChatAbstractServerMessage.channel.")));
  };
  this.content = input.readUTF();
  this.timestamp = input.readInt();
  if (this.timestamp < 0) {
    throw (new Error((("Forbidden value (" + this.timestamp) + ") on element of ChatAbstractServerMessage.timestamp.")));
  };
  this.fingerprint = input.readUTF();
};

ChatAbstractServerMessage.prototype.getMessageId = function() {
  return 880;
};

ChatAbstractServerMessage.prototype.getClassName = function() {
  return 'ChatAbstractServerMessage';
};

module.exports.id = 880;
module.exports.class = ChatAbstractServerMessage;
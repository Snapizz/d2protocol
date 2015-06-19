var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ChatMessageReportMessage = function() {
  this.senderName = "";
  this.content = "";
  this.timestamp = 0;
  this.channel = 0;
  this.fingerprint = "";
  this.reason = 0;
};

util.inherits(ChatMessageReportMessage, BaseMessage);

ChatMessageReportMessage.prototype.serialize = function(output) {
  this.serializeAs_ChatMessageReportMessage(output);
};

ChatMessageReportMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ChatMessageReportMessage(input);
};

ChatMessageReportMessage.prototype.serializeAs_ChatMessageReportMessage = function(output) {
  output.writeUTF(this.senderName);
  output.writeUTF(this.content);
  if (this.timestamp < 0) {
    throw (new Error((("Forbidden value (" + this.timestamp) + ") on element timestamp.")));
  };
  output.writeInt(this.timestamp);
  output.writeByte(this.channel);
  output.writeUTF(this.fingerprint);
  if (this.reason < 0) {
    throw (new Error((("Forbidden value (" + this.reason) + ") on element reason.")));
  };
  output.writeByte(this.reason);
};

ChatMessageReportMessage.prototype.deserializeAs_ChatMessageReportMessage = function(input) {
  this.senderName = input.readUTF();
  this.content = input.readUTF();
  this.timestamp = input.readInt();
  if (this.timestamp < 0) {
    throw (new Error((("Forbidden value (" + this.timestamp) + ") on element of ChatMessageReportMessage.timestamp.")));
  };
  this.channel = input.readByte();
  if (this.channel < 0) {
    throw (new Error((("Forbidden value (" + this.channel) + ") on element of ChatMessageReportMessage.channel.")));
  };
  this.fingerprint = input.readUTF();
  this.reason = input.readByte();
  if (this.reason < 0) {
    throw (new Error((("Forbidden value (" + this.reason) + ") on element of ChatMessageReportMessage.reason.")));
  };
};

ChatMessageReportMessage.prototype.getMessageId = function() {
  return 821;
};

ChatMessageReportMessage.prototype.getClassName = function() {
  return 'ChatMessageReportMessage';
};

module.exports.id = 821;
module.exports.class = ChatMessageReportMessage;
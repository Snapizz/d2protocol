var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ChatSmileyMessage = function() {
  this.entityId = 0;
  this.smileyId = 0;
  this.accountId = 0;
};

util.inherits(ChatSmileyMessage, BaseMessage);

ChatSmileyMessage.prototype.serialize = function(output) {
  this.serializeAs_ChatSmileyMessage(output);
};

ChatSmileyMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ChatSmileyMessage(input);
};

ChatSmileyMessage.prototype.serializeAs_ChatSmileyMessage = function(output) {
  output.writeInt(this.entityId);
  if (this.smileyId < 0) {
    throw (new Error((("Forbidden value (" + this.smileyId) + ") on element smileyId.")));
  };
  output.writeByte(this.smileyId);
  if (this.accountId < 0) {
    throw (new Error((("Forbidden value (" + this.accountId) + ") on element accountId.")));
  };
  output.writeInt(this.accountId);
};

ChatSmileyMessage.prototype.deserializeAs_ChatSmileyMessage = function(input) {
  this.entityId = input.readInt();
  this.smileyId = input.readByte();
  if (this.smileyId < 0) {
    throw (new Error((("Forbidden value (" + this.smileyId) + ") on element of ChatSmileyMessage.smileyId.")));
  };
  this.accountId = input.readInt();
  if (this.accountId < 0) {
    throw (new Error((("Forbidden value (" + this.accountId) + ") on element of ChatSmileyMessage.accountId.")));
  };
};

ChatSmileyMessage.prototype.getMessageId = function() {
  return 801;
};

ChatSmileyMessage.prototype.getClassName = function() {
  return 'ChatSmileyMessage';
};

module.exports.id = 801;
module.exports.class = ChatSmileyMessage;
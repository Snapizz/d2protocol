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

ChatSmileyMessage.prototype.serializeAs_ChatSmileyMessage = function(param1) {
  param1.writeInt(this.entityId);
  if (this.smileyId < 0) {
    throw new Error("Forbidden value (" + this.smileyId + ") on element smileyId.");
  } else {
    param1.writeByte(this.smileyId);
    if (this.accountId < 0) {
      throw new Error("Forbidden value (" + this.accountId + ") on element accountId.");
    } else {
      param1.writeInt(this.accountId);
      return;
    }
  }
};

ChatSmileyMessage.prototype.deserializeAs_ChatSmileyMessage = function(param1) {
  this.entityId = param1.readInt();
  this.smileyId = param1.readByte();
  if (this.smileyId < 0) {
    throw new Error("Forbidden value (" + this.smileyId + ") on element of ChatSmileyMessage.smileyId.");
  } else {
    this.accountId = param1.readInt();
    if (this.accountId < 0) {
      throw new Error("Forbidden value (" + this.accountId + ") on element of ChatSmileyMessage.accountId.");
    } else {
      return;
    }
  }
};

ChatSmileyMessage.prototype.getMessageId = function() {
  return 801;
};

ChatSmileyMessage.prototype.getClassName = function() {
  return 'ChatSmileyMessage';
};

module.exports.id = 801;
module.exports.class = ChatSmileyMessage;
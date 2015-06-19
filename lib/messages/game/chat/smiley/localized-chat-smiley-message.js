var d2com = require('d2com'),
  BaseMessage = require('./chat-smiley-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var LocalizedChatSmileyMessage = function() {
  this.cellId = 0;
};

util.inherits(LocalizedChatSmileyMessage, BaseMessage);

LocalizedChatSmileyMessage.prototype.serialize = function(output) {
  this.serializeAs_LocalizedChatSmileyMessage(output);
};

LocalizedChatSmileyMessage.prototype.deserialize = function(input) {
  this.deserializeAs_LocalizedChatSmileyMessage(input);
};

LocalizedChatSmileyMessage.prototype.serializeAs_LocalizedChatSmileyMessage = function(output) {
  this.serializeAs_ChatSmileyMessage(output);
  if ((((this.cellId < 0)) || ((this.cellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.cellId) + ") on element cellId.")));
  };
  output.writeVarShort(this.cellId);
};

LocalizedChatSmileyMessage.prototype.deserializeAs_LocalizedChatSmileyMessage = function(input) {
  this.deserialize(input);
  this.cellId = input.readVarUhShort();
  if ((((this.cellId < 0)) || ((this.cellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.cellId) + ") on element of LocalizedChatSmileyMessage.cellId.")));
  };
};

LocalizedChatSmileyMessage.prototype.getMessageId = function() {
  return 6185;
};

LocalizedChatSmileyMessage.prototype.getClassName = function() {
  return 'LocalizedChatSmileyMessage';
};

module.exports.id = 6185;
module.exports.class = LocalizedChatSmileyMessage;
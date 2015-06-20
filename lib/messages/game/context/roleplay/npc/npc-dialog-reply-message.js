var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var NpcDialogReplyMessage = function() {
  this.replyId = 0;
};

util.inherits(NpcDialogReplyMessage, BaseMessage);

NpcDialogReplyMessage.prototype.serialize = function(output) {
  this.serializeAs_NpcDialogReplyMessage(output);
};

NpcDialogReplyMessage.prototype.deserialize = function(input) {
  this.deserializeAs_NpcDialogReplyMessage(input);
};

NpcDialogReplyMessage.prototype.serializeAs_NpcDialogReplyMessage = function(param1) {
  if (this.replyId < 0) {
    throw new Error("Forbidden value (" + this.replyId + ") on element replyId.");
  } else {
    param1.writeVarShort(this.replyId);
    return;
  }
};

NpcDialogReplyMessage.prototype.deserializeAs_NpcDialogReplyMessage = function(param1) {
  this.replyId = param1.readVarUhShort();
  if (this.replyId < 0) {
    throw new Error("Forbidden value (" + this.replyId + ") on element of NpcDialogReplyMessage.replyId.");
  } else {
    return;
  }
};

NpcDialogReplyMessage.prototype.getMessageId = function() {
  return 5616;
};

NpcDialogReplyMessage.prototype.getClassName = function() {
  return 'NpcDialogReplyMessage';
};

module.exports.id = 5616;
module.exports.class = NpcDialogReplyMessage;
module.exports.getInstance = function() {
  return new NpcDialogReplyMessage();
};
var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var NpcDialogQuestionMessage = function() {
  this.messageId = 0;
  this.dialogParams = [];
  this.visibleReplies = [];
};

util.inherits(NpcDialogQuestionMessage, BaseMessage);

NpcDialogQuestionMessage.prototype.serialize = function(output) {
  this.serializeAs_NpcDialogQuestionMessage(output);
};

NpcDialogQuestionMessage.prototype.deserialize = function(input) {
  this.deserializeAs_NpcDialogQuestionMessage(input);
};

NpcDialogQuestionMessage.prototype.serializeAs_NpcDialogQuestionMessage = function(param1) {
  if (this.messageId < 0) {
    throw new Error("Forbidden value (" + this.messageId + ") on element messageId.");
  } else {
    param1.writeVarShort(this.messageId);
    param1.writeShort(this.dialogParams.length);
    var _loc2_ = 0;
    while (_loc2_ < this.dialogParams.length) {
      param1.writeUTF(this.dialogParams[_loc2_]);
      _loc2_++;
    }
    param1.writeShort(this.visibleReplies.length);
    var _loc3_ = 0;
    while (_loc3_ < this.visibleReplies.length) {
      if (this.visibleReplies[_loc3_] < 0) {
        throw new Error("Forbidden value (" + this.visibleReplies[_loc3_] + ") on element 3 (starting at 1) of visibleReplies.");
      } else {
        param1.writeVarShort(this.visibleReplies[_loc3_]);
        _loc3_++;
        continue;
      }
    }
    return;
  }
};

NpcDialogQuestionMessage.prototype.deserializeAs_NpcDialogQuestionMessage = function(param1) {
  var _loc6_ = null;
  var _loc7_ = 0;
  this.messageId = param1.readVarUhShort();
  if (this.messageId < 0) {
    throw new Error("Forbidden value (" + this.messageId + ") on element of NpcDialogQuestionMessage.messageId.");
  } else {
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
      _loc6_ = param1.readUTF();
      this.dialogParams.push(_loc6_);
      _loc3_++;
    }
    var _loc4_ = param1.readUnsignedShort();
    var _loc5_ = 0;
    while (_loc5_ < _loc4_) {
      _loc7_ = param1.readVarUhShort();
      if (_loc7_ < 0) {
        throw new Error("Forbidden value (" + _loc7_ + ") on elements of visibleReplies.");
      } else {
        this.visibleReplies.push(_loc7_);
        _loc5_++;
        continue;
      }
    }
    return;
  }
};

NpcDialogQuestionMessage.prototype.getMessageId = function() {
  return 5617;
};

NpcDialogQuestionMessage.prototype.getClassName = function() {
  return 'NpcDialogQuestionMessage';
};

module.exports.id = 5617;
module.exports.class = NpcDialogQuestionMessage;
module.exports.getInstance = function() {
  return new NpcDialogQuestionMessage();
};
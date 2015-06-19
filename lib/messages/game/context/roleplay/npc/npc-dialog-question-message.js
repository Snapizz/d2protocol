var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

NpcDialogQuestionMessage.prototype.serializeAs_NpcDialogQuestionMessage = function(output) {
  if (this.messageId < 0) {
    throw (new Error((("Forbidden value (" + this.messageId) + ") on element messageId.")));
  };
  output.writeVarShort(this.messageId);
  output.writeShort(this.dialogParams.length);
  var _i2;
  while (_i2 < this.dialogParams.length) {
    output.writeUTF(this.dialogParams[_i2]);
    _i2++;
  };
  output.writeShort(this.visibleReplies.length);
  var _i3;
  while (_i3 < this.visibleReplies.length) {
    if (this.visibleReplies[_i3] < 0) {
      throw (new Error((("Forbidden value (" + this.visibleReplies[_i3]) + ") on element 3 (starting at 1) of visibleReplies.")));
    };
    output.writeVarShort(this.visibleReplies[_i3]);
    _i3++;
  };
};

NpcDialogQuestionMessage.prototype.deserializeAs_NpcDialogQuestionMessage = function(input) {
  var _val2;
  var _val3;
  this.messageId = input.readVarUhShort();
  if (this.messageId < 0) {
    throw (new Error((("Forbidden value (" + this.messageId) + ") on element of NpcDialogQuestionMessage.messageId.")));
  };
  var _dialogParamsLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _dialogParamsLen) {
    _val2 = input.readUTF();
    this.dialogParams.push(_val2);
    _i2++;
  };
  var _visibleRepliesLen = input.readUnsignedShort();
  var _i3;
  while (_i3 < _visibleRepliesLen) {
    _val3 = input.readVarUhShort();
    if (_val3 < 0) {
      throw (new Error((("Forbidden value (" + _val3) + ") on elements of visibleReplies.")));
    };
    this.visibleReplies.push(_val3);
    _i3++;
  };
};

NpcDialogQuestionMessage.prototype.getMessageId = function() {
  return 5617;
};

NpcDialogQuestionMessage.prototype.getClassName = function() {
  return 'NpcDialogQuestionMessage';
};

module.exports.id = 5617;
module.exports.class = NpcDialogQuestionMessage;
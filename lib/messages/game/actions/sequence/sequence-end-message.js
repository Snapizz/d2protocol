var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var SequenceEndMessage = function() {
  this.actionId = 0;
  this.authorId = 0;
  this.sequenceType = 0;
};

util.inherits(SequenceEndMessage, BaseMessage);

SequenceEndMessage.prototype.serialize = function(output) {
  this.serializeAs_SequenceEndMessage(output);
};

SequenceEndMessage.prototype.deserialize = function(input) {
  this.deserializeAs_SequenceEndMessage(input);
};

SequenceEndMessage.prototype.serializeAs_SequenceEndMessage = function(param1) {
  if (this.actionId < 0) {
    throw new Error("Forbidden value (" + this.actionId + ") on element actionId.");
  } else {
    param1.writeVarShort(this.actionId);
    param1.writeInt(this.authorId);
    param1.writeByte(this.sequenceType);
    return;
  }
};

SequenceEndMessage.prototype.deserializeAs_SequenceEndMessage = function(param1) {
  this.actionId = param1.readVarUhShort();
  if (this.actionId < 0) {
    throw new Error("Forbidden value (" + this.actionId + ") on element of SequenceEndMessage.actionId.");
  } else {
    this.authorId = param1.readInt();
    this.sequenceType = param1.readByte();
    return;
  }
};

SequenceEndMessage.prototype.getMessageId = function() {
  return 956;
};

SequenceEndMessage.prototype.getClassName = function() {
  return 'SequenceEndMessage';
};

module.exports.id = 956;
module.exports.class = SequenceEndMessage;
var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var SequenceStartMessage = function() {
  this.sequenceType = 0;
  this.authorId = 0;
};

util.inherits(SequenceStartMessage, BaseMessage);

SequenceStartMessage.prototype.serialize = function(output) {
  this.serializeAs_SequenceStartMessage(output);
};

SequenceStartMessage.prototype.deserialize = function(input) {
  this.deserializeAs_SequenceStartMessage(input);
};

SequenceStartMessage.prototype.serializeAs_SequenceStartMessage = function(output) {
  output.writeByte(this.sequenceType);
  output.writeInt(this.authorId);
};

SequenceStartMessage.prototype.deserializeAs_SequenceStartMessage = function(input) {
  this.sequenceType = input.readByte();
  this.authorId = input.readInt();
};

SequenceStartMessage.prototype.getMessageId = function() {
  return 955;
};

SequenceStartMessage.prototype.getClassName = function() {
  return 'SequenceStartMessage';
};

module.exports.id = 955;
module.exports.class = SequenceStartMessage;
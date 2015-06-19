var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var SequenceNumberMessage = function() {
  this.number = 0;
};

util.inherits(SequenceNumberMessage, BaseMessage);

SequenceNumberMessage.prototype.serialize = function(output) {
  this.serializeAs_SequenceNumberMessage(output);
};

SequenceNumberMessage.prototype.deserialize = function(input) {
  this.deserializeAs_SequenceNumberMessage(input);
};

SequenceNumberMessage.prototype.serializeAs_SequenceNumberMessage = function(output) {
  if ((((this.number < 0)) || ((this.number > 0xFFFF)))) {
    throw (new Error((("Forbidden value (" + this.number) + ") on element number.")));
  };
  output.writeShort(this.number);
};

SequenceNumberMessage.prototype.deserializeAs_SequenceNumberMessage = function(input) {
  this.number = input.readUnsignedShort();
  if ((((this.number < 0)) || ((this.number > 0xFFFF)))) {
    throw (new Error((("Forbidden value (" + this.number) + ") on element of SequenceNumberMessage.number.")));
  };
};

SequenceNumberMessage.prototype.getMessageId = function() {
  return 6317;
};

SequenceNumberMessage.prototype.getClassName = function() {
  return 'SequenceNumberMessage';
};

module.exports.id = 6317;
module.exports.class = SequenceNumberMessage;
var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var QueueStatusMessage = function() {
  this.position = 0;
  this.total = 0;
};

util.inherits(QueueStatusMessage, BaseMessage);

QueueStatusMessage.prototype.serialize = function(output) {
  this.serializeAs_QueueStatusMessage(output);
};

QueueStatusMessage.prototype.deserialize = function(input) {
  this.deserializeAs_QueueStatusMessage(input);
};

QueueStatusMessage.prototype.serializeAs_QueueStatusMessage = function(output) {
  if ((((this.position < 0)) || ((this.position > 0xFFFF)))) {
    throw (new Error((("Forbidden value (" + this.position) + ") on element position.")));
  };
  output.writeShort(this.position);
  if ((((this.total < 0)) || ((this.total > 0xFFFF)))) {
    throw (new Error((("Forbidden value (" + this.total) + ") on element total.")));
  };
  output.writeShort(this.total);
};

QueueStatusMessage.prototype.deserializeAs_QueueStatusMessage = function(input) {
  this.position = input.readUnsignedShort();
  if ((((this.position < 0)) || ((this.position > 0xFFFF)))) {
    throw (new Error((("Forbidden value (" + this.position) + ") on element of QueueStatusMessage.position.")));
  };
  this.total = input.readUnsignedShort();
  if ((((this.total < 0)) || ((this.total > 0xFFFF)))) {
    throw (new Error((("Forbidden value (" + this.total) + ") on element of QueueStatusMessage.total.")));
  };
};

QueueStatusMessage.prototype.getMessageId = function() {
  return 6100;
};

QueueStatusMessage.prototype.getClassName = function() {
  return 'QueueStatusMessage';
};

module.exports.id = 6100;
module.exports.class = QueueStatusMessage;
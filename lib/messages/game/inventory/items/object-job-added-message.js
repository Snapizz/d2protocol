var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ObjectJobAddedMessage = function() {
  this.jobId = 0;
};

util.inherits(ObjectJobAddedMessage, BaseMessage);

ObjectJobAddedMessage.prototype.serialize = function(output) {
  this.serializeAs_ObjectJobAddedMessage(output);
};

ObjectJobAddedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectJobAddedMessage(input);
};

ObjectJobAddedMessage.prototype.serializeAs_ObjectJobAddedMessage = function(output) {
  if (this.jobId < 0) {
    throw (new Error((("Forbidden value (" + this.jobId) + ") on element jobId.")));
  };
  output.writeByte(this.jobId);
};

ObjectJobAddedMessage.prototype.deserializeAs_ObjectJobAddedMessage = function(input) {
  this.jobId = input.readByte();
  if (this.jobId < 0) {
    throw (new Error((("Forbidden value (" + this.jobId) + ") on element of ObjectJobAddedMessage.jobId.")));
  };
};

ObjectJobAddedMessage.prototype.getMessageId = function() {
  return 6014;
};

ObjectJobAddedMessage.prototype.getClassName = function() {
  return 'ObjectJobAddedMessage';
};

module.exports.id = 6014;
module.exports.class = ObjectJobAddedMessage;
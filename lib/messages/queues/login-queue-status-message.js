var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var LoginQueueStatusMessage = function() {
  this.position = 0;
  this.total = 0;
};

util.inherits(LoginQueueStatusMessage, BaseMessage);

LoginQueueStatusMessage.prototype.serialize = function(output) {
  this.serializeAs_LoginQueueStatusMessage(output);
};

LoginQueueStatusMessage.prototype.deserialize = function(input) {
  this.deserializeAs_LoginQueueStatusMessage(input);
};

LoginQueueStatusMessage.prototype.serializeAs_LoginQueueStatusMessage = function(output) {
  if ((((this.position < 0)) || ((this.position > 0xFFFF)))) {
    throw (new Error((("Forbidden value (" + this.position) + ") on element position.")));
  };
  output.writeShort(this.position);
  if ((((this.total < 0)) || ((this.total > 0xFFFF)))) {
    throw (new Error((("Forbidden value (" + this.total) + ") on element total.")));
  };
  output.writeShort(this.total);
};

LoginQueueStatusMessage.prototype.deserializeAs_LoginQueueStatusMessage = function(input) {
  this.position = input.readUnsignedShort();
  if ((((this.position < 0)) || ((this.position > 0xFFFF)))) {
    throw (new Error((("Forbidden value (" + this.position) + ") on element of LoginQueueStatusMessage.position.")));
  };
  this.total = input.readUnsignedShort();
  if ((((this.total < 0)) || ((this.total > 0xFFFF)))) {
    throw (new Error((("Forbidden value (" + this.total) + ") on element of LoginQueueStatusMessage.total.")));
  };
};

LoginQueueStatusMessage.prototype.getMessageId = function() {
  return 10;
};

LoginQueueStatusMessage.prototype.getClassName = function() {
  return 'LoginQueueStatusMessage';
};

module.exports.id = 10;
module.exports.class = LoginQueueStatusMessage;
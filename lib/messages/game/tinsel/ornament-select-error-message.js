var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var OrnamentSelectErrorMessage = function() {
  this.reason = 0;
};

util.inherits(OrnamentSelectErrorMessage, BaseMessage);

OrnamentSelectErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_OrnamentSelectErrorMessage(output);
};

OrnamentSelectErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_OrnamentSelectErrorMessage(input);
};

OrnamentSelectErrorMessage.prototype.serializeAs_OrnamentSelectErrorMessage = function(output) {
  output.writeByte(this.reason);
};

OrnamentSelectErrorMessage.prototype.deserializeAs_OrnamentSelectErrorMessage = function(input) {
  this.reason = input.readByte();
  if (this.reason < 0) {
    throw (new Error((("Forbidden value (" + this.reason) + ") on element of OrnamentSelectErrorMessage.reason.")));
  };
};

OrnamentSelectErrorMessage.prototype.getMessageId = function() {
  return 6370;
};

OrnamentSelectErrorMessage.prototype.getClassName = function() {
  return 'OrnamentSelectErrorMessage';
};

module.exports.id = 6370;
module.exports.class = OrnamentSelectErrorMessage;
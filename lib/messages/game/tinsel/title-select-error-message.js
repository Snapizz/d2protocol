var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var TitleSelectErrorMessage = function() {
  this.reason = 0;
};

util.inherits(TitleSelectErrorMessage, BaseMessage);

TitleSelectErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_TitleSelectErrorMessage(output);
};

TitleSelectErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TitleSelectErrorMessage(input);
};

TitleSelectErrorMessage.prototype.serializeAs_TitleSelectErrorMessage = function(output) {
  output.writeByte(this.reason);
};

TitleSelectErrorMessage.prototype.deserializeAs_TitleSelectErrorMessage = function(input) {
  this.reason = input.readByte();
  if (this.reason < 0) {
    throw (new Error((("Forbidden value (" + this.reason) + ") on element of TitleSelectErrorMessage.reason.")));
  };
};

TitleSelectErrorMessage.prototype.getMessageId = function() {
  return 6373;
};

TitleSelectErrorMessage.prototype.getClassName = function() {
  return 'TitleSelectErrorMessage';
};

module.exports.id = 6373;
module.exports.class = TitleSelectErrorMessage;
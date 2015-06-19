var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var MountDataErrorMessage = function() {
  this.reason = 0;
};

util.inherits(MountDataErrorMessage, BaseMessage);

MountDataErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_MountDataErrorMessage(output);
};

MountDataErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MountDataErrorMessage(input);
};

MountDataErrorMessage.prototype.serializeAs_MountDataErrorMessage = function(output) {
  output.writeByte(this.reason);
};

MountDataErrorMessage.prototype.deserializeAs_MountDataErrorMessage = function(input) {
  this.reason = input.readByte();
  if (this.reason < 0) {
    throw (new Error((("Forbidden value (" + this.reason) + ") on element of MountDataErrorMessage.reason.")));
  };
};

MountDataErrorMessage.prototype.getMessageId = function() {
  return 6172;
};

MountDataErrorMessage.prototype.getClassName = function() {
  return 'MountDataErrorMessage';
};

module.exports.id = 6172;
module.exports.class = MountDataErrorMessage;
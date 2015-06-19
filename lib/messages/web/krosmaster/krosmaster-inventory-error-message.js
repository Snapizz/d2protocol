var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var KrosmasterInventoryErrorMessage = function() {
  this.reason = 0;
};

util.inherits(KrosmasterInventoryErrorMessage, BaseMessage);

KrosmasterInventoryErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_KrosmasterInventoryErrorMessage(output);
};

KrosmasterInventoryErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_KrosmasterInventoryErrorMessage(input);
};

KrosmasterInventoryErrorMessage.prototype.serializeAs_KrosmasterInventoryErrorMessage = function(output) {
  output.writeByte(this.reason);
};

KrosmasterInventoryErrorMessage.prototype.deserializeAs_KrosmasterInventoryErrorMessage = function(input) {
  this.reason = input.readByte();
  if (this.reason < 0) {
    throw (new Error((("Forbidden value (" + this.reason) + ") on element of KrosmasterInventoryErrorMessage.reason.")));
  };
};

KrosmasterInventoryErrorMessage.prototype.getMessageId = function() {
  return 6343;
};

KrosmasterInventoryErrorMessage.prototype.getClassName = function() {
  return 'KrosmasterInventoryErrorMessage';
};

module.exports.id = 6343;
module.exports.class = KrosmasterInventoryErrorMessage;
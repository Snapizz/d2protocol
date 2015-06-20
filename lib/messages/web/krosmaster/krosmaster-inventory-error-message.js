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

KrosmasterInventoryErrorMessage.prototype.serializeAs_KrosmasterInventoryErrorMessage = function(param1) {
  param1.writeByte(this.reason);
};

KrosmasterInventoryErrorMessage.prototype.deserializeAs_KrosmasterInventoryErrorMessage = function(param1) {
  this.reason = param1.readByte();
  if (this.reason < 0) {
    throw new Error("Forbidden value (" + this.reason + ") on element of KrosmasterInventoryErrorMessage.reason.");
  } else {
    return;
  }
};

KrosmasterInventoryErrorMessage.prototype.getMessageId = function() {
  return 6343;
};

KrosmasterInventoryErrorMessage.prototype.getClassName = function() {
  return 'KrosmasterInventoryErrorMessage';
};

module.exports.id = 6343;
module.exports.class = KrosmasterInventoryErrorMessage;
module.exports.getInstance = function() {
  return new KrosmasterInventoryErrorMessage();
};
var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AcquaintanceSearchErrorMessage = function() {
  this.reason = 0;
};

util.inherits(AcquaintanceSearchErrorMessage, BaseMessage);

AcquaintanceSearchErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_AcquaintanceSearchErrorMessage(output);
};

AcquaintanceSearchErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AcquaintanceSearchErrorMessage(input);
};

AcquaintanceSearchErrorMessage.prototype.serializeAs_AcquaintanceSearchErrorMessage = function(param1) {
  param1.writeByte(this.reason);
};

AcquaintanceSearchErrorMessage.prototype.deserializeAs_AcquaintanceSearchErrorMessage = function(param1) {
  this.reason = param1.readByte();
  if (this.reason < 0) {
    throw new Error("Forbidden value (" + this.reason + ") on element of AcquaintanceSearchErrorMessage.reason.");
  } else {
    return;
  }
};

AcquaintanceSearchErrorMessage.prototype.getMessageId = function() {
  return 6143;
};

AcquaintanceSearchErrorMessage.prototype.getClassName = function() {
  return 'AcquaintanceSearchErrorMessage';
};

module.exports.id = 6143;
module.exports.class = AcquaintanceSearchErrorMessage;
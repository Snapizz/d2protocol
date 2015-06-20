var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AcquaintanceSearchMessage = function() {
  this.nickname = "";
};

util.inherits(AcquaintanceSearchMessage, BaseMessage);

AcquaintanceSearchMessage.prototype.serialize = function(output) {
  this.serializeAs_AcquaintanceSearchMessage(output);
};

AcquaintanceSearchMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AcquaintanceSearchMessage(input);
};

AcquaintanceSearchMessage.prototype.serializeAs_AcquaintanceSearchMessage = function(output) {
  param1.writeUTF(this.nickname);
};

AcquaintanceSearchMessage.prototype.deserializeAs_AcquaintanceSearchMessage = function(input) {
  this.nickname = param1.readUTF();
};

AcquaintanceSearchMessage.prototype.getMessageId = function() {
  return 6144;
};

AcquaintanceSearchMessage.prototype.getClassName = function() {
  return 'AcquaintanceSearchMessage';
};

module.exports.id = 6144;
module.exports.class = AcquaintanceSearchMessage;
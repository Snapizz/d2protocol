var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AccountLoggingKickedMessage = function() {
  this.days = 0;
  this.hours = 0;
  this.minutes = 0;
};

util.inherits(AccountLoggingKickedMessage, BaseMessage);

AccountLoggingKickedMessage.prototype.serialize = function(output) {
  this.serializeAs_AccountLoggingKickedMessage(output);
};

AccountLoggingKickedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AccountLoggingKickedMessage(input);
};

AccountLoggingKickedMessage.prototype.serializeAs_AccountLoggingKickedMessage = function(output) {
  if (this.days < 0) {
    throw (new Error((("Forbidden value (" + this.days) + ") on element days.")));
  };
  output.writeVarShort(this.days);
  if (this.hours < 0) {
    throw (new Error((("Forbidden value (" + this.hours) + ") on element hours.")));
  };
  output.writeByte(this.hours);
  if (this.minutes < 0) {
    throw (new Error((("Forbidden value (" + this.minutes) + ") on element minutes.")));
  };
  output.writeByte(this.minutes);
};

AccountLoggingKickedMessage.prototype.deserializeAs_AccountLoggingKickedMessage = function(input) {
  this.days = input.readVarUhShort();
  if (this.days < 0) {
    throw (new Error((("Forbidden value (" + this.days) + ") on element of AccountLoggingKickedMessage.days.")));
  };
  this.hours = input.readByte();
  if (this.hours < 0) {
    throw (new Error((("Forbidden value (" + this.hours) + ") on element of AccountLoggingKickedMessage.hours.")));
  };
  this.minutes = input.readByte();
  if (this.minutes < 0) {
    throw (new Error((("Forbidden value (" + this.minutes) + ") on element of AccountLoggingKickedMessage.minutes.")));
  };
};

AccountLoggingKickedMessage.prototype.getMessageId = function() {
  return 6029;
};

AccountLoggingKickedMessage.prototype.getClassName = function() {
  return 'AccountLoggingKickedMessage';
};

module.exports.id = 6029;
module.exports.class = AccountLoggingKickedMessage;
var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

AccountLoggingKickedMessage.prototype.serializeAs_AccountLoggingKickedMessage = function(param1) {
  if (this.days < 0) {
    throw new Error("Forbidden value (" + this.days + ") on element days.");
  } else {
    param1.writeVarShort(this.days);
    if (this.hours < 0) {
      throw new Error("Forbidden value (" + this.hours + ") on element hours.");
    } else {
      param1.writeByte(this.hours);
      if (this.minutes < 0) {
        throw new Error("Forbidden value (" + this.minutes + ") on element minutes.");
      } else {
        param1.writeByte(this.minutes);
        return;
      }
    }
  }
};

AccountLoggingKickedMessage.prototype.deserializeAs_AccountLoggingKickedMessage = function(param1) {
  this.days = param1.readVarUhShort();
  if (this.days < 0) {
    throw new Error("Forbidden value (" + this.days + ") on element of AccountLoggingKickedMessage.days.");
  } else {
    this.hours = param1.readByte();
    if (this.hours < 0) {
      throw new Error("Forbidden value (" + this.hours + ") on element of AccountLoggingKickedMessage.hours.");
    } else {
      this.minutes = param1.readByte();
      if (this.minutes < 0) {
        throw new Error("Forbidden value (" + this.minutes + ") on element of AccountLoggingKickedMessage.minutes.");
      } else {
        return;
      }
    }
  }
};

AccountLoggingKickedMessage.prototype.getMessageId = function() {
  return 6029;
};

AccountLoggingKickedMessage.prototype.getClassName = function() {
  return 'AccountLoggingKickedMessage';
};

module.exports.id = 6029;
module.exports.class = AccountLoggingKickedMessage;
module.exports.getInstance = function() {
  return new AccountLoggingKickedMessage();
};
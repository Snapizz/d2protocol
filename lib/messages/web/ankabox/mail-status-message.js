var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var MailStatusMessage = function() {
  this.unread = 0;
  this.total = 0;
};

util.inherits(MailStatusMessage, BaseMessage);

MailStatusMessage.prototype.serialize = function(output) {
  this.serializeAs_MailStatusMessage(output);
};

MailStatusMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MailStatusMessage(input);
};

MailStatusMessage.prototype.serializeAs_MailStatusMessage = function(param1) {
  if (this.unread < 0) {
    throw new Error("Forbidden value (" + this.unread + ") on element unread.");
  } else {
    param1.writeVarShort(this.unread);
    if (this.total < 0) {
      throw new Error("Forbidden value (" + this.total + ") on element total.");
    } else {
      param1.writeVarShort(this.total);
      return;
    }
  }
};

MailStatusMessage.prototype.deserializeAs_MailStatusMessage = function(param1) {
  this.unread = param1.readVarUhShort();
  if (this.unread < 0) {
    throw new Error("Forbidden value (" + this.unread + ") on element of MailStatusMessage.unread.");
  } else {
    this.total = param1.readVarUhShort();
    if (this.total < 0) {
      throw new Error("Forbidden value (" + this.total + ") on element of MailStatusMessage.total.");
    } else {
      return;
    }
  }
};

MailStatusMessage.prototype.getMessageId = function() {
  return 6275;
};

MailStatusMessage.prototype.getClassName = function() {
  return 'MailStatusMessage';
};

module.exports.id = 6275;
module.exports.class = MailStatusMessage;
module.exports.getInstance = function() {
  return new MailStatusMessage();
};
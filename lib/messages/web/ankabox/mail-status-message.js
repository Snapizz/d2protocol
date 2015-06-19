var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

MailStatusMessage.prototype.serializeAs_MailStatusMessage = function(output) {
  if (this.unread < 0) {
    throw (new Error((("Forbidden value (" + this.unread) + ") on element unread.")));
  };
  output.writeVarShort(this.unread);
  if (this.total < 0) {
    throw (new Error((("Forbidden value (" + this.total) + ") on element total.")));
  };
  output.writeVarShort(this.total);
};

MailStatusMessage.prototype.deserializeAs_MailStatusMessage = function(input) {
  this.unread = input.readVarUhShort();
  if (this.unread < 0) {
    throw (new Error((("Forbidden value (" + this.unread) + ") on element of MailStatusMessage.unread.")));
  };
  this.total = input.readVarUhShort();
  if (this.total < 0) {
    throw (new Error((("Forbidden value (" + this.total) + ") on element of MailStatusMessage.total.")));
  };
};

MailStatusMessage.prototype.getMessageId = function() {
  return 6275;
};

MailStatusMessage.prototype.getClassName = function() {
  return 'MailStatusMessage';
};

module.exports.id = 6275;
module.exports.class = MailStatusMessage;
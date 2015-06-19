var d2com = require('d2com'),
  BaseMessage = require('./identification-failed-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var IdentificationFailedBannedMessage = function() {
  this.banEndDate = 0;
};

util.inherits(IdentificationFailedBannedMessage, BaseMessage);

IdentificationFailedBannedMessage.prototype.serialize = function(output) {
  this.serializeAs_IdentificationFailedBannedMessage(output);
};

IdentificationFailedBannedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_IdentificationFailedBannedMessage(input);
};

IdentificationFailedBannedMessage.prototype.serializeAs_IdentificationFailedBannedMessage = function(output) {
  this.serializeAs_IdentificationFailedMessage(output);
  if ((((this.banEndDate < 0)) || ((this.banEndDate > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.banEndDate) + ") on element banEndDate.")));
  };
  output.writeDouble(this.banEndDate);
};

IdentificationFailedBannedMessage.prototype.deserializeAs_IdentificationFailedBannedMessage = function(input) {
  this.deserialize(input);
  this.banEndDate = input.readDouble();
  if ((((this.banEndDate < 0)) || ((this.banEndDate > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.banEndDate) + ") on element of IdentificationFailedBannedMessage.banEndDate.")));
  };
};

IdentificationFailedBannedMessage.prototype.getMessageId = function() {
  return 6174;
};

IdentificationFailedBannedMessage.prototype.getClassName = function() {
  return 'IdentificationFailedBannedMessage';
};

module.exports.id = 6174;
module.exports.class = IdentificationFailedBannedMessage;
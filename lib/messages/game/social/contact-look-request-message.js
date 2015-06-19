var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ContactLookRequestMessage = function() {
  this.requestId = 0;
  this.contactType = 0;
};

util.inherits(ContactLookRequestMessage, BaseMessage);

ContactLookRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_ContactLookRequestMessage(output);
};

ContactLookRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ContactLookRequestMessage(input);
};

ContactLookRequestMessage.prototype.serializeAs_ContactLookRequestMessage = function(output) {
  if ((((this.requestId < 0)) || ((this.requestId > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.requestId) + ") on element requestId.")));
  };
  output.writeByte(this.requestId);
  output.writeByte(this.contactType);
};

ContactLookRequestMessage.prototype.deserializeAs_ContactLookRequestMessage = function(input) {
  this.requestId = input.readUnsignedByte();
  if ((((this.requestId < 0)) || ((this.requestId > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.requestId) + ") on element of ContactLookRequestMessage.requestId.")));
  };
  this.contactType = input.readByte();
  if (this.contactType < 0) {
    throw (new Error((("Forbidden value (" + this.contactType) + ") on element of ContactLookRequestMessage.contactType.")));
  };
};

ContactLookRequestMessage.prototype.getMessageId = function() {
  return 5932;
};

ContactLookRequestMessage.prototype.getClassName = function() {
  return 'ContactLookRequestMessage';
};

module.exports.id = 5932;
module.exports.class = ContactLookRequestMessage;
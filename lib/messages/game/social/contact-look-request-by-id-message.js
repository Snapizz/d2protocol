var d2com = require('d2com'),
  BaseMessage = require('./contact-look-request-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ContactLookRequestByIdMessage = function() {
  this.playerId = 0;
};

util.inherits(ContactLookRequestByIdMessage, BaseMessage);

ContactLookRequestByIdMessage.prototype.serialize = function(output) {
  this.serializeAs_ContactLookRequestByIdMessage(output);
};

ContactLookRequestByIdMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ContactLookRequestByIdMessage(input);
};

ContactLookRequestByIdMessage.prototype.serializeAs_ContactLookRequestByIdMessage = function(output) {
  this.serializeAs_ContactLookRequestMessage(output);
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element playerId.")));
  };
  output.writeVarInt(this.playerId);
};

ContactLookRequestByIdMessage.prototype.deserializeAs_ContactLookRequestByIdMessage = function(input) {
  this.deserialize(input);
  this.playerId = input.readVarUhInt();
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element of ContactLookRequestByIdMessage.playerId.")));
  };
};

ContactLookRequestByIdMessage.prototype.getMessageId = function() {
  return 5935;
};

ContactLookRequestByIdMessage.prototype.getClassName = function() {
  return 'ContactLookRequestByIdMessage';
};

module.exports.id = 5935;
module.exports.class = ContactLookRequestByIdMessage;
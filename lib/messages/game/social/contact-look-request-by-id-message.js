var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
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
  this.serializeAs_ContactLookRequestMessage(param1);
  if (this.playerId < 0) {
    throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
  } else {
    param1.writeVarInt(this.playerId);
    return;
  }
};

ContactLookRequestByIdMessage.prototype.deserializeAs_ContactLookRequestByIdMessage = function(input) {
  this.deserialize(param1);
  this.playerId = param1.readVarUhInt();
  if (this.playerId < 0) {
    throw new Error("Forbidden value (" + this.playerId + ") on element of ContactLookRequestByIdMessage.playerId.");
  } else {
    return;
  }
};

ContactLookRequestByIdMessage.prototype.getMessageId = function() {
  return 5935;
};

ContactLookRequestByIdMessage.prototype.getClassName = function() {
  return 'ContactLookRequestByIdMessage';
};

module.exports.id = 5935;
module.exports.class = ContactLookRequestByIdMessage;
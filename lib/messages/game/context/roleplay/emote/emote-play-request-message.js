var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var EmotePlayRequestMessage = function() {
  this.emoteId = 0;
};

util.inherits(EmotePlayRequestMessage, BaseMessage);

EmotePlayRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_EmotePlayRequestMessage(output);
};

EmotePlayRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_EmotePlayRequestMessage(input);
};

EmotePlayRequestMessage.prototype.serializeAs_EmotePlayRequestMessage = function(param1) {
  if (this.emoteId < 0 || this.emoteId > 255) {
    throw new Error("Forbidden value (" + this.emoteId + ") on element emoteId.");
  } else {
    param1.writeByte(this.emoteId);
    return;
  }
};

EmotePlayRequestMessage.prototype.deserializeAs_EmotePlayRequestMessage = function(param1) {
  this.emoteId = param1.readUnsignedByte();
  if (this.emoteId < 0 || this.emoteId > 255) {
    throw new Error("Forbidden value (" + this.emoteId + ") on element of EmotePlayRequestMessage.emoteId.");
  } else {
    return;
  }
};

EmotePlayRequestMessage.prototype.getMessageId = function() {
  return 5685;
};

EmotePlayRequestMessage.prototype.getClassName = function() {
  return 'EmotePlayRequestMessage';
};

module.exports.id = 5685;
module.exports.class = EmotePlayRequestMessage;
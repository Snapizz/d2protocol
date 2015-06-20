var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var EmoteAddMessage = function() {
  this.emoteId = 0;
};

util.inherits(EmoteAddMessage, BaseMessage);

EmoteAddMessage.prototype.serialize = function(output) {
  this.serializeAs_EmoteAddMessage(output);
};

EmoteAddMessage.prototype.deserialize = function(input) {
  this.deserializeAs_EmoteAddMessage(input);
};

EmoteAddMessage.prototype.serializeAs_EmoteAddMessage = function(param1) {
  if (this.emoteId < 0 || this.emoteId > 255) {
    throw new Error("Forbidden value (" + this.emoteId + ") on element emoteId.");
  } else {
    param1.writeByte(this.emoteId);
    return;
  }
};

EmoteAddMessage.prototype.deserializeAs_EmoteAddMessage = function(param1) {
  this.emoteId = param1.readUnsignedByte();
  if (this.emoteId < 0 || this.emoteId > 255) {
    throw new Error("Forbidden value (" + this.emoteId + ") on element of EmoteAddMessage.emoteId.");
  } else {
    return;
  }
};

EmoteAddMessage.prototype.getMessageId = function() {
  return 5644;
};

EmoteAddMessage.prototype.getClassName = function() {
  return 'EmoteAddMessage';
};

module.exports.id = 5644;
module.exports.class = EmoteAddMessage;
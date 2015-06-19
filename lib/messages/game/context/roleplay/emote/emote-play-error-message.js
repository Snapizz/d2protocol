var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var EmotePlayErrorMessage = function() {
  this.emoteId = 0;
};

util.inherits(EmotePlayErrorMessage, BaseMessage);

EmotePlayErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_EmotePlayErrorMessage(output);
};

EmotePlayErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_EmotePlayErrorMessage(input);
};

EmotePlayErrorMessage.prototype.serializeAs_EmotePlayErrorMessage = function(output) {
  if ((((this.emoteId < 0)) || ((this.emoteId > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.emoteId) + ") on element emoteId.")));
  };
  output.writeByte(this.emoteId);
};

EmotePlayErrorMessage.prototype.deserializeAs_EmotePlayErrorMessage = function(input) {
  this.emoteId = input.readUnsignedByte();
  if ((((this.emoteId < 0)) || ((this.emoteId > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.emoteId) + ") on element of EmotePlayErrorMessage.emoteId.")));
  };
};

EmotePlayErrorMessage.prototype.getMessageId = function() {
  return 5688;
};

EmotePlayErrorMessage.prototype.getClassName = function() {
  return 'EmotePlayErrorMessage';
};

module.exports.id = 5688;
module.exports.class = EmotePlayErrorMessage;
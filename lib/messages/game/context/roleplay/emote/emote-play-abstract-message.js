var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var EmotePlayAbstractMessage = function() {
  this.emoteId = 0;
  this.emoteStartTime = 0;
};

util.inherits(EmotePlayAbstractMessage, BaseMessage);

EmotePlayAbstractMessage.prototype.serialize = function(output) {
  this.serializeAs_EmotePlayAbstractMessage(output);
};

EmotePlayAbstractMessage.prototype.deserialize = function(input) {
  this.deserializeAs_EmotePlayAbstractMessage(input);
};

EmotePlayAbstractMessage.prototype.serializeAs_EmotePlayAbstractMessage = function(output) {
  if ((((this.emoteId < 0)) || ((this.emoteId > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.emoteId) + ") on element emoteId.")));
  };
  output.writeByte(this.emoteId);
  if ((((this.emoteStartTime < -9007199254740992)) || ((this.emoteStartTime > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.emoteStartTime) + ") on element emoteStartTime.")));
  };
  output.writeDouble(this.emoteStartTime);
};

EmotePlayAbstractMessage.prototype.deserializeAs_EmotePlayAbstractMessage = function(input) {
  this.emoteId = input.readUnsignedByte();
  if ((((this.emoteId < 0)) || ((this.emoteId > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.emoteId) + ") on element of EmotePlayAbstractMessage.emoteId.")));
  };
  this.emoteStartTime = input.readDouble();
  if ((((this.emoteStartTime < -9007199254740992)) || ((this.emoteStartTime > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.emoteStartTime) + ") on element of EmotePlayAbstractMessage.emoteStartTime.")));
  };
};

EmotePlayAbstractMessage.prototype.getMessageId = function() {
  return 5690;
};

EmotePlayAbstractMessage.prototype.getClassName = function() {
  return 'EmotePlayAbstractMessage';
};

module.exports.id = 5690;
module.exports.class = EmotePlayAbstractMessage;
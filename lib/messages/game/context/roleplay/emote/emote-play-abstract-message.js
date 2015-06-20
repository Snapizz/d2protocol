var d2com = require('d2com'),
  BaseMessage = require('./emote-play-abstract-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

EmotePlayAbstractMessage.prototype.serializeAs_EmotePlayAbstractMessage = function(param1) {
  if (this.emoteId < 0 || this.emoteId > 255) {
    throw new Error("Forbidden value (" + this.emoteId + ") on element emoteId.");
  } else {
    param1.writeByte(this.emoteId);
    if (this.emoteStartTime < -9.007199254740992E15 || this.emoteStartTime > 9.007199254740992E15) {
      throw new Error("Forbidden value (" + this.emoteStartTime + ") on element emoteStartTime.");
    } else {
      param1.writeDouble(this.emoteStartTime);
      return;
    }
  }
};

EmotePlayAbstractMessage.prototype.deserializeAs_EmotePlayAbstractMessage = function(param1) {
  this.emoteId = param1.readUnsignedByte();
  if (this.emoteId < 0 || this.emoteId > 255) {
    throw new Error("Forbidden value (" + this.emoteId + ") on element of EmotePlayAbstractMessage.emoteId.");
  } else {
    this.emoteStartTime = param1.readDouble();
    if (this.emoteStartTime < -9.007199254740992E15 || this.emoteStartTime > 9.007199254740992E15) {
      throw new Error("Forbidden value (" + this.emoteStartTime + ") on element of EmotePlayAbstractMessage.emoteStartTime.");
    } else {
      return;
    }
  }
};

EmotePlayAbstractMessage.prototype.getMessageId = function() {
  return 5690;
};

EmotePlayAbstractMessage.prototype.getClassName = function() {
  return 'EmotePlayAbstractMessage';
};

module.exports.id = 5690;
module.exports.class = EmotePlayAbstractMessage;
module.exports.getInstance = function() {
  return new EmotePlayAbstractMessage();
};
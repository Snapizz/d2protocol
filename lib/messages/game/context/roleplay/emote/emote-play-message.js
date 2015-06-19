var d2com = require('d2com'),
  BaseMessage = require('./emote-play-abstract-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var EmotePlayMessage = function() {
  this.actorId = 0;
  this.accountId = 0;
};

util.inherits(EmotePlayMessage, BaseMessage);

EmotePlayMessage.prototype.serialize = function(output) {
  this.serializeAs_EmotePlayMessage(output);
};

EmotePlayMessage.prototype.deserialize = function(input) {
  this.deserializeAs_EmotePlayMessage(input);
};

EmotePlayMessage.prototype.serializeAs_EmotePlayMessage = function(output) {
  this.serializeAs_EmotePlayAbstractMessage(output);
  output.writeInt(this.actorId);
  if (this.accountId < 0) {
    throw (new Error((("Forbidden value (" + this.accountId) + ") on element accountId.")));
  };
  output.writeInt(this.accountId);
};

EmotePlayMessage.prototype.deserializeAs_EmotePlayMessage = function(input) {
  this.deserialize(input);
  this.actorId = input.readInt();
  this.accountId = input.readInt();
  if (this.accountId < 0) {
    throw (new Error((("Forbidden value (" + this.accountId) + ") on element of EmotePlayMessage.accountId.")));
  };
};

EmotePlayMessage.prototype.getMessageId = function() {
  return 5683;
};

EmotePlayMessage.prototype.getClassName = function() {
  return 'EmotePlayMessage';
};

module.exports.id = 5683;
module.exports.class = EmotePlayMessage;
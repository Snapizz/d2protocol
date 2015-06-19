var d2com = require('d2com'),
  BaseMessage = require('./character-replay-request-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var CharacterReplayWithRelookRequestMessage = function() {
  this.cosmeticId = 0;
};

util.inherits(CharacterReplayWithRelookRequestMessage, BaseMessage);

CharacterReplayWithRelookRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_CharacterReplayWithRelookRequestMessage(output);
};

CharacterReplayWithRelookRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterReplayWithRelookRequestMessage(input);
};

CharacterReplayWithRelookRequestMessage.prototype.serializeAs_CharacterReplayWithRelookRequestMessage = function(output) {
  this.serializeAs_CharacterReplayRequestMessage(output);
  if (this.cosmeticId < 0) {
    throw (new Error((("Forbidden value (" + this.cosmeticId) + ") on element cosmeticId.")));
  };
  output.writeInt(this.cosmeticId);
};

CharacterReplayWithRelookRequestMessage.prototype.deserializeAs_CharacterReplayWithRelookRequestMessage = function(input) {
  this.deserialize(input);
  this.cosmeticId = input.readInt();
  if (this.cosmeticId < 0) {
    throw (new Error((("Forbidden value (" + this.cosmeticId) + ") on element of CharacterReplayWithRelookRequestMessage.cosmeticId.")));
  };
};

CharacterReplayWithRelookRequestMessage.prototype.getMessageId = function() {
  return 6354;
};

CharacterReplayWithRelookRequestMessage.prototype.getClassName = function() {
  return 'CharacterReplayWithRelookRequestMessage';
};

module.exports.id = 6354;
module.exports.class = CharacterReplayWithRelookRequestMessage;
var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var CharacterReplayRequestMessage = function() {
  this.characterId = 0;
};

util.inherits(CharacterReplayRequestMessage, BaseMessage);

CharacterReplayRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_CharacterReplayRequestMessage(output);
};

CharacterReplayRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterReplayRequestMessage(input);
};

CharacterReplayRequestMessage.prototype.serializeAs_CharacterReplayRequestMessage = function(output) {
  if (this.characterId < 0) {
    throw (new Error((("Forbidden value (" + this.characterId) + ") on element characterId.")));
  };
  output.writeInt(this.characterId);
};

CharacterReplayRequestMessage.prototype.deserializeAs_CharacterReplayRequestMessage = function(input) {
  this.characterId = input.readInt();
  if (this.characterId < 0) {
    throw (new Error((("Forbidden value (" + this.characterId) + ") on element of CharacterReplayRequestMessage.characterId.")));
  };
};

CharacterReplayRequestMessage.prototype.getMessageId = function() {
  return 167;
};

CharacterReplayRequestMessage.prototype.getClassName = function() {
  return 'CharacterReplayRequestMessage';
};

module.exports.id = 167;
module.exports.class = CharacterReplayRequestMessage;
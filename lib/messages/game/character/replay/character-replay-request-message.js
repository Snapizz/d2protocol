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

CharacterReplayRequestMessage.prototype.serializeAs_CharacterReplayRequestMessage = function(param1) {
  if (this.characterId < 0) {
    throw new Error("Forbidden value (" + this.characterId + ") on element characterId.");
  } else {
    param1.writeInt(this.characterId);
    return;
  }
};

CharacterReplayRequestMessage.prototype.deserializeAs_CharacterReplayRequestMessage = function(param1) {
  this.characterId = param1.readInt();
  if (this.characterId < 0) {
    throw new Error("Forbidden value (" + this.characterId + ") on element of CharacterReplayRequestMessage.characterId.");
  } else {
    return;
  }
};

CharacterReplayRequestMessage.prototype.getMessageId = function() {
  return 167;
};

CharacterReplayRequestMessage.prototype.getClassName = function() {
  return 'CharacterReplayRequestMessage';
};

module.exports.id = 167;
module.exports.class = CharacterReplayRequestMessage;
module.exports.getInstance = function() {
  return new CharacterReplayRequestMessage();
};
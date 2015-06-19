var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var CharacterDeletionRequestMessage = function() {
  this.characterId = 0;
  this.secretAnswerHash = "";
};

util.inherits(CharacterDeletionRequestMessage, BaseMessage);

CharacterDeletionRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_CharacterDeletionRequestMessage(output);
};

CharacterDeletionRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterDeletionRequestMessage(input);
};

CharacterDeletionRequestMessage.prototype.serializeAs_CharacterDeletionRequestMessage = function(output) {
  if (this.characterId < 0) {
    throw (new Error((("Forbidden value (" + this.characterId) + ") on element characterId.")));
  };
  output.writeInt(this.characterId);
  output.writeUTF(this.secretAnswerHash);
};

CharacterDeletionRequestMessage.prototype.deserializeAs_CharacterDeletionRequestMessage = function(input) {
  this.characterId = input.readInt();
  if (this.characterId < 0) {
    throw (new Error((("Forbidden value (" + this.characterId) + ") on element of CharacterDeletionRequestMessage.characterId.")));
  };
  this.secretAnswerHash = input.readUTF();
};

CharacterDeletionRequestMessage.prototype.getMessageId = function() {
  return 165;
};

CharacterDeletionRequestMessage.prototype.getClassName = function() {
  return 'CharacterDeletionRequestMessage';
};

module.exports.id = 165;
module.exports.class = CharacterDeletionRequestMessage;
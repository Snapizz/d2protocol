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

CharacterDeletionRequestMessage.prototype.serializeAs_CharacterDeletionRequestMessage = function(param1) {
  if (this.characterId < 0) {
    throw new Error("Forbidden value (" + this.characterId + ") on element characterId.");
  } else {
    param1.writeInt(this.characterId);
    param1.writeUTF(this.secretAnswerHash);
    return;
  }
};

CharacterDeletionRequestMessage.prototype.deserializeAs_CharacterDeletionRequestMessage = function(param1) {
  this.characterId = param1.readInt();
  if (this.characterId < 0) {
    throw new Error("Forbidden value (" + this.characterId + ") on element of CharacterDeletionRequestMessage.characterId.");
  } else {
    this.secretAnswerHash = param1.readUTF();
    return;
  }
};

CharacterDeletionRequestMessage.prototype.getMessageId = function() {
  return 165;
};

CharacterDeletionRequestMessage.prototype.getClassName = function() {
  return 'CharacterDeletionRequestMessage';
};

module.exports.id = 165;
module.exports.class = CharacterDeletionRequestMessage;
module.exports.getInstance = function() {
  return new CharacterDeletionRequestMessage();
};
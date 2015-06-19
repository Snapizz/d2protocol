var d2com = require('d2com'),
  BaseMessage = require('./character-level-up-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var CharacterLevelUpInformationMessage = function() {
  this.name = "";
  this.id = 0;
};

util.inherits(CharacterLevelUpInformationMessage, BaseMessage);

CharacterLevelUpInformationMessage.prototype.serialize = function(output) {
  this.serializeAs_CharacterLevelUpInformationMessage(output);
};

CharacterLevelUpInformationMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterLevelUpInformationMessage(input);
};

CharacterLevelUpInformationMessage.prototype.serializeAs_CharacterLevelUpInformationMessage = function(output) {
  this.serializeAs_CharacterLevelUpMessage(output);
  output.writeUTF(this.name);
  if (this.id < 0) {
    throw (new Error((("Forbidden value (" + this.id) + ") on element id.")));
  };
  output.writeVarInt(this.id);
};

CharacterLevelUpInformationMessage.prototype.deserializeAs_CharacterLevelUpInformationMessage = function(input) {
  this.deserialize(input);
  this.name = input.readUTF();
  this.id = input.readVarUhInt();
  if (this.id < 0) {
    throw (new Error((("Forbidden value (" + this.id) + ") on element of CharacterLevelUpInformationMessage.id.")));
  };
};

CharacterLevelUpInformationMessage.prototype.getMessageId = function() {
  return 6076;
};

CharacterLevelUpInformationMessage.prototype.getClassName = function() {
  return 'CharacterLevelUpInformationMessage';
};

module.exports.id = 6076;
module.exports.class = CharacterLevelUpInformationMessage;
var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var CharacterNameSuggestionSuccessMessage = function() {
  this.suggestion = "";
};

util.inherits(CharacterNameSuggestionSuccessMessage, BaseMessage);

CharacterNameSuggestionSuccessMessage.prototype.serialize = function(output) {
  this.serializeAs_CharacterNameSuggestionSuccessMessage(output);
};

CharacterNameSuggestionSuccessMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterNameSuggestionSuccessMessage(input);
};

CharacterNameSuggestionSuccessMessage.prototype.serializeAs_CharacterNameSuggestionSuccessMessage = function(param1) {
  param1.writeUTF(this.suggestion);
};

CharacterNameSuggestionSuccessMessage.prototype.deserializeAs_CharacterNameSuggestionSuccessMessage = function(param1) {
  this.suggestion = param1.readUTF();
};

CharacterNameSuggestionSuccessMessage.prototype.getMessageId = function() {
  return 5544;
};

CharacterNameSuggestionSuccessMessage.prototype.getClassName = function() {
  return 'CharacterNameSuggestionSuccessMessage';
};

module.exports.id = 5544;
module.exports.class = CharacterNameSuggestionSuccessMessage;
module.exports.getInstance = function() {
  return new CharacterNameSuggestionSuccessMessage();
};
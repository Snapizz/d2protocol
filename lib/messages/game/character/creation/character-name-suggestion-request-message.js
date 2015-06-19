var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var CharacterNameSuggestionRequestMessage = function() {

};

util.inherits(CharacterNameSuggestionRequestMessage, BaseMessage);

CharacterNameSuggestionRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_CharacterNameSuggestionRequestMessage(output);
};

CharacterNameSuggestionRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterNameSuggestionRequestMessage(input);
};

CharacterNameSuggestionRequestMessage.prototype.serializeAs_CharacterNameSuggestionRequestMessage = function(output) {

};

CharacterNameSuggestionRequestMessage.prototype.deserializeAs_CharacterNameSuggestionRequestMessage = function(input) {

};

CharacterNameSuggestionRequestMessage.prototype.getMessageId = function() {
  return 162;
};

CharacterNameSuggestionRequestMessage.prototype.getClassName = function() {
  return 'CharacterNameSuggestionRequestMessage';
};

module.exports.id = 162;
module.exports.class = CharacterNameSuggestionRequestMessage;
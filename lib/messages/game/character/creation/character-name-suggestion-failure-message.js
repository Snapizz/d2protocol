var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var CharacterNameSuggestionFailureMessage = function() {
  this.reason = 1;
};

util.inherits(CharacterNameSuggestionFailureMessage, BaseMessage);

CharacterNameSuggestionFailureMessage.prototype.serialize = function(output) {
  this.serializeAs_CharacterNameSuggestionFailureMessage(output);
};

CharacterNameSuggestionFailureMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterNameSuggestionFailureMessage(input);
};

CharacterNameSuggestionFailureMessage.prototype.serializeAs_CharacterNameSuggestionFailureMessage = function(output) {
  output.writeByte(this.reason);
};

CharacterNameSuggestionFailureMessage.prototype.deserializeAs_CharacterNameSuggestionFailureMessage = function(input) {
  this.reason = input.readByte();
  if (this.reason < 0) {
    throw (new Error((("Forbidden value (" + this.reason) + ") on element of CharacterNameSuggestionFailureMessage.reason.")));
  };
};

CharacterNameSuggestionFailureMessage.prototype.getMessageId = function() {
  return 164;
};

CharacterNameSuggestionFailureMessage.prototype.getClassName = function() {
  return 'CharacterNameSuggestionFailureMessage';
};

module.exports.id = 164;
module.exports.class = CharacterNameSuggestionFailureMessage;
var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var CharacterNameSuggestionRequestMessage = function() {

};

require('util').inherits(CharacterNameSuggestionRequestMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new CharacterNameSuggestionRequestMessage();
};

CharacterNameSuggestionRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_CharacterNameSuggestionRequestMessage(output);
};

CharacterNameSuggestionRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_CharacterNameSuggestionRequestMessage(input);
};

CharacterNameSuggestionRequestMessage.prototype.serializeAs_CharacterNameSuggestionRequestMessage = function(param1) {

};

CharacterNameSuggestionRequestMessage.prototype.deserializeAs_CharacterNameSuggestionRequestMessage = function(param1) {

};

CharacterNameSuggestionRequestMessage.prototype.getMessageId = function() {
    return 162;
};

CharacterNameSuggestionRequestMessage.prototype.getClassName = function() {
    return 'CharacterNameSuggestionRequestMessage';
};

module.exports.id = 162;
module.exports.CharacterNameSuggestionRequestMessage = CharacterNameSuggestionRequestMessage;
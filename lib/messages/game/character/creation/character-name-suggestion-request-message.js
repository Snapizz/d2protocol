var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var CharacterNameSuggestionRequestMessage = function() {

};

require('util').inherits(CharacterNameSuggestionRequestMessage, d2com.NetworkMessage.class);

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
module.exports.class = CharacterNameSuggestionRequestMessage;
module.exports.getInstance = function() {
    return new CharacterNameSuggestionRequestMessage;
};
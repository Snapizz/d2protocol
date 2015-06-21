var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var CharacterNameSuggestionFailureMessage = function() {
    this.reason = 1;
};

require('util').inherits(CharacterNameSuggestionFailureMessage, d2com.NetworkMessage.class);

CharacterNameSuggestionFailureMessage.prototype.serialize = function(output) {
    this.serializeAs_CharacterNameSuggestionFailureMessage(output);
};

CharacterNameSuggestionFailureMessage.prototype.deserialize = function(input) {
    this.deserializeAs_CharacterNameSuggestionFailureMessage(input);
};

CharacterNameSuggestionFailureMessage.prototype.serializeAs_CharacterNameSuggestionFailureMessage = function(param1) {
    param1.writeByte(this.reason);
};

CharacterNameSuggestionFailureMessage.prototype.deserializeAs_CharacterNameSuggestionFailureMessage = function(param1) {
    this.reason = param1.readByte();
    if (this.reason < 0) {
        throw new Error("Forbidden value (" + this.reason + ") on element of CharacterNameSuggestionFailureMessage.reason.");
    } else {
        return;
    }
};

CharacterNameSuggestionFailureMessage.prototype.getMessageId = function() {
    return 164;
};

CharacterNameSuggestionFailureMessage.prototype.getClassName = function() {
    return 'CharacterNameSuggestionFailureMessage';
};

module.exports.id = 164;
module.exports.class = CharacterNameSuggestionFailureMessage;
module.exports.getInstance = function() {
    return new CharacterNameSuggestionFailureMessage;
};
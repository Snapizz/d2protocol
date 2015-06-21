var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var CharacterLoadingCompleteMessage = function() {

};

require('util').inherits(CharacterLoadingCompleteMessage, d2com.NetworkMessage.class);

CharacterLoadingCompleteMessage.prototype.serialize = function(output) {
    this.serializeAs_CharacterLoadingCompleteMessage(output);
};

CharacterLoadingCompleteMessage.prototype.deserialize = function(input) {
    this.deserializeAs_CharacterLoadingCompleteMessage(input);
};

CharacterLoadingCompleteMessage.prototype.serializeAs_CharacterLoadingCompleteMessage = function(param1) {

};

CharacterLoadingCompleteMessage.prototype.deserializeAs_CharacterLoadingCompleteMessage = function(param1) {

};

CharacterLoadingCompleteMessage.prototype.getMessageId = function() {
    return 6471;
};

CharacterLoadingCompleteMessage.prototype.getClassName = function() {
    return 'CharacterLoadingCompleteMessage';
};

module.exports.id = 6471;
module.exports.class = CharacterLoadingCompleteMessage;
module.exports.getInstance = function() {
    return new CharacterLoadingCompleteMessage;
};
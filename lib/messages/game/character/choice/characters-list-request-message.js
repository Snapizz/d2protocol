var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var CharactersListRequestMessage = function() {

};

require('util').inherits(CharactersListRequestMessage, d2com.NetworkMessage.class);

CharactersListRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_CharactersListRequestMessage(output);
};

CharactersListRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_CharactersListRequestMessage(input);
};

CharactersListRequestMessage.prototype.serializeAs_CharactersListRequestMessage = function(param1) {

};

CharactersListRequestMessage.prototype.deserializeAs_CharactersListRequestMessage = function(param1) {

};

CharactersListRequestMessage.prototype.getMessageId = function() {
    return 150;
};

CharactersListRequestMessage.prototype.getClassName = function() {
    return 'CharactersListRequestMessage';
};

module.exports.id = 150;
module.exports.class = CharactersListRequestMessage;
module.exports.getInstance = function() {
    return new CharactersListRequestMessage;
};
var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var CharactersListErrorMessage = module.exports = function() {


    return this;
};

require('util').inherits(CharactersListErrorMessage, d2com.NetworkMessage.class);

CharactersListErrorMessage.prototype.serialize = function(output) {
    this.serializeAs_CharactersListErrorMessage(output);
};

CharactersListErrorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_CharactersListErrorMessage(input);
};

CharactersListErrorMessage.prototype.serializeAs_CharactersListErrorMessage = function(param1) {

};

CharactersListErrorMessage.prototype.deserializeAs_CharactersListErrorMessage = function(param1) {

};

CharactersListErrorMessage.prototype.getMessageId = function() {
    return 5545;
};

CharactersListErrorMessage.prototype.getClassName = function() {
    return 'CharactersListErrorMessage';
};

module.exports.id = 5545;
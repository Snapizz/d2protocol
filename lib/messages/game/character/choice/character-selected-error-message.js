var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var CharacterSelectedErrorMessage = module.exports = function() {


    return this;
};

require('util').inherits(CharacterSelectedErrorMessage, d2com.NetworkMessage.class);

CharacterSelectedErrorMessage.prototype.serialize = function(output) {
    this.serializeAs_CharacterSelectedErrorMessage(output);
};

CharacterSelectedErrorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_CharacterSelectedErrorMessage(input);
};

CharacterSelectedErrorMessage.prototype.serializeAs_CharacterSelectedErrorMessage = function(param1) {

};

CharacterSelectedErrorMessage.prototype.deserializeAs_CharacterSelectedErrorMessage = function(param1) {

};

CharacterSelectedErrorMessage.prototype.getMessageId = function() {
    return 5836;
};

CharacterSelectedErrorMessage.prototype.getClassName = function() {
    return 'CharacterSelectedErrorMessage';
};

module.exports.id = 5836;
var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var CharacterSelectedForceReadyMessage = module.exports = function() {


    return this;
};

require('util').inherits(CharacterSelectedForceReadyMessage, d2com.NetworkMessage.class);

CharacterSelectedForceReadyMessage.prototype.serialize = function(output) {
    this.serializeAs_CharacterSelectedForceReadyMessage(output);
};

CharacterSelectedForceReadyMessage.prototype.deserialize = function(input) {
    this.deserializeAs_CharacterSelectedForceReadyMessage(input);
};

CharacterSelectedForceReadyMessage.prototype.serializeAs_CharacterSelectedForceReadyMessage = function(param1) {

};

CharacterSelectedForceReadyMessage.prototype.deserializeAs_CharacterSelectedForceReadyMessage = function(param1) {

};

CharacterSelectedForceReadyMessage.prototype.getMessageId = function() {
    return 6072;
};

CharacterSelectedForceReadyMessage.prototype.getClassName = function() {
    return 'CharacterSelectedForceReadyMessage';
};

module.exports.id = 6072;
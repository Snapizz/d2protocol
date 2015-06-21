var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var CharacterCreationResultMessage = function() {
    this.result = 1;
};

require('util').inherits(CharacterCreationResultMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new CharacterCreationResultMessage();
};

CharacterCreationResultMessage.prototype.serialize = function(output) {
    this.serializeAs_CharacterCreationResultMessage(output);
};

CharacterCreationResultMessage.prototype.deserialize = function(input) {
    this.deserializeAs_CharacterCreationResultMessage(input);
};

CharacterCreationResultMessage.prototype.serializeAs_CharacterCreationResultMessage = function(param1) {
    param1.writeByte(this.result);
};

CharacterCreationResultMessage.prototype.deserializeAs_CharacterCreationResultMessage = function(param1) {
    this.result = param1.readByte();
    if (this.result < 0) {
        throw new Error("Forbidden value (" + this.result + ") on element of CharacterCreationResultMessage.result.");
    } else {
        return;
    }
};

CharacterCreationResultMessage.prototype.getMessageId = function() {
    return 161;
};

CharacterCreationResultMessage.prototype.getClassName = function() {
    return 'CharacterCreationResultMessage';
};

module.exports.id = 161;
module.exports.CharacterCreationResultMessage = CharacterCreationResultMessage;
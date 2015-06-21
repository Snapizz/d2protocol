var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var CharacterDeletionErrorMessage = function() {
    this.reason = 1;
};

require('util').inherits(CharacterDeletionErrorMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new CharacterDeletionErrorMessage();
};

CharacterDeletionErrorMessage.prototype.serialize = function(output) {
    this.serializeAs_CharacterDeletionErrorMessage(output);
};

CharacterDeletionErrorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_CharacterDeletionErrorMessage(input);
};

CharacterDeletionErrorMessage.prototype.serializeAs_CharacterDeletionErrorMessage = function(param1) {
    param1.writeByte(this.reason);
};

CharacterDeletionErrorMessage.prototype.deserializeAs_CharacterDeletionErrorMessage = function(param1) {
    this.reason = param1.readByte();
    if (this.reason < 0) {
        throw new Error("Forbidden value (" + this.reason + ") on element of CharacterDeletionErrorMessage.reason.");
    } else {
        return;
    }
};

CharacterDeletionErrorMessage.prototype.getMessageId = function() {
    return 166;
};

CharacterDeletionErrorMessage.prototype.getClassName = function() {
    return 'CharacterDeletionErrorMessage';
};

module.exports.id = 166;
module.exports.CharacterDeletionErrorMessage = CharacterDeletionErrorMessage;
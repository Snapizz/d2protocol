var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var CharacterLevelUpInformationMessage = function() {
    this.name = "";
    this.id = 0;
};

require('util').inherits(CharacterLevelUpInformationMessage, require('./character-level-up-message.js').class);

CharacterLevelUpInformationMessage.prototype.serialize = function(output) {
    this.serializeAs_CharacterLevelUpInformationMessage(output);
};

CharacterLevelUpInformationMessage.prototype.deserialize = function(input) {
    this.deserializeAs_CharacterLevelUpInformationMessage(input);
};

CharacterLevelUpInformationMessage.prototype.serializeAs_CharacterLevelUpInformationMessage = function(param1) {
    this.serializeAs_CharacterLevelUpMessageAs_CharacterLevelUpMessage(param1);
    param1.writeUTF(this.name);
    if (this.id < 0) {
        throw new Error("Forbidden value (" + this.id + ") on element id.");
    } else {
        param1.writeVarInt(this.id);
        return;
    }
};

CharacterLevelUpInformationMessage.prototype.deserializeAs_CharacterLevelUpInformationMessage = function(param1) {
    this.deserializeAs_CharacterLevelUpMessage(param1);
    this.name = param1.readUTF();
    this.id = param1.readVarUhInt();
    if (this.id < 0) {
        throw new Error("Forbidden value (" + this.id + ") on element of CharacterLevelUpInformationMessage.id.");
    } else {
        return;
    }
};

CharacterLevelUpInformationMessage.prototype.getMessageId = function() {
    return 6076;
};

CharacterLevelUpInformationMessage.prototype.getClassName = function() {
    return 'CharacterLevelUpInformationMessage';
};

module.exports.id = 6076;
module.exports.class = CharacterLevelUpInformationMessage;
module.exports.getInstance = function() {
    return new CharacterLevelUpInformationMessage;
};
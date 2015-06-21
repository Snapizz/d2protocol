var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var CharacterLevelUpMessage = module.exports = function() {
    this.newLevel = 0;

    return this;
};

require('util').inherits(CharacterLevelUpMessage, d2com.NetworkMessage.class);

CharacterLevelUpMessage.prototype.serialize = function(output) {
    this.serializeAs_CharacterLevelUpMessage(output);
};

CharacterLevelUpMessage.prototype.deserialize = function(input) {
    this.deserializeAs_CharacterLevelUpMessage(input);
};

CharacterLevelUpMessage.prototype.serializeAs_CharacterLevelUpMessage = function(param1) {
    if (this.newLevel < 2 || this.newLevel > 200) {
        throw new Error("Forbidden value (" + this.newLevel + ") on element newLevel.");
    } else {
        param1.writeByte(this.newLevel);
        return;
    }
};

CharacterLevelUpMessage.prototype.deserializeAs_CharacterLevelUpMessage = function(param1) {
    this.newLevel = param1.readUnsignedByte();
    if (this.newLevel < 2 || this.newLevel > 200) {
        throw new Error("Forbidden value (" + this.newLevel + ") on element of CharacterLevelUpMessage.newLevel.");
    } else {
        return;
    }
};

CharacterLevelUpMessage.prototype.getMessageId = function() {
    return 5670;
};

CharacterLevelUpMessage.prototype.getClassName = function() {
    return 'CharacterLevelUpMessage';
};

module.exports.id = 5670;
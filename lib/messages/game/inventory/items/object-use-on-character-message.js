var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ObjectUseOnCharacterMessage = function() {
    this.characterId = 0;
};

require('util').inherits(ObjectUseOnCharacterMessage, require('./object-use-message.js'));

module.exports = function() {
    return new ObjectUseOnCharacterMessage();
};

ObjectUseOnCharacterMessage.prototype.serialize = function(output) {
    this.serializeAs_ObjectUseOnCharacterMessage(output);
};

ObjectUseOnCharacterMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ObjectUseOnCharacterMessage(input);
};

ObjectUseOnCharacterMessage.prototype.serializeAs_ObjectUseOnCharacterMessage = function(param1) {
    this.serializeAs_ObjectUseMessage(param1);
    if (this.characterId < 0) {
        throw new Error("Forbidden value (" + this.characterId + ") on element characterId.");
    } else {
        param1.writeVarInt(this.characterId);
        return;
    }
};

ObjectUseOnCharacterMessage.prototype.deserializeAs_ObjectUseOnCharacterMessage = function(param1) {
    this.deserializeAs_ObjectUseMessage(param1);
    this.characterId = param1.readVarUhInt();
    if (this.characterId < 0) {
        throw new Error("Forbidden value (" + this.characterId + ") on element of ObjectUseOnCharacterMessage.characterId.");
    } else {
        return;
    }
};

ObjectUseOnCharacterMessage.prototype.getMessageId = function() {
    return 3003;
};

ObjectUseOnCharacterMessage.prototype.getClassName = function() {
    return 'ObjectUseOnCharacterMessage';
};

module.exports.id = 3003;
module.exports.ObjectUseOnCharacterMessage = ObjectUseOnCharacterMessage;
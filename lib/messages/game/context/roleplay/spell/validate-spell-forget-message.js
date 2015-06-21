var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ValidateSpellForgetMessage = module.exports = function() {
    this.spellId = 0;

    return this;
};

require('util').inherits(ValidateSpellForgetMessage, d2com.NetworkMessage.class);

ValidateSpellForgetMessage.prototype.serialize = function(output) {
    this.serializeAs_ValidateSpellForgetMessage(output);
};

ValidateSpellForgetMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ValidateSpellForgetMessage(input);
};

ValidateSpellForgetMessage.prototype.serializeAs_ValidateSpellForgetMessage = function(param1) {
    if (this.spellId < 0) {
        throw new Error("Forbidden value (" + this.spellId + ") on element spellId.");
    } else {
        param1.writeVarShort(this.spellId);
        return;
    }
};

ValidateSpellForgetMessage.prototype.deserializeAs_ValidateSpellForgetMessage = function(param1) {
    this.spellId = param1.readVarUhShort();
    if (this.spellId < 0) {
        throw new Error("Forbidden value (" + this.spellId + ") on element of ValidateSpellForgetMessage.spellId.");
    } else {
        return;
    }
};

ValidateSpellForgetMessage.prototype.getMessageId = function() {
    return 1700;
};

ValidateSpellForgetMessage.prototype.getClassName = function() {
    return 'ValidateSpellForgetMessage';
};

module.exports.id = 1700;
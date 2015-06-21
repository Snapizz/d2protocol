var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var SpellItemBoostMessage = function() {
    this.statId = 0;
    this.spellId = 0;
    this.value = 0;
};

require('util').inherits(SpellItemBoostMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new SpellItemBoostMessage();
};

SpellItemBoostMessage.prototype.serialize = function(output) {
    this.serializeAs_SpellItemBoostMessage(output);
};

SpellItemBoostMessage.prototype.deserialize = function(input) {
    this.deserializeAs_SpellItemBoostMessage(input);
};

SpellItemBoostMessage.prototype.serializeAs_SpellItemBoostMessage = function(param1) {
    if (this.statId < 0) {
        throw new Error("Forbidden value (" + this.statId + ") on element statId.");
    } else {
        param1.writeVarInt(this.statId);
        if (this.spellId < 0) {
            throw new Error("Forbidden value (" + this.spellId + ") on element spellId.");
        } else {
            param1.writeVarShort(this.spellId);
            param1.writeVarShort(this.value);
            return;
        }
    }
};

SpellItemBoostMessage.prototype.deserializeAs_SpellItemBoostMessage = function(param1) {
    this.statId = param1.readVarUhInt();
    if (this.statId < 0) {
        throw new Error("Forbidden value (" + this.statId + ") on element of SpellItemBoostMessage.statId.");
    } else {
        this.spellId = param1.readVarUhShort();
        if (this.spellId < 0) {
            throw new Error("Forbidden value (" + this.spellId + ") on element of SpellItemBoostMessage.spellId.");
        } else {
            this.value = param1.readVarShort();
            return;
        }
    }
};

SpellItemBoostMessage.prototype.getMessageId = function() {
    return 6011;
};

SpellItemBoostMessage.prototype.getClassName = function() {
    return 'SpellItemBoostMessage';
};

module.exports.id = 6011;
module.exports.SpellItemBoostMessage = SpellItemBoostMessage;
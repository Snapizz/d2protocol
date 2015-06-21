var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GuildSpellUpgradeRequestMessage = module.exports = function() {
    this.spellId = 0;

    return this;
};

require('util').inherits(GuildSpellUpgradeRequestMessage, d2com.NetworkMessage.class);

GuildSpellUpgradeRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildSpellUpgradeRequestMessage(output);
};

GuildSpellUpgradeRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildSpellUpgradeRequestMessage(input);
};

GuildSpellUpgradeRequestMessage.prototype.serializeAs_GuildSpellUpgradeRequestMessage = function(param1) {
    if (this.spellId < 0) {
        throw new Error("Forbidden value (" + this.spellId + ") on element spellId.");
    } else {
        param1.writeInt(this.spellId);
        return;
    }
};

GuildSpellUpgradeRequestMessage.prototype.deserializeAs_GuildSpellUpgradeRequestMessage = function(param1) {
    this.spellId = param1.readInt();
    if (this.spellId < 0) {
        throw new Error("Forbidden value (" + this.spellId + ") on element of GuildSpellUpgradeRequestMessage.spellId.");
    } else {
        return;
    }
};

GuildSpellUpgradeRequestMessage.prototype.getMessageId = function() {
    return 5699;
};

GuildSpellUpgradeRequestMessage.prototype.getClassName = function() {
    return 'GuildSpellUpgradeRequestMessage';
};

module.exports.id = 5699;
var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GuildFactsErrorMessage = module.exports = function() {
    this.guildId = 0;

    return this;
};

require('util').inherits(GuildFactsErrorMessage, d2com.NetworkMessage.class);

GuildFactsErrorMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildFactsErrorMessage(output);
};

GuildFactsErrorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildFactsErrorMessage(input);
};

GuildFactsErrorMessage.prototype.serializeAs_GuildFactsErrorMessage = function(param1) {
    if (this.guildId < 0) {
        throw new Error("Forbidden value (" + this.guildId + ") on element guildId.");
    } else {
        param1.writeVarInt(this.guildId);
        return;
    }
};

GuildFactsErrorMessage.prototype.deserializeAs_GuildFactsErrorMessage = function(param1) {
    this.guildId = param1.readVarUhInt();
    if (this.guildId < 0) {
        throw new Error("Forbidden value (" + this.guildId + ") on element of GuildFactsErrorMessage.guildId.");
    } else {
        return;
    }
};

GuildFactsErrorMessage.prototype.getMessageId = function() {
    return 6424;
};

GuildFactsErrorMessage.prototype.getClassName = function() {
    return 'GuildFactsErrorMessage';
};

module.exports.id = 6424;
var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var GuildFactsRequestMessage = function() {
    this.guildId = 0;
};

require('util').inherits(GuildFactsRequestMessage, d2com.NetworkMessage.class);

GuildFactsRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildFactsRequestMessage(output);
};

GuildFactsRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildFactsRequestMessage(input);
};

GuildFactsRequestMessage.prototype.serializeAs_GuildFactsRequestMessage = function(param1) {
    if (this.guildId < 0) {
        throw new Error("Forbidden value (" + this.guildId + ") on element guildId.");
    } else {
        param1.writeVarInt(this.guildId);
        return;
    }
};

GuildFactsRequestMessage.prototype.deserializeAs_GuildFactsRequestMessage = function(param1) {
    this.guildId = param1.readVarUhInt();
    if (this.guildId < 0) {
        throw new Error("Forbidden value (" + this.guildId + ") on element of GuildFactsRequestMessage.guildId.");
    } else {
        return;
    }
};

GuildFactsRequestMessage.prototype.getMessageId = function() {
    return 6404;
};

GuildFactsRequestMessage.prototype.getClassName = function() {
    return 'GuildFactsRequestMessage';
};

module.exports.id = 6404;
module.exports.class = GuildFactsRequestMessage;
module.exports.getInstance = function() {
    return new GuildFactsRequestMessage;
};
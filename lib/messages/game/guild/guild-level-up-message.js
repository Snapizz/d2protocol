var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GuildLevelUpMessage = function() {
    this.newLevel = 0;
};

require('util').inherits(GuildLevelUpMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GuildLevelUpMessage();
};

GuildLevelUpMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildLevelUpMessage(output);
};

GuildLevelUpMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildLevelUpMessage(input);
};

GuildLevelUpMessage.prototype.serializeAs_GuildLevelUpMessage = function(param1) {
    if (this.newLevel < 2 || this.newLevel > 200) {
        throw new Error("Forbidden value (" + this.newLevel + ") on element newLevel.");
    } else {
        param1.writeByte(this.newLevel);
        return;
    }
};

GuildLevelUpMessage.prototype.deserializeAs_GuildLevelUpMessage = function(param1) {
    this.newLevel = param1.readUnsignedByte();
    if (this.newLevel < 2 || this.newLevel > 200) {
        throw new Error("Forbidden value (" + this.newLevel + ") on element of GuildLevelUpMessage.newLevel.");
    } else {
        return;
    }
};

GuildLevelUpMessage.prototype.getMessageId = function() {
    return 6062;
};

GuildLevelUpMessage.prototype.getClassName = function() {
    return 'GuildLevelUpMessage';
};

module.exports.id = 6062;
module.exports.GuildLevelUpMessage = GuildLevelUpMessage;
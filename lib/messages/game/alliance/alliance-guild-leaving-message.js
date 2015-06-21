var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var AllianceGuildLeavingMessage = function() {
    this.kicked = false;
    this.guildId = 0;
};

require('util').inherits(AllianceGuildLeavingMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new AllianceGuildLeavingMessage();
};

AllianceGuildLeavingMessage.prototype.serialize = function(output) {
    this.serializeAs_AllianceGuildLeavingMessage(output);
};

AllianceGuildLeavingMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AllianceGuildLeavingMessage(input);
};

AllianceGuildLeavingMessage.prototype.serializeAs_AllianceGuildLeavingMessage = function(param1) {
    param1.writeBoolean(this.kicked);
    if (this.guildId < 0) {
        throw new Error("Forbidden value (" + this.guildId + ") on element guildId.");
    } else {
        param1.writeVarInt(this.guildId);
        return;
    }
};

AllianceGuildLeavingMessage.prototype.deserializeAs_AllianceGuildLeavingMessage = function(param1) {
    this.kicked = param1.readBoolean();
    this.guildId = param1.readVarUhInt();
    if (this.guildId < 0) {
        throw new Error("Forbidden value (" + this.guildId + ") on element of AllianceGuildLeavingMessage.guildId.");
    } else {
        return;
    }
};

AllianceGuildLeavingMessage.prototype.getMessageId = function() {
    return 6399;
};

AllianceGuildLeavingMessage.prototype.getClassName = function() {
    return 'AllianceGuildLeavingMessage';
};

module.exports.id = 6399;
module.exports.AllianceGuildLeavingMessage = AllianceGuildLeavingMessage;
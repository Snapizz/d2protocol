var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GuildMemberOnlineStatusMessage = module.exports = function() {
    this.memberId = 0;
    this.online = false;

    return this;
};

require('util').inherits(GuildMemberOnlineStatusMessage, d2com.NetworkMessage.class);

GuildMemberOnlineStatusMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildMemberOnlineStatusMessage(output);
};

GuildMemberOnlineStatusMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildMemberOnlineStatusMessage(input);
};

GuildMemberOnlineStatusMessage.prototype.serializeAs_GuildMemberOnlineStatusMessage = function(param1) {
    if (this.memberId < 0) {
        throw new Error("Forbidden value (" + this.memberId + ") on element memberId.");
    } else {
        param1.writeVarInt(this.memberId);
        param1.writeBoolean(this.online);
        return;
    }
};

GuildMemberOnlineStatusMessage.prototype.deserializeAs_GuildMemberOnlineStatusMessage = function(param1) {
    this.memberId = param1.readVarUhInt();
    if (this.memberId < 0) {
        throw new Error("Forbidden value (" + this.memberId + ") on element of GuildMemberOnlineStatusMessage.memberId.");
    } else {
        this.online = param1.readBoolean();
        return;
    }
};

GuildMemberOnlineStatusMessage.prototype.getMessageId = function() {
    return 6061;
};

GuildMemberOnlineStatusMessage.prototype.getClassName = function() {
    return 'GuildMemberOnlineStatusMessage';
};

module.exports.id = 6061;
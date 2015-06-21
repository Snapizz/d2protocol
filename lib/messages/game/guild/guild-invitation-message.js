var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GuildInvitationMessage = module.exports = function() {
    this.targetId = 0;

    return this;
};

require('util').inherits(GuildInvitationMessage, d2com.NetworkMessage.class);

GuildInvitationMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildInvitationMessage(output);
};

GuildInvitationMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildInvitationMessage(input);
};

GuildInvitationMessage.prototype.serializeAs_GuildInvitationMessage = function(param1) {
    if (this.targetId < 0) {
        throw new Error("Forbidden value (" + this.targetId + ") on element targetId.");
    } else {
        param1.writeVarInt(this.targetId);
        return;
    }
};

GuildInvitationMessage.prototype.deserializeAs_GuildInvitationMessage = function(param1) {
    this.targetId = param1.readVarUhInt();
    if (this.targetId < 0) {
        throw new Error("Forbidden value (" + this.targetId + ") on element of GuildInvitationMessage.targetId.");
    } else {
        return;
    }
};

GuildInvitationMessage.prototype.getMessageId = function() {
    return 5551;
};

GuildInvitationMessage.prototype.getClassName = function() {
    return 'GuildInvitationMessage';
};

module.exports.id = 5551;
var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var GuildInvitationStateRecrutedMessage = function() {
    this.invitationState = 0;
};

require('util').inherits(GuildInvitationStateRecrutedMessage, d2com.NetworkMessage.class);

GuildInvitationStateRecrutedMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildInvitationStateRecrutedMessage(output);
};

GuildInvitationStateRecrutedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildInvitationStateRecrutedMessage(input);
};

GuildInvitationStateRecrutedMessage.prototype.serializeAs_GuildInvitationStateRecrutedMessage = function(param1) {
    param1.writeByte(this.invitationState);
};

GuildInvitationStateRecrutedMessage.prototype.deserializeAs_GuildInvitationStateRecrutedMessage = function(param1) {
    this.invitationState = param1.readByte();
    if (this.invitationState < 0) {
        throw new Error("Forbidden value (" + this.invitationState + ") on element of GuildInvitationStateRecrutedMessage.invitationState.");
    } else {
        return;
    }
};

GuildInvitationStateRecrutedMessage.prototype.getMessageId = function() {
    return 5548;
};

GuildInvitationStateRecrutedMessage.prototype.getClassName = function() {
    return 'GuildInvitationStateRecrutedMessage';
};

module.exports.id = 5548;
module.exports.class = GuildInvitationStateRecrutedMessage;
module.exports.getInstance = function() {
    return new GuildInvitationStateRecrutedMessage;
};
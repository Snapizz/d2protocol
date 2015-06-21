var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GuildInvitationAnswerMessage = module.exports = function() {
    this.accept = false;

    return this;
};

require('util').inherits(GuildInvitationAnswerMessage, d2com.NetworkMessage.class);

GuildInvitationAnswerMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildInvitationAnswerMessage(output);
};

GuildInvitationAnswerMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildInvitationAnswerMessage(input);
};

GuildInvitationAnswerMessage.prototype.serializeAs_GuildInvitationAnswerMessage = function(param1) {
    param1.writeBoolean(this.accept);
};

GuildInvitationAnswerMessage.prototype.deserializeAs_GuildInvitationAnswerMessage = function(param1) {
    this.accept = param1.readBoolean();
};

GuildInvitationAnswerMessage.prototype.getMessageId = function() {
    return 5556;
};

GuildInvitationAnswerMessage.prototype.getClassName = function() {
    return 'GuildInvitationAnswerMessage';
};

module.exports.id = 5556;
var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GuildInvitationByNameMessage = module.exports = function() {
    this.name = "";

    return this;
};

require('util').inherits(GuildInvitationByNameMessage, d2com.NetworkMessage.class);

GuildInvitationByNameMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildInvitationByNameMessage(output);
};

GuildInvitationByNameMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildInvitationByNameMessage(input);
};

GuildInvitationByNameMessage.prototype.serializeAs_GuildInvitationByNameMessage = function(param1) {
    param1.writeUTF(this.name);
};

GuildInvitationByNameMessage.prototype.deserializeAs_GuildInvitationByNameMessage = function(param1) {
    this.name = param1.readUTF();
};

GuildInvitationByNameMessage.prototype.getMessageId = function() {
    return 6115;
};

GuildInvitationByNameMessage.prototype.getClassName = function() {
    return 'GuildInvitationByNameMessage';
};

module.exports.id = 6115;
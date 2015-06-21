var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var BasicGuildInformations = require('../../../types/game/context/roleplay/basic-guild-informations.js').BasicGuildInformations;

var GuildInvitedMessage = function() {
    this.recruterId = 0;
    this.recruterName = "";
    this.guildInfo = new BasicGuildInformations();
};

require('util').inherits(GuildInvitedMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GuildInvitedMessage();
};

GuildInvitedMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildInvitedMessage(output);
};

GuildInvitedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildInvitedMessage(input);
};

GuildInvitedMessage.prototype.serializeAs_GuildInvitedMessage = function(param1) {
    if (this.recruterId < 0) {
        throw new Error("Forbidden value (" + this.recruterId + ") on element recruterId.");
    } else {
        param1.writeVarInt(this.recruterId);
        param1.writeUTF(this.recruterName);
        this.guildInfo.serializeAs_BasicGuildInformations(param1);
        return;
    }
};

GuildInvitedMessage.prototype.deserializeAs_GuildInvitedMessage = function(param1) {
    this.recruterId = param1.readVarUhInt();
    if (this.recruterId < 0) {
        throw new Error("Forbidden value (" + this.recruterId + ") on element of GuildInvitedMessage.recruterId.");
    } else {
        this.recruterName = param1.readUTF();
        this.guildInfo = new BasicGuildInformations();
        this.guildInfo.deserialize(param1);
        return;
    }
};

GuildInvitedMessage.prototype.getMessageId = function() {
    return 5552;
};

GuildInvitedMessage.prototype.getClassName = function() {
    return 'GuildInvitedMessage';
};

module.exports.id = 5552;
module.exports.GuildInvitedMessage = GuildInvitedMessage;
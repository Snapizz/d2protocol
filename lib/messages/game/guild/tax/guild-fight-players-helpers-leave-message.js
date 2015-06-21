var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GuildFightPlayersHelpersLeaveMessage = function() {
    this.fightId = 0;
    this.playerId = 0;
};

require('util').inherits(GuildFightPlayersHelpersLeaveMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GuildFightPlayersHelpersLeaveMessage();
};

GuildFightPlayersHelpersLeaveMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildFightPlayersHelpersLeaveMessage(output);
};

GuildFightPlayersHelpersLeaveMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildFightPlayersHelpersLeaveMessage(input);
};

GuildFightPlayersHelpersLeaveMessage.prototype.serializeAs_GuildFightPlayersHelpersLeaveMessage = function(param1) {
    if (this.fightId < 0) {
        throw new Error("Forbidden value (" + this.fightId + ") on element fightId.");
    } else {
        param1.writeInt(this.fightId);
        if (this.playerId < 0) {
            throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
        } else {
            param1.writeVarInt(this.playerId);
            return;
        }
    }
};

GuildFightPlayersHelpersLeaveMessage.prototype.deserializeAs_GuildFightPlayersHelpersLeaveMessage = function(param1) {
    this.fightId = param1.readInt();
    if (this.fightId < 0) {
        throw new Error("Forbidden value (" + this.fightId + ") on element of GuildFightPlayersHelpersLeaveMessage.fightId.");
    } else {
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error("Forbidden value (" + this.playerId + ") on element of GuildFightPlayersHelpersLeaveMessage.playerId.");
        } else {
            return;
        }
    }
};

GuildFightPlayersHelpersLeaveMessage.prototype.getMessageId = function() {
    return 5719;
};

GuildFightPlayersHelpersLeaveMessage.prototype.getClassName = function() {
    return 'GuildFightPlayersHelpersLeaveMessage';
};

module.exports.id = 5719;
module.exports.GuildFightPlayersHelpersLeaveMessage = GuildFightPlayersHelpersLeaveMessage;
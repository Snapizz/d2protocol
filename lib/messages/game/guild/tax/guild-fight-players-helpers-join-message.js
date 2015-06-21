var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var CharacterMinimalPlusLookInformations = require('../../../../types/game/character/character-minimal-plus-look-informations.js').CharacterMinimalPlusLookInformations;

var GuildFightPlayersHelpersJoinMessage = function() {
    this.fightId = 0;
    this.playerInfo = new CharacterMinimalPlusLookInformations();
};

require('util').inherits(GuildFightPlayersHelpersJoinMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GuildFightPlayersHelpersJoinMessage();
};

GuildFightPlayersHelpersJoinMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildFightPlayersHelpersJoinMessage(output);
};

GuildFightPlayersHelpersJoinMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildFightPlayersHelpersJoinMessage(input);
};

GuildFightPlayersHelpersJoinMessage.prototype.serializeAs_GuildFightPlayersHelpersJoinMessage = function(param1) {
    if (this.fightId < 0) {
        throw new Error("Forbidden value (" + this.fightId + ") on element fightId.");
    } else {
        param1.writeInt(this.fightId);
        this.playerInfo.serializeAs_CharacterMinimalPlusLookInformations(param1);
        return;
    }
};

GuildFightPlayersHelpersJoinMessage.prototype.deserializeAs_GuildFightPlayersHelpersJoinMessage = function(param1) {
    this.fightId = param1.readInt();
    if (this.fightId < 0) {
        throw new Error("Forbidden value (" + this.fightId + ") on element of GuildFightPlayersHelpersJoinMessage.fightId.");
    } else {
        this.playerInfo = new CharacterMinimalPlusLookInformations();
        this.playerInfo.deserialize(param1);
        return;
    }
};

GuildFightPlayersHelpersJoinMessage.prototype.getMessageId = function() {
    return 5720;
};

GuildFightPlayersHelpersJoinMessage.prototype.getClassName = function() {
    return 'GuildFightPlayersHelpersJoinMessage';
};

module.exports.id = 5720;
module.exports.GuildFightPlayersHelpersJoinMessage = GuildFightPlayersHelpersJoinMessage;
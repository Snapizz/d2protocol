var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameRolePlayArenaFighterStatusMessage = module.exports = function() {
    this.fightId = 0;
    this.playerId = 0;
    this.accepted = false;

    return this;
};

require('util').inherits(GameRolePlayArenaFighterStatusMessage, d2com.NetworkMessage.class);

GameRolePlayArenaFighterStatusMessage.prototype.serialize = function(output) {
    this.serializeAs_GameRolePlayArenaFighterStatusMessage(output);
};

GameRolePlayArenaFighterStatusMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameRolePlayArenaFighterStatusMessage(input);
};

GameRolePlayArenaFighterStatusMessage.prototype.serializeAs_GameRolePlayArenaFighterStatusMessage = function(param1) {
    param1.writeInt(this.fightId);
    param1.writeInt(this.playerId);
    param1.writeBoolean(this.accepted);
};

GameRolePlayArenaFighterStatusMessage.prototype.deserializeAs_GameRolePlayArenaFighterStatusMessage = function(param1) {
    this.fightId = param1.readInt();
    this.playerId = param1.readInt();
    this.accepted = param1.readBoolean();
};

GameRolePlayArenaFighterStatusMessage.prototype.getMessageId = function() {
    return 6281;
};

GameRolePlayArenaFighterStatusMessage.prototype.getClassName = function() {
    return 'GameRolePlayArenaFighterStatusMessage';
};

module.exports.id = 6281;
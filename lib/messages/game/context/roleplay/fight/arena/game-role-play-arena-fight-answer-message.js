var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameRolePlayArenaFightAnswerMessage = module.exports = function() {
    this.fightId = 0;
    this.accept = false;

    return this;
};

require('util').inherits(GameRolePlayArenaFightAnswerMessage, d2com.NetworkMessage.class);

GameRolePlayArenaFightAnswerMessage.prototype.serialize = function(output) {
    this.serializeAs_GameRolePlayArenaFightAnswerMessage(output);
};

GameRolePlayArenaFightAnswerMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameRolePlayArenaFightAnswerMessage(input);
};

GameRolePlayArenaFightAnswerMessage.prototype.serializeAs_GameRolePlayArenaFightAnswerMessage = function(param1) {
    param1.writeInt(this.fightId);
    param1.writeBoolean(this.accept);
};

GameRolePlayArenaFightAnswerMessage.prototype.deserializeAs_GameRolePlayArenaFightAnswerMessage = function(param1) {
    this.fightId = param1.readInt();
    this.accept = param1.readBoolean();
};

GameRolePlayArenaFightAnswerMessage.prototype.getMessageId = function() {
    return 6279;
};

GameRolePlayArenaFightAnswerMessage.prototype.getClassName = function() {
    return 'GameRolePlayArenaFightAnswerMessage';
};

module.exports.id = 6279;
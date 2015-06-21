var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameRolePlayPlayerFightFriendlyAnswerMessage = module.exports = function() {
    this.fightId = 0;
    this.accept = false;

    return this;
};

require('util').inherits(GameRolePlayPlayerFightFriendlyAnswerMessage, d2com.NetworkMessage.class);

GameRolePlayPlayerFightFriendlyAnswerMessage.prototype.serialize = function(output) {
    this.serializeAs_GameRolePlayPlayerFightFriendlyAnswerMessage(output);
};

GameRolePlayPlayerFightFriendlyAnswerMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameRolePlayPlayerFightFriendlyAnswerMessage(input);
};

GameRolePlayPlayerFightFriendlyAnswerMessage.prototype.serializeAs_GameRolePlayPlayerFightFriendlyAnswerMessage = function(param1) {
    param1.writeInt(this.fightId);
    param1.writeBoolean(this.accept);
};

GameRolePlayPlayerFightFriendlyAnswerMessage.prototype.deserializeAs_GameRolePlayPlayerFightFriendlyAnswerMessage = function(param1) {
    this.fightId = param1.readInt();
    this.accept = param1.readBoolean();
};

GameRolePlayPlayerFightFriendlyAnswerMessage.prototype.getMessageId = function() {
    return 5732;
};

GameRolePlayPlayerFightFriendlyAnswerMessage.prototype.getClassName = function() {
    return 'GameRolePlayPlayerFightFriendlyAnswerMessage';
};

module.exports.id = 5732;
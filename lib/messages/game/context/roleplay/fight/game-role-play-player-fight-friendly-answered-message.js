var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var GameRolePlayPlayerFightFriendlyAnsweredMessage = function() {
    this.fightId = 0;
    this.sourceId = 0;
    this.targetId = 0;
    this.accept = false;
};

require('util').inherits(GameRolePlayPlayerFightFriendlyAnsweredMessage, d2com.NetworkMessage.class);

GameRolePlayPlayerFightFriendlyAnsweredMessage.prototype.serialize = function(output) {
    this.serializeAs_GameRolePlayPlayerFightFriendlyAnsweredMessage(output);
};

GameRolePlayPlayerFightFriendlyAnsweredMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameRolePlayPlayerFightFriendlyAnsweredMessage(input);
};

GameRolePlayPlayerFightFriendlyAnsweredMessage.prototype.serializeAs_GameRolePlayPlayerFightFriendlyAnsweredMessage = function(param1) {
    param1.writeInt(this.fightId);
    if (this.sourceId < 0) {
        throw new Error("Forbidden value (" + this.sourceId + ") on element sourceId.");
    } else {
        param1.writeVarInt(this.sourceId);
        if (this.targetId < 0) {
            throw new Error("Forbidden value (" + this.targetId + ") on element targetId.");
        } else {
            param1.writeVarInt(this.targetId);
            param1.writeBoolean(this.accept);
            return;
        }
    }
};

GameRolePlayPlayerFightFriendlyAnsweredMessage.prototype.deserializeAs_GameRolePlayPlayerFightFriendlyAnsweredMessage = function(param1) {
    this.fightId = param1.readInt();
    this.sourceId = param1.readVarUhInt();
    if (this.sourceId < 0) {
        throw new Error("Forbidden value (" + this.sourceId + ") on element of GameRolePlayPlayerFightFriendlyAnsweredMessage.sourceId.");
    } else {
        this.targetId = param1.readVarUhInt();
        if (this.targetId < 0) {
            throw new Error("Forbidden value (" + this.targetId + ") on element of GameRolePlayPlayerFightFriendlyAnsweredMessage.targetId.");
        } else {
            this.accept = param1.readBoolean();
            return;
        }
    }
};

GameRolePlayPlayerFightFriendlyAnsweredMessage.prototype.getMessageId = function() {
    return 5733;
};

GameRolePlayPlayerFightFriendlyAnsweredMessage.prototype.getClassName = function() {
    return 'GameRolePlayPlayerFightFriendlyAnsweredMessage';
};

module.exports.id = 5733;
module.exports.class = GameRolePlayPlayerFightFriendlyAnsweredMessage;
module.exports.getInstance = function() {
    return new GameRolePlayPlayerFightFriendlyAnsweredMessage;
};
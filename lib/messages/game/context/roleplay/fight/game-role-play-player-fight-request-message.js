var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var GameRolePlayPlayerFightRequestMessage = function() {
    this.targetId = 0;
    this.targetCellId = 0;
    this.friendly = false;
};

require('util').inherits(GameRolePlayPlayerFightRequestMessage, d2com.NetworkMessage.class);

GameRolePlayPlayerFightRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_GameRolePlayPlayerFightRequestMessage(output);
};

GameRolePlayPlayerFightRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameRolePlayPlayerFightRequestMessage(input);
};

GameRolePlayPlayerFightRequestMessage.prototype.serializeAs_GameRolePlayPlayerFightRequestMessage = function(param1) {
    if (this.targetId < 0) {
        throw new Error("Forbidden value (" + this.targetId + ") on element targetId.");
    } else {
        param1.writeVarInt(this.targetId);
        if (this.targetCellId < -1 || this.targetCellId > 559) {
            throw new Error("Forbidden value (" + this.targetCellId + ") on element targetCellId.");
        } else {
            param1.writeShort(this.targetCellId);
            param1.writeBoolean(this.friendly);
            return;
        }
    }
};

GameRolePlayPlayerFightRequestMessage.prototype.deserializeAs_GameRolePlayPlayerFightRequestMessage = function(param1) {
    this.targetId = param1.readVarUhInt();
    if (this.targetId < 0) {
        throw new Error("Forbidden value (" + this.targetId + ") on element of GameRolePlayPlayerFightRequestMessage.targetId.");
    } else {
        this.targetCellId = param1.readShort();
        if (this.targetCellId < -1 || this.targetCellId > 559) {
            throw new Error("Forbidden value (" + this.targetCellId + ") on element of GameRolePlayPlayerFightRequestMessage.targetCellId.");
        } else {
            this.friendly = param1.readBoolean();
            return;
        }
    }
};

GameRolePlayPlayerFightRequestMessage.prototype.getMessageId = function() {
    return 5731;
};

GameRolePlayPlayerFightRequestMessage.prototype.getClassName = function() {
    return 'GameRolePlayPlayerFightRequestMessage';
};

module.exports.id = 5731;
module.exports.class = GameRolePlayPlayerFightRequestMessage;
module.exports.getInstance = function() {
    return new GameRolePlayPlayerFightRequestMessage;
};
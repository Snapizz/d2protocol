var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameRolePlayDelayedActionMessage = function() {
    this.delayedCharacterId = 0;
    this.delayTypeId = 0;
    this.delayEndTime = 0;
};

require('util').inherits(GameRolePlayDelayedActionMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GameRolePlayDelayedActionMessage();
};

GameRolePlayDelayedActionMessage.prototype.serialize = function(output) {
    this.serializeAs_GameRolePlayDelayedActionMessage(output);
};

GameRolePlayDelayedActionMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameRolePlayDelayedActionMessage(input);
};

GameRolePlayDelayedActionMessage.prototype.serializeAs_GameRolePlayDelayedActionMessage = function(param1) {
    param1.writeInt(this.delayedCharacterId);
    param1.writeByte(this.delayTypeId);
    if (this.delayEndTime < 0 || this.delayEndTime > 9.007199254740992E15) {
        throw new Error("Forbidden value (" + this.delayEndTime + ") on element delayEndTime.");
    } else {
        param1.writeDouble(this.delayEndTime);
        return;
    }
};

GameRolePlayDelayedActionMessage.prototype.deserializeAs_GameRolePlayDelayedActionMessage = function(param1) {
    this.delayedCharacterId = param1.readInt();
    this.delayTypeId = param1.readByte();
    if (this.delayTypeId < 0) {
        throw new Error("Forbidden value (" + this.delayTypeId + ") on element of GameRolePlayDelayedActionMessage.delayTypeId.");
    } else {
        this.delayEndTime = param1.readDouble();
        if (this.delayEndTime < 0 || this.delayEndTime > 9.007199254740992E15) {
            throw new Error("Forbidden value (" + this.delayEndTime + ") on element of GameRolePlayDelayedActionMessage.delayEndTime.");
        } else {
            return;
        }
    }
};

GameRolePlayDelayedActionMessage.prototype.getMessageId = function() {
    return 6153;
};

GameRolePlayDelayedActionMessage.prototype.getClassName = function() {
    return 'GameRolePlayDelayedActionMessage';
};

module.exports.id = 6153;
module.exports.GameRolePlayDelayedActionMessage = GameRolePlayDelayedActionMessage;
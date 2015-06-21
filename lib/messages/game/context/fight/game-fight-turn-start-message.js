var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameFightTurnStartMessage = function() {
    this.id = 0;
    this.waitTime = 0;
};

require('util').inherits(GameFightTurnStartMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GameFightTurnStartMessage();
};

GameFightTurnStartMessage.prototype.serialize = function(output) {
    this.serializeAs_GameFightTurnStartMessage(output);
};

GameFightTurnStartMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightTurnStartMessage(input);
};

GameFightTurnStartMessage.prototype.serializeAs_GameFightTurnStartMessage = function(param1) {
    param1.writeInt(this.id);
    if (this.waitTime < 0) {
        throw new Error("Forbidden value (" + this.waitTime + ") on element waitTime.");
    } else {
        param1.writeVarInt(this.waitTime);
        return;
    }
};

GameFightTurnStartMessage.prototype.deserializeAs_GameFightTurnStartMessage = function(param1) {
    this.id = param1.readInt();
    this.waitTime = param1.readVarUhInt();
    if (this.waitTime < 0) {
        throw new Error("Forbidden value (" + this.waitTime + ") on element of GameFightTurnStartMessage.waitTime.");
    } else {
        return;
    }
};

GameFightTurnStartMessage.prototype.getMessageId = function() {
    return 714;
};

GameFightTurnStartMessage.prototype.getClassName = function() {
    return 'GameFightTurnStartMessage';
};

module.exports.id = 714;
module.exports.GameFightTurnStartMessage = GameFightTurnStartMessage;
var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameFightTurnResumeMessage = function() {
    this.remainingTime = 0;
};

require('util').inherits(GameFightTurnResumeMessage, require('./game-fight-turn-start-message.js').class);

GameFightTurnResumeMessage.prototype.serialize = function(output) {
    this.serializeAs_GameFightTurnResumeMessage(output);
};

GameFightTurnResumeMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightTurnResumeMessage(input);
};

GameFightTurnResumeMessage.prototype.serializeAs_GameFightTurnResumeMessage = function(param1) {
    this.serializeAs_GameFightTurnStartMessage(param1);
    if (this.remainingTime < 0) {
        throw new Error("Forbidden value (" + this.remainingTime + ") on element remainingTime.");
    } else {
        param1.writeVarInt(this.remainingTime);
        return;
    }
};

GameFightTurnResumeMessage.prototype.deserializeAs_GameFightTurnResumeMessage = function(param1) {
    this.deserializeAs_GameFightTurnStartMessage(param1);
    this.remainingTime = param1.readVarUhInt();
    if (this.remainingTime < 0) {
        throw new Error("Forbidden value (" + this.remainingTime + ") on element of GameFightTurnResumeMessage.remainingTime.");
    } else {
        return;
    }
};

GameFightTurnResumeMessage.prototype.getMessageId = function() {
    return 6307;
};

GameFightTurnResumeMessage.prototype.getClassName = function() {
    return 'GameFightTurnResumeMessage';
};

module.exports.id = 6307;
module.exports.class = GameFightTurnResumeMessage;
module.exports.getInstance = function() {
    return new GameFightTurnResumeMessage;
};
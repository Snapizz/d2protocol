var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameFightNewRoundMessage = function() {
    this.roundNumber = 0;
};

require('util').inherits(GameFightNewRoundMessage, d2com.NetworkMessage.class);

GameFightNewRoundMessage.prototype.serialize = function(output) {
    this.serializeAs_GameFightNewRoundMessage(output);
};

GameFightNewRoundMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightNewRoundMessage(input);
};

GameFightNewRoundMessage.prototype.serializeAs_GameFightNewRoundMessage = function(param1) {
    if (this.roundNumber < 0) {
        throw new Error("Forbidden value (" + this.roundNumber + ") on element roundNumber.");
    } else {
        param1.writeVarInt(this.roundNumber);
        return;
    }
};

GameFightNewRoundMessage.prototype.deserializeAs_GameFightNewRoundMessage = function(param1) {
    this.roundNumber = param1.readVarUhInt();
    if (this.roundNumber < 0) {
        throw new Error("Forbidden value (" + this.roundNumber + ") on element of GameFightNewRoundMessage.roundNumber.");
    } else {
        return;
    }
};

GameFightNewRoundMessage.prototype.getMessageId = function() {
    return 6239;
};

GameFightNewRoundMessage.prototype.getClassName = function() {
    return 'GameFightNewRoundMessage';
};

module.exports.id = 6239;
module.exports.class = GameFightNewRoundMessage;
module.exports.getInstance = function() {
    return new GameFightNewRoundMessage;
};
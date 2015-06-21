var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var GameFightTurnReadyMessage = function() {
    this.isReady = false;
};

require('util').inherits(GameFightTurnReadyMessage, d2com.NetworkMessage.class);

GameFightTurnReadyMessage.prototype.serialize = function(output) {
    this.serializeAs_GameFightTurnReadyMessage(output);
};

GameFightTurnReadyMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightTurnReadyMessage(input);
};

GameFightTurnReadyMessage.prototype.serializeAs_GameFightTurnReadyMessage = function(param1) {
    param1.writeBoolean(this.isReady);
};

GameFightTurnReadyMessage.prototype.deserializeAs_GameFightTurnReadyMessage = function(param1) {
    this.isReady = param1.readBoolean();
};

GameFightTurnReadyMessage.prototype.getMessageId = function() {
    return 716;
};

GameFightTurnReadyMessage.prototype.getClassName = function() {
    return 'GameFightTurnReadyMessage';
};

module.exports.id = 716;
module.exports.class = GameFightTurnReadyMessage;
module.exports.getInstance = function() {
    return new GameFightTurnReadyMessage;
};
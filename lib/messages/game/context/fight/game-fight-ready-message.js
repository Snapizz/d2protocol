var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameFightReadyMessage = function() {
    this.isReady = false;
};

require('util').inherits(GameFightReadyMessage, d2com.NetworkMessage.class);

GameFightReadyMessage.prototype.serialize = function(output) {
    this.serializeAs_GameFightReadyMessage(output);
};

GameFightReadyMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightReadyMessage(input);
};

GameFightReadyMessage.prototype.serializeAs_GameFightReadyMessage = function(param1) {
    param1.writeBoolean(this.isReady);
};

GameFightReadyMessage.prototype.deserializeAs_GameFightReadyMessage = function(param1) {
    this.isReady = param1.readBoolean();
};

GameFightReadyMessage.prototype.getMessageId = function() {
    return 708;
};

GameFightReadyMessage.prototype.getClassName = function() {
    return 'GameFightReadyMessage';
};

module.exports.id = 708;
module.exports.class = GameFightReadyMessage;
module.exports.getInstance = function() {
    return new GameFightReadyMessage;
};
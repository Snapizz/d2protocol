var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameFightTurnEndMessage = function() {
    this.id = 0;
};

require('util').inherits(GameFightTurnEndMessage, d2com.NetworkMessage.class);

GameFightTurnEndMessage.prototype.serialize = function(output) {
    this.serializeAs_GameFightTurnEndMessage(output);
};

GameFightTurnEndMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightTurnEndMessage(input);
};

GameFightTurnEndMessage.prototype.serializeAs_GameFightTurnEndMessage = function(param1) {
    param1.writeInt(this.id);
};

GameFightTurnEndMessage.prototype.deserializeAs_GameFightTurnEndMessage = function(param1) {
    this.id = param1.readInt();
};

GameFightTurnEndMessage.prototype.getMessageId = function() {
    return 719;
};

GameFightTurnEndMessage.prototype.getClassName = function() {
    return 'GameFightTurnEndMessage';
};

module.exports.id = 719;
module.exports.class = GameFightTurnEndMessage;
module.exports.getInstance = function() {
    return new GameFightTurnEndMessage;
};
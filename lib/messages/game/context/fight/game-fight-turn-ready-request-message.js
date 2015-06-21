var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameFightTurnReadyRequestMessage = module.exports = function() {
    this.id = 0;

    return this;
};

require('util').inherits(GameFightTurnReadyRequestMessage, d2com.NetworkMessage.class);

GameFightTurnReadyRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_GameFightTurnReadyRequestMessage(output);
};

GameFightTurnReadyRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightTurnReadyRequestMessage(input);
};

GameFightTurnReadyRequestMessage.prototype.serializeAs_GameFightTurnReadyRequestMessage = function(param1) {
    param1.writeInt(this.id);
};

GameFightTurnReadyRequestMessage.prototype.deserializeAs_GameFightTurnReadyRequestMessage = function(param1) {
    this.id = param1.readInt();
};

GameFightTurnReadyRequestMessage.prototype.getMessageId = function() {
    return 715;
};

GameFightTurnReadyRequestMessage.prototype.getClassName = function() {
    return 'GameFightTurnReadyRequestMessage';
};

module.exports.id = 715;
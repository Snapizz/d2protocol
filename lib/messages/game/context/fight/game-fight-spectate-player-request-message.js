var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameFightSpectatePlayerRequestMessage = function() {
    this.playerId = 0;
};

require('util').inherits(GameFightSpectatePlayerRequestMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GameFightSpectatePlayerRequestMessage();
};

GameFightSpectatePlayerRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_GameFightSpectatePlayerRequestMessage(output);
};

GameFightSpectatePlayerRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightSpectatePlayerRequestMessage(input);
};

GameFightSpectatePlayerRequestMessage.prototype.serializeAs_GameFightSpectatePlayerRequestMessage = function(param1) {
    param1.writeInt(this.playerId);
};

GameFightSpectatePlayerRequestMessage.prototype.deserializeAs_GameFightSpectatePlayerRequestMessage = function(param1) {
    this.playerId = param1.readInt();
};

GameFightSpectatePlayerRequestMessage.prototype.getMessageId = function() {
    return 6474;
};

GameFightSpectatePlayerRequestMessage.prototype.getClassName = function() {
    return 'GameFightSpectatePlayerRequestMessage';
};

module.exports.id = 6474;
module.exports.GameFightSpectatePlayerRequestMessage = GameFightSpectatePlayerRequestMessage;
var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameFightTurnStartPlayingMessage = module.exports = function() {


    return this;
};

require('util').inherits(GameFightTurnStartPlayingMessage, d2com.NetworkMessage.class);

GameFightTurnStartPlayingMessage.prototype.serialize = function(output) {
    this.serializeAs_GameFightTurnStartPlayingMessage(output);
};

GameFightTurnStartPlayingMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightTurnStartPlayingMessage(input);
};

GameFightTurnStartPlayingMessage.prototype.serializeAs_GameFightTurnStartPlayingMessage = function(param1) {

};

GameFightTurnStartPlayingMessage.prototype.deserializeAs_GameFightTurnStartPlayingMessage = function(param1) {

};

GameFightTurnStartPlayingMessage.prototype.getMessageId = function() {
    return 6465;
};

GameFightTurnStartPlayingMessage.prototype.getClassName = function() {
    return 'GameFightTurnStartPlayingMessage';
};

module.exports.id = 6465;
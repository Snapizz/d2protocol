var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var GameFightStartMessage = function() {

};

require('util').inherits(GameFightStartMessage, d2com.NetworkMessage.class);

GameFightStartMessage.prototype.serialize = function(output) {
    this.serializeAs_GameFightStartMessage(output);
};

GameFightStartMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightStartMessage(input);
};

GameFightStartMessage.prototype.serializeAs_GameFightStartMessage = function(param1) {

};

GameFightStartMessage.prototype.deserializeAs_GameFightStartMessage = function(param1) {

};

GameFightStartMessage.prototype.getMessageId = function() {
    return 712;
};

GameFightStartMessage.prototype.getClassName = function() {
    return 'GameFightStartMessage';
};

module.exports.id = 712;
module.exports.class = GameFightStartMessage;
module.exports.getInstance = function() {
    return new GameFightStartMessage;
};
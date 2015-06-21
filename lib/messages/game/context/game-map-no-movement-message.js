var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameMapNoMovementMessage = function() {

};

require('util').inherits(GameMapNoMovementMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GameMapNoMovementMessage();
};

GameMapNoMovementMessage.prototype.serialize = function(output) {
    this.serializeAs_GameMapNoMovementMessage(output);
};

GameMapNoMovementMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameMapNoMovementMessage(input);
};

GameMapNoMovementMessage.prototype.serializeAs_GameMapNoMovementMessage = function(param1) {

};

GameMapNoMovementMessage.prototype.deserializeAs_GameMapNoMovementMessage = function(param1) {

};

GameMapNoMovementMessage.prototype.getMessageId = function() {
    return 954;
};

GameMapNoMovementMessage.prototype.getClassName = function() {
    return 'GameMapNoMovementMessage';
};

module.exports.id = 954;
module.exports.GameMapNoMovementMessage = GameMapNoMovementMessage;
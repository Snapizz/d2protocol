var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameMapMovementConfirmMessage = function() {

};

require('util').inherits(GameMapMovementConfirmMessage, d2com.NetworkMessage.class);

GameMapMovementConfirmMessage.prototype.serialize = function(output) {
    this.serializeAs_GameMapMovementConfirmMessage(output);
};

GameMapMovementConfirmMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameMapMovementConfirmMessage(input);
};

GameMapMovementConfirmMessage.prototype.serializeAs_GameMapMovementConfirmMessage = function(param1) {

};

GameMapMovementConfirmMessage.prototype.deserializeAs_GameMapMovementConfirmMessage = function(param1) {

};

GameMapMovementConfirmMessage.prototype.getMessageId = function() {
    return 952;
};

GameMapMovementConfirmMessage.prototype.getClassName = function() {
    return 'GameMapMovementConfirmMessage';
};

module.exports.id = 952;
module.exports.class = GameMapMovementConfirmMessage;
module.exports.getInstance = function() {
    return new GameMapMovementConfirmMessage;
};
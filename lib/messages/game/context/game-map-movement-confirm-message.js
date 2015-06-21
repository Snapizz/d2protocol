var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameMapMovementConfirmMessage = module.exports = function() {


    return this;
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
var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameFightPlacementSwapPositionsErrorMessage = function() {

};

require('util').inherits(GameFightPlacementSwapPositionsErrorMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GameFightPlacementSwapPositionsErrorMessage();
};

GameFightPlacementSwapPositionsErrorMessage.prototype.serialize = function(output) {
    this.serializeAs_GameFightPlacementSwapPositionsErrorMessage(output);
};

GameFightPlacementSwapPositionsErrorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightPlacementSwapPositionsErrorMessage(input);
};

GameFightPlacementSwapPositionsErrorMessage.prototype.serializeAs_GameFightPlacementSwapPositionsErrorMessage = function(param1) {

};

GameFightPlacementSwapPositionsErrorMessage.prototype.deserializeAs_GameFightPlacementSwapPositionsErrorMessage = function(param1) {

};

GameFightPlacementSwapPositionsErrorMessage.prototype.getMessageId = function() {
    return 6548;
};

GameFightPlacementSwapPositionsErrorMessage.prototype.getClassName = function() {
    return 'GameFightPlacementSwapPositionsErrorMessage';
};

module.exports.id = 6548;
module.exports.GameFightPlacementSwapPositionsErrorMessage = GameFightPlacementSwapPositionsErrorMessage;
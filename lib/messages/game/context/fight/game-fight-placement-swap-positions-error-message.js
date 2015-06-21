var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameFightPlacementSwapPositionsErrorMessage = function() {

};

require('util').inherits(GameFightPlacementSwapPositionsErrorMessage, d2com.NetworkMessage.class);

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
module.exports.class = GameFightPlacementSwapPositionsErrorMessage;
module.exports.getInstance = function() {
    return new GameFightPlacementSwapPositionsErrorMessage;
};
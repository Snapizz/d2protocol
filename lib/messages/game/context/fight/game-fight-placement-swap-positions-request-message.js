var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameFightPlacementSwapPositionsRequestMessage = function() {
    this.requestedId = 0;
};

require('util').inherits(GameFightPlacementSwapPositionsRequestMessage, require('./game-fight-placement-position-request-message.js').class);

GameFightPlacementSwapPositionsRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_GameFightPlacementSwapPositionsRequestMessage(output);
};

GameFightPlacementSwapPositionsRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightPlacementSwapPositionsRequestMessage(input);
};

GameFightPlacementSwapPositionsRequestMessage.prototype.serializeAs_GameFightPlacementSwapPositionsRequestMessage = function(param1) {
    this.serializeAs_GameFightPlacementPositionRequestMessage(param1);
    param1.writeInt(this.requestedId);
};

GameFightPlacementSwapPositionsRequestMessage.prototype.deserializeAs_GameFightPlacementSwapPositionsRequestMessage = function(param1) {
    this.deserializeAs_GameFightPlacementPositionRequestMessage(param1);
    this.requestedId = param1.readInt();
};

GameFightPlacementSwapPositionsRequestMessage.prototype.getMessageId = function() {
    return 6541;
};

GameFightPlacementSwapPositionsRequestMessage.prototype.getClassName = function() {
    return 'GameFightPlacementSwapPositionsRequestMessage';
};

module.exports.id = 6541;
module.exports.class = GameFightPlacementSwapPositionsRequestMessage;
module.exports.getInstance = function() {
    return new GameFightPlacementSwapPositionsRequestMessage;
};
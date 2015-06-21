var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameFightPlacementSwapPositionsAcceptMessage = module.exports = function() {
    this.requestId = 0;

    return this;
};

require('util').inherits(GameFightPlacementSwapPositionsAcceptMessage, d2com.NetworkMessage.class);

GameFightPlacementSwapPositionsAcceptMessage.prototype.serialize = function(output) {
    this.serializeAs_GameFightPlacementSwapPositionsAcceptMessage(output);
};

GameFightPlacementSwapPositionsAcceptMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightPlacementSwapPositionsAcceptMessage(input);
};

GameFightPlacementSwapPositionsAcceptMessage.prototype.serializeAs_GameFightPlacementSwapPositionsAcceptMessage = function(param1) {
    if (this.requestId < 0) {
        throw new Error("Forbidden value (" + this.requestId + ") on element requestId.");
    } else {
        param1.writeInt(this.requestId);
        return;
    }
};

GameFightPlacementSwapPositionsAcceptMessage.prototype.deserializeAs_GameFightPlacementSwapPositionsAcceptMessage = function(param1) {
    this.requestId = param1.readInt();
    if (this.requestId < 0) {
        throw new Error("Forbidden value (" + this.requestId + ") on element of GameFightPlacementSwapPositionsAcceptMessage.requestId.");
    } else {
        return;
    }
};

GameFightPlacementSwapPositionsAcceptMessage.prototype.getMessageId = function() {
    return 6547;
};

GameFightPlacementSwapPositionsAcceptMessage.prototype.getClassName = function() {
    return 'GameFightPlacementSwapPositionsAcceptMessage';
};

module.exports.id = 6547;
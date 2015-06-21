var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameFightPlacementSwapPositionsOfferMessage = module.exports = function() {
    this.requestId = 0;
    this.requesterId = 0;
    this.requesterCellId = 0;
    this.requestedId = 0;
    this.requestedCellId = 0;

    return this;
};

require('util').inherits(GameFightPlacementSwapPositionsOfferMessage, d2com.NetworkMessage.class);

GameFightPlacementSwapPositionsOfferMessage.prototype.serialize = function(output) {
    this.serializeAs_GameFightPlacementSwapPositionsOfferMessage(output);
};

GameFightPlacementSwapPositionsOfferMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightPlacementSwapPositionsOfferMessage(input);
};

GameFightPlacementSwapPositionsOfferMessage.prototype.serializeAs_GameFightPlacementSwapPositionsOfferMessage = function(param1) {
    if (this.requestId < 0) {
        throw new Error("Forbidden value (" + this.requestId + ") on element requestId.");
    } else {
        param1.writeInt(this.requestId);
        if (this.requesterId < 0) {
            throw new Error("Forbidden value (" + this.requesterId + ") on element requesterId.");
        } else {
            param1.writeVarInt(this.requesterId);
            if (this.requesterCellId < 0 || this.requesterCellId > 559) {
                throw new Error("Forbidden value (" + this.requesterCellId + ") on element requesterCellId.");
            } else {
                param1.writeVarShort(this.requesterCellId);
                if (this.requestedId < 0) {
                    throw new Error("Forbidden value (" + this.requestedId + ") on element requestedId.");
                } else {
                    param1.writeVarInt(this.requestedId);
                    if (this.requestedCellId < 0 || this.requestedCellId > 559) {
                        throw new Error("Forbidden value (" + this.requestedCellId + ") on element requestedCellId.");
                    } else {
                        param1.writeVarShort(this.requestedCellId);
                        return;
                    }
                }
            }
        }
    }
};

GameFightPlacementSwapPositionsOfferMessage.prototype.deserializeAs_GameFightPlacementSwapPositionsOfferMessage = function(param1) {
    this.requestId = param1.readInt();
    if (this.requestId < 0) {
        throw new Error("Forbidden value (" + this.requestId + ") on element of GameFightPlacementSwapPositionsOfferMessage.requestId.");
    } else {
        this.requesterId = param1.readVarUhInt();
        if (this.requesterId < 0) {
            throw new Error("Forbidden value (" + this.requesterId + ") on element of GameFightPlacementSwapPositionsOfferMessage.requesterId.");
        } else {
            this.requesterCellId = param1.readVarUhShort();
            if (this.requesterCellId < 0 || this.requesterCellId > 559) {
                throw new Error("Forbidden value (" + this.requesterCellId + ") on element of GameFightPlacementSwapPositionsOfferMessage.requesterCellId.");
            } else {
                this.requestedId = param1.readVarUhInt();
                if (this.requestedId < 0) {
                    throw new Error("Forbidden value (" + this.requestedId + ") on element of GameFightPlacementSwapPositionsOfferMessage.requestedId.");
                } else {
                    this.requestedCellId = param1.readVarUhShort();
                    if (this.requestedCellId < 0 || this.requestedCellId > 559) {
                        throw new Error("Forbidden value (" + this.requestedCellId + ") on element of GameFightPlacementSwapPositionsOfferMessage.requestedCellId.");
                    } else {
                        return;
                    }
                }
            }
        }
    }
};

GameFightPlacementSwapPositionsOfferMessage.prototype.getMessageId = function() {
    return 6542;
};

GameFightPlacementSwapPositionsOfferMessage.prototype.getClassName = function() {
    return 'GameFightPlacementSwapPositionsOfferMessage';
};

module.exports.id = 6542;
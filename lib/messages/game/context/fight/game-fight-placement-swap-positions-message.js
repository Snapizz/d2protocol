var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var IdentifiedEntityDispositionInformations = require('../../../../types/game/context/identified-entity-disposition-informations.js').class;

var GameFightPlacementSwapPositionsMessage = function() {
    this.dispositions = [];
};

require('util').inherits(GameFightPlacementSwapPositionsMessage, d2com.NetworkMessage.class);

GameFightPlacementSwapPositionsMessage.prototype.serialize = function(output) {
    this.serializeAs_GameFightPlacementSwapPositionsMessage(output);
};

GameFightPlacementSwapPositionsMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightPlacementSwapPositionsMessage(input);
};

GameFightPlacementSwapPositionsMessage.prototype.serializeAs_GameFightPlacementSwapPositionsMessage = function(param1) {
    var _loc2_ = 0;
    while (_loc2_ < 2) {
        this.dispositions[_loc2_].serializeAs_IdentifiedEntityDispositionInformations(param1);
        _loc2_++;
    }
};

GameFightPlacementSwapPositionsMessage.prototype.deserializeAs_GameFightPlacementSwapPositionsMessage = function(param1) {
    var _loc2_ = 0;
    while (_loc2_ < 2) {
        this.dispositions[_loc2_] = new IdentifiedEntityDispositionInformations();
        this.dispositions[_loc2_].deserialize(param1);
        _loc2_++;
    }
};

GameFightPlacementSwapPositionsMessage.prototype.getMessageId = function() {
    return 6544;
};

GameFightPlacementSwapPositionsMessage.prototype.getClassName = function() {
    return 'GameFightPlacementSwapPositionsMessage';
};

module.exports.id = 6544;
module.exports.class = GameFightPlacementSwapPositionsMessage;
module.exports.getInstance = function() {
    return new GameFightPlacementSwapPositionsMessage;
};
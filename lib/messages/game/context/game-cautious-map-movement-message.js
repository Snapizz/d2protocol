var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameCautiousMapMovementMessage = function() {

};

require('util').inherits(GameCautiousMapMovementMessage, require('./game-map-movement-message.js'));

module.exports = function() {
    return new GameCautiousMapMovementMessage();
};

GameCautiousMapMovementMessage.prototype.serialize = function(output) {
    this.serializeAs_GameCautiousMapMovementMessage(output);
};

GameCautiousMapMovementMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameCautiousMapMovementMessage(input);
};

GameCautiousMapMovementMessage.prototype.serializeAs_GameCautiousMapMovementMessage = function(param1) {
    this.serializeAs_GameMapMovementMessage(param1);
};

GameCautiousMapMovementMessage.prototype.deserializeAs_GameCautiousMapMovementMessage = function(param1) {
    this.deserializeAs_GameMapMovementMessage(param1);
};

GameCautiousMapMovementMessage.prototype.getMessageId = function() {
    return 6497;
};

GameCautiousMapMovementMessage.prototype.getClassName = function() {
    return 'GameCautiousMapMovementMessage';
};

module.exports.id = 6497;
module.exports.GameCautiousMapMovementMessage = GameCautiousMapMovementMessage;
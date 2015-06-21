var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var ActorOrientation = require('../../../types/game/context/actor-orientation.js').class;

var GameMapChangeOrientationMessage = function() {
    this.orientation = new ActorOrientation();
};

require('util').inherits(GameMapChangeOrientationMessage, d2com.NetworkMessage.class);

GameMapChangeOrientationMessage.prototype.serialize = function(output) {
    this.serializeAs_GameMapChangeOrientationMessage(output);
};

GameMapChangeOrientationMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameMapChangeOrientationMessage(input);
};

GameMapChangeOrientationMessage.prototype.serializeAs_GameMapChangeOrientationMessage = function(param1) {
    this.orientation.serializeAs_ActorOrientation(param1);
};

GameMapChangeOrientationMessage.prototype.deserializeAs_GameMapChangeOrientationMessage = function(param1) {
    this.orientation = new ActorOrientation();
    this.orientation.deserialize(param1);
};

GameMapChangeOrientationMessage.prototype.getMessageId = function() {
    return 946;
};

GameMapChangeOrientationMessage.prototype.getClassName = function() {
    return 'GameMapChangeOrientationMessage';
};

module.exports.id = 946;
module.exports.class = GameMapChangeOrientationMessage;
module.exports.getInstance = function() {
    return new GameMapChangeOrientationMessage;
};
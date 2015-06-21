var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameActionFightPointsVariationMessage = function() {
    this.targetId = 0;
    this.delta = 0;
};

require('util').inherits(GameActionFightPointsVariationMessage, require('../abstract-game-action-message.js'));

module.exports = function() {
    return new GameActionFightPointsVariationMessage();
};

GameActionFightPointsVariationMessage.prototype.serialize = function(output) {
    this.serializeAs_GameActionFightPointsVariationMessage(output);
};

GameActionFightPointsVariationMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameActionFightPointsVariationMessage(input);
};

GameActionFightPointsVariationMessage.prototype.serializeAs_GameActionFightPointsVariationMessage = function(param1) {
    this.serializeAs_AbstractGameActionMessage(param1);
    param1.writeInt(this.targetId);
    param1.writeShort(this.delta);
};

GameActionFightPointsVariationMessage.prototype.deserializeAs_GameActionFightPointsVariationMessage = function(param1) {
    this.deserializeAs_AbstractGameActionMessage(param1);
    this.targetId = param1.readInt();
    this.delta = param1.readShort();
};

GameActionFightPointsVariationMessage.prototype.getMessageId = function() {
    return 1030;
};

GameActionFightPointsVariationMessage.prototype.getClassName = function() {
    return 'GameActionFightPointsVariationMessage';
};

module.exports.id = 1030;
module.exports.GameActionFightPointsVariationMessage = GameActionFightPointsVariationMessage;
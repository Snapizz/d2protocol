var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var EntityMovementInformations = require('../../../types/game/context/entity-movement-informations.js').class;

var GameContextMoveElementMessage = module.exports = function() {
    this.movement = new EntityMovementInformations();

    return this;
};

require('util').inherits(GameContextMoveElementMessage, d2com.NetworkMessage.class);

GameContextMoveElementMessage.prototype.serialize = function(output) {
    this.serializeAs_GameContextMoveElementMessage(output);
};

GameContextMoveElementMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameContextMoveElementMessage(input);
};

GameContextMoveElementMessage.prototype.serializeAs_GameContextMoveElementMessage = function(param1) {
    this.movement.serializeAs_EntityMovementInformations(param1);
};

GameContextMoveElementMessage.prototype.deserializeAs_GameContextMoveElementMessage = function(param1) {
    this.movement = new EntityMovementInformations();
    this.movement.deserialize(param1);
};

GameContextMoveElementMessage.prototype.getMessageId = function() {
    return 253;
};

GameContextMoveElementMessage.prototype.getClassName = function() {
    return 'GameContextMoveElementMessage';
};

module.exports.id = 253;
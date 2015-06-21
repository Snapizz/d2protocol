var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var EntityLook = require('../../../../types/game/look/entity-look.js').class;

var GameActionFightChangeLookMessage = function() {
    this.targetId = 0;
    this.entityLook = new EntityLook();
};

require('util').inherits(GameActionFightChangeLookMessage, require('../abstract-game-action-message.js').class);

GameActionFightChangeLookMessage.prototype.serialize = function(output) {
    this.serializeAs_GameActionFightChangeLookMessage(output);
};

GameActionFightChangeLookMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameActionFightChangeLookMessage(input);
};

GameActionFightChangeLookMessage.prototype.serializeAs_GameActionFightChangeLookMessage = function(param1) {
    this.serializeAs_AbstractGameActionMessageAs_AbstractGameActionMessage(param1);
    param1.writeInt(this.targetId);
    this.entityLook.serializeAs_EntityLook(param1);
};

GameActionFightChangeLookMessage.prototype.deserializeAs_GameActionFightChangeLookMessage = function(param1) {
    this.deserializeAs_AbstractGameActionMessage(param1);
    this.targetId = param1.readInt();
    this.entityLook = new EntityLook();
    this.entityLook.deserialize(param1);
};

GameActionFightChangeLookMessage.prototype.getMessageId = function() {
    return 5532;
};

GameActionFightChangeLookMessage.prototype.getClassName = function() {
    return 'GameActionFightChangeLookMessage';
};

module.exports.id = 5532;
module.exports.class = GameActionFightChangeLookMessage;
module.exports.getInstance = function() {
    return new GameActionFightChangeLookMessage;
};
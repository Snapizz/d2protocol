var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameActionFightReflectDamagesMessage = function() {
    this.targetId = 0;
};

require('util').inherits(GameActionFightReflectDamagesMessage, require('../abstract-game-action-message.js').class);

GameActionFightReflectDamagesMessage.prototype.serialize = function(output) {
    this.serializeAs_GameActionFightReflectDamagesMessage(output);
};

GameActionFightReflectDamagesMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameActionFightReflectDamagesMessage(input);
};

GameActionFightReflectDamagesMessage.prototype.serializeAs_GameActionFightReflectDamagesMessage = function(param1) {
    this.serializeAs_AbstractGameActionMessageAs_AbstractGameActionMessage(param1);
    param1.writeInt(this.targetId);
};

GameActionFightReflectDamagesMessage.prototype.deserializeAs_GameActionFightReflectDamagesMessage = function(param1) {
    this.deserializeAs_AbstractGameActionMessage(param1);
    this.targetId = param1.readInt();
};

GameActionFightReflectDamagesMessage.prototype.getMessageId = function() {
    return 5530;
};

GameActionFightReflectDamagesMessage.prototype.getClassName = function() {
    return 'GameActionFightReflectDamagesMessage';
};

module.exports.id = 5530;
module.exports.class = GameActionFightReflectDamagesMessage;
module.exports.getInstance = function() {
    return new GameActionFightReflectDamagesMessage;
};
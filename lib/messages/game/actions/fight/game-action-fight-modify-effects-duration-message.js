var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameActionFightModifyEffectsDurationMessage = function() {
    this.targetId = 0;
    this.delta = 0;
};

require('util').inherits(GameActionFightModifyEffectsDurationMessage, require('../abstract-game-action-message.js').AbstractGameActionMessage);

module.exports = function() {
    return new GameActionFightModifyEffectsDurationMessage();
};

GameActionFightModifyEffectsDurationMessage.prototype.serialize = function(output) {
    this.serializeAs_GameActionFightModifyEffectsDurationMessage(output);
};

GameActionFightModifyEffectsDurationMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameActionFightModifyEffectsDurationMessage(input);
};

GameActionFightModifyEffectsDurationMessage.prototype.serializeAs_GameActionFightModifyEffectsDurationMessage = function(param1) {
    this.serializeAs_AbstractGameActionMessage(param1);
    param1.writeInt(this.targetId);
    param1.writeShort(this.delta);
};

GameActionFightModifyEffectsDurationMessage.prototype.deserializeAs_GameActionFightModifyEffectsDurationMessage = function(param1) {
    this.deserializeAs_AbstractGameActionMessage(param1);
    this.targetId = param1.readInt();
    this.delta = param1.readShort();
};

GameActionFightModifyEffectsDurationMessage.prototype.getMessageId = function() {
    return 6304;
};

GameActionFightModifyEffectsDurationMessage.prototype.getClassName = function() {
    return 'GameActionFightModifyEffectsDurationMessage';
};

module.exports.id = 6304;
module.exports.GameActionFightModifyEffectsDurationMessage = GameActionFightModifyEffectsDurationMessage;
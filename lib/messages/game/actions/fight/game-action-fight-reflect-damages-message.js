var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameActionFightReflectDamagesMessage = module.exports = function() {
    this.targetId = 0;

    return this;
};

require('util').inherits(GameActionFightReflectDamagesMessage, require('../abstract-game-action-message.js'));

GameActionFightReflectDamagesMessage.prototype.serialize = function(output) {
    this.serializeAs_GameActionFightReflectDamagesMessage(output);
};

GameActionFightReflectDamagesMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameActionFightReflectDamagesMessage(input);
};

GameActionFightReflectDamagesMessage.prototype.serializeAs_GameActionFightReflectDamagesMessage = function(param1) {
    this.serializeAs_AbstractGameActionMessage(param1);
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
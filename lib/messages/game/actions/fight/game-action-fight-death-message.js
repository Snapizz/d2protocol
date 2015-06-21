var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameActionFightDeathMessage = module.exports = function() {
    this.targetId = 0;

    return this;
};

require('util').inherits(GameActionFightDeathMessage, require('../abstract-game-action-message.js'));

GameActionFightDeathMessage.prototype.serialize = function(output) {
    this.serializeAs_GameActionFightDeathMessage(output);
};

GameActionFightDeathMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameActionFightDeathMessage(input);
};

GameActionFightDeathMessage.prototype.serializeAs_GameActionFightDeathMessage = function(param1) {
    this.serializeAs_AbstractGameActionMessage(param1);
    param1.writeInt(this.targetId);
};

GameActionFightDeathMessage.prototype.deserializeAs_GameActionFightDeathMessage = function(param1) {
    this.deserializeAs_AbstractGameActionMessage(param1);
    this.targetId = param1.readInt();
};

GameActionFightDeathMessage.prototype.getMessageId = function() {
    return 1099;
};

GameActionFightDeathMessage.prototype.getClassName = function() {
    return 'GameActionFightDeathMessage';
};

module.exports.id = 1099;
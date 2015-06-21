var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameActionFightReflectSpellMessage = function() {
    this.targetId = 0;
};

require('util').inherits(GameActionFightReflectSpellMessage, require('../abstract-game-action-message.js'));

module.exports = function() {
    return new GameActionFightReflectSpellMessage();
};

GameActionFightReflectSpellMessage.prototype.serialize = function(output) {
    this.serializeAs_GameActionFightReflectSpellMessage(output);
};

GameActionFightReflectSpellMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameActionFightReflectSpellMessage(input);
};

GameActionFightReflectSpellMessage.prototype.serializeAs_GameActionFightReflectSpellMessage = function(param1) {
    this.serializeAs_AbstractGameActionMessage(param1);
    param1.writeInt(this.targetId);
};

GameActionFightReflectSpellMessage.prototype.deserializeAs_GameActionFightReflectSpellMessage = function(param1) {
    this.deserializeAs_AbstractGameActionMessage(param1);
    this.targetId = param1.readInt();
};

GameActionFightReflectSpellMessage.prototype.getMessageId = function() {
    return 5531;
};

GameActionFightReflectSpellMessage.prototype.getClassName = function() {
    return 'GameActionFightReflectSpellMessage';
};

module.exports.id = 5531;
module.exports.GameActionFightReflectSpellMessage = GameActionFightReflectSpellMessage;
var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameActionFightKillMessage = function() {
    this.targetId = 0;
};

require('util').inherits(GameActionFightKillMessage, require('../abstract-game-action-message.js').AbstractGameActionMessage);

module.exports = function() {
    return new GameActionFightKillMessage();
};

GameActionFightKillMessage.prototype.serialize = function(output) {
    this.serializeAs_GameActionFightKillMessage(output);
};

GameActionFightKillMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameActionFightKillMessage(input);
};

GameActionFightKillMessage.prototype.serializeAs_GameActionFightKillMessage = function(param1) {
    this.serializeAs_AbstractGameActionMessage(param1);
    param1.writeInt(this.targetId);
};

GameActionFightKillMessage.prototype.deserializeAs_GameActionFightKillMessage = function(param1) {
    this.deserializeAs_AbstractGameActionMessage(param1);
    this.targetId = param1.readInt();
};

GameActionFightKillMessage.prototype.getMessageId = function() {
    return 5571;
};

GameActionFightKillMessage.prototype.getClassName = function() {
    return 'GameActionFightKillMessage';
};

module.exports.id = 5571;
module.exports.GameActionFightKillMessage = GameActionFightKillMessage;
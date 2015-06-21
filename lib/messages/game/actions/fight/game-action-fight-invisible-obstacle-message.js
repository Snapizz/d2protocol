var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameActionFightInvisibleObstacleMessage = module.exports = function() {
    this.sourceSpellId = 0;

    return this;
};

require('util').inherits(GameActionFightInvisibleObstacleMessage, require('../abstract-game-action-message.js'));

GameActionFightInvisibleObstacleMessage.prototype.serialize = function(output) {
    this.serializeAs_GameActionFightInvisibleObstacleMessage(output);
};

GameActionFightInvisibleObstacleMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameActionFightInvisibleObstacleMessage(input);
};

GameActionFightInvisibleObstacleMessage.prototype.serializeAs_GameActionFightInvisibleObstacleMessage = function(param1) {
    this.serializeAs_AbstractGameActionMessage(param1);
    if (this.sourceSpellId < 0) {
        throw new Error("Forbidden value (" + this.sourceSpellId + ") on element sourceSpellId.");
    } else {
        param1.writeVarInt(this.sourceSpellId);
        return;
    }
};

GameActionFightInvisibleObstacleMessage.prototype.deserializeAs_GameActionFightInvisibleObstacleMessage = function(param1) {
    this.deserializeAs_AbstractGameActionMessage(param1);
    this.sourceSpellId = param1.readVarUhInt();
    if (this.sourceSpellId < 0) {
        throw new Error("Forbidden value (" + this.sourceSpellId + ") on element of GameActionFightInvisibleObstacleMessage.sourceSpellId.");
    } else {
        return;
    }
};

GameActionFightInvisibleObstacleMessage.prototype.getMessageId = function() {
    return 5820;
};

GameActionFightInvisibleObstacleMessage.prototype.getClassName = function() {
    return 'GameActionFightInvisibleObstacleMessage';
};

module.exports.id = 5820;
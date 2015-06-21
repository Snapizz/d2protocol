var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameActionFightReduceDamagesMessage = function() {
    this.targetId = 0;
    this.amount = 0;
};

require('util').inherits(GameActionFightReduceDamagesMessage, require('../abstract-game-action-message.js').class);

GameActionFightReduceDamagesMessage.prototype.serialize = function(output) {
    this.serializeAs_GameActionFightReduceDamagesMessage(output);
};

GameActionFightReduceDamagesMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameActionFightReduceDamagesMessage(input);
};

GameActionFightReduceDamagesMessage.prototype.serializeAs_GameActionFightReduceDamagesMessage = function(param1) {
    this.serializeAs_AbstractGameActionMessage(param1);
    param1.writeInt(this.targetId);
    if (this.amount < 0) {
        throw new Error("Forbidden value (" + this.amount + ") on element amount.");
    } else {
        param1.writeVarInt(this.amount);
        return;
    }
};

GameActionFightReduceDamagesMessage.prototype.deserializeAs_GameActionFightReduceDamagesMessage = function(param1) {
    this.deserializeAs_AbstractGameActionMessage(param1);
    this.targetId = param1.readInt();
    this.amount = param1.readVarUhInt();
    if (this.amount < 0) {
        throw new Error("Forbidden value (" + this.amount + ") on element of GameActionFightReduceDamagesMessage.amount.");
    } else {
        return;
    }
};

GameActionFightReduceDamagesMessage.prototype.getMessageId = function() {
    return 5526;
};

GameActionFightReduceDamagesMessage.prototype.getClassName = function() {
    return 'GameActionFightReduceDamagesMessage';
};

module.exports.id = 5526;
module.exports.class = GameActionFightReduceDamagesMessage;
module.exports.getInstance = function() {
    return new GameActionFightReduceDamagesMessage;
};
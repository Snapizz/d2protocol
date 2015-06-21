var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameActionFightInvisibleDetectedMessage = function() {
    this.targetId = 0;
    this.cellId = 0;
};

require('util').inherits(GameActionFightInvisibleDetectedMessage, require('../abstract-game-action-message.js').class);

GameActionFightInvisibleDetectedMessage.prototype.serialize = function(output) {
    this.serializeAs_GameActionFightInvisibleDetectedMessage(output);
};

GameActionFightInvisibleDetectedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameActionFightInvisibleDetectedMessage(input);
};

GameActionFightInvisibleDetectedMessage.prototype.serializeAs_GameActionFightInvisibleDetectedMessage = function(param1) {
    this.serializeAs_AbstractGameActionMessageAs_AbstractGameActionMessage(param1);
    param1.writeInt(this.targetId);
    if (this.cellId < -1 || this.cellId > 559) {
        throw new Error("Forbidden value (" + this.cellId + ") on element cellId.");
    } else {
        param1.writeShort(this.cellId);
        return;
    }
};

GameActionFightInvisibleDetectedMessage.prototype.deserializeAs_GameActionFightInvisibleDetectedMessage = function(param1) {
    this.deserializeAs_AbstractGameActionMessage(param1);
    this.targetId = param1.readInt();
    this.cellId = param1.readShort();
    if (this.cellId < -1 || this.cellId > 559) {
        throw new Error("Forbidden value (" + this.cellId + ") on element of GameActionFightInvisibleDetectedMessage.cellId.");
    } else {
        return;
    }
};

GameActionFightInvisibleDetectedMessage.prototype.getMessageId = function() {
    return 6320;
};

GameActionFightInvisibleDetectedMessage.prototype.getClassName = function() {
    return 'GameActionFightInvisibleDetectedMessage';
};

module.exports.id = 6320;
module.exports.class = GameActionFightInvisibleDetectedMessage;
module.exports.getInstance = function() {
    return new GameActionFightInvisibleDetectedMessage;
};
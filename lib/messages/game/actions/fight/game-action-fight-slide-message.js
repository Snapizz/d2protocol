var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameActionFightSlideMessage = function() {
    this.targetId = 0;
    this.startCellId = 0;
    this.endCellId = 0;
};

require('util').inherits(GameActionFightSlideMessage, require('../abstract-game-action-message.js').AbstractGameActionMessage);

module.exports = function() {
    return new GameActionFightSlideMessage();
};

GameActionFightSlideMessage.prototype.serialize = function(output) {
    this.serializeAs_GameActionFightSlideMessage(output);
};

GameActionFightSlideMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameActionFightSlideMessage(input);
};

GameActionFightSlideMessage.prototype.serializeAs_GameActionFightSlideMessage = function(param1) {
    this.serializeAs_AbstractGameActionMessage(param1);
    param1.writeInt(this.targetId);
    if (this.startCellId < -1 || this.startCellId > 559) {
        throw new Error("Forbidden value (" + this.startCellId + ") on element startCellId.");
    } else {
        param1.writeShort(this.startCellId);
        if (this.endCellId < -1 || this.endCellId > 559) {
            throw new Error("Forbidden value (" + this.endCellId + ") on element endCellId.");
        } else {
            param1.writeShort(this.endCellId);
            return;
        }
    }
};

GameActionFightSlideMessage.prototype.deserializeAs_GameActionFightSlideMessage = function(param1) {
    this.deserializeAs_AbstractGameActionMessage(param1);
    this.targetId = param1.readInt();
    this.startCellId = param1.readShort();
    if (this.startCellId < -1 || this.startCellId > 559) {
        throw new Error("Forbidden value (" + this.startCellId + ") on element of GameActionFightSlideMessage.startCellId.");
    } else {
        this.endCellId = param1.readShort();
        if (this.endCellId < -1 || this.endCellId > 559) {
            throw new Error("Forbidden value (" + this.endCellId + ") on element of GameActionFightSlideMessage.endCellId.");
        } else {
            return;
        }
    }
};

GameActionFightSlideMessage.prototype.getMessageId = function() {
    return 5525;
};

GameActionFightSlideMessage.prototype.getClassName = function() {
    return 'GameActionFightSlideMessage';
};

module.exports.id = 5525;
module.exports.GameActionFightSlideMessage = GameActionFightSlideMessage;
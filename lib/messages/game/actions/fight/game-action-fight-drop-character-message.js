var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameActionFightDropCharacterMessage = function() {
    this.targetId = 0;
    this.cellId = 0;
};

require('util').inherits(GameActionFightDropCharacterMessage, require('../abstract-game-action-message.js').class);

GameActionFightDropCharacterMessage.prototype.serialize = function(output) {
    this.serializeAs_GameActionFightDropCharacterMessage(output);
};

GameActionFightDropCharacterMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameActionFightDropCharacterMessage(input);
};

GameActionFightDropCharacterMessage.prototype.serializeAs_GameActionFightDropCharacterMessage = function(param1) {
    this.serializeAs_AbstractGameActionMessageAs_AbstractGameActionMessage(param1);
    param1.writeInt(this.targetId);
    if (this.cellId < -1 || this.cellId > 559) {
        throw new Error("Forbidden value (" + this.cellId + ") on element cellId.");
    } else {
        param1.writeShort(this.cellId);
        return;
    }
};

GameActionFightDropCharacterMessage.prototype.deserializeAs_GameActionFightDropCharacterMessage = function(param1) {
    this.deserializeAs_AbstractGameActionMessage(param1);
    this.targetId = param1.readInt();
    this.cellId = param1.readShort();
    if (this.cellId < -1 || this.cellId > 559) {
        throw new Error("Forbidden value (" + this.cellId + ") on element of GameActionFightDropCharacterMessage.cellId.");
    } else {
        return;
    }
};

GameActionFightDropCharacterMessage.prototype.getMessageId = function() {
    return 5826;
};

GameActionFightDropCharacterMessage.prototype.getClassName = function() {
    return 'GameActionFightDropCharacterMessage';
};

module.exports.id = 5826;
module.exports.class = GameActionFightDropCharacterMessage;
module.exports.getInstance = function() {
    return new GameActionFightDropCharacterMessage;
};
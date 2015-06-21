var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameActionFightUnmarkCellsMessage = module.exports = function() {
    this.markId = 0;

    return this;
};

require('util').inherits(GameActionFightUnmarkCellsMessage, require('../abstract-game-action-message.js'));

GameActionFightUnmarkCellsMessage.prototype.serialize = function(output) {
    this.serializeAs_GameActionFightUnmarkCellsMessage(output);
};

GameActionFightUnmarkCellsMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameActionFightUnmarkCellsMessage(input);
};

GameActionFightUnmarkCellsMessage.prototype.serializeAs_GameActionFightUnmarkCellsMessage = function(param1) {
    this.serializeAs_AbstractGameActionMessage(param1);
    param1.writeShort(this.markId);
};

GameActionFightUnmarkCellsMessage.prototype.deserializeAs_GameActionFightUnmarkCellsMessage = function(param1) {
    this.deserializeAs_AbstractGameActionMessage(param1);
    this.markId = param1.readShort();
};

GameActionFightUnmarkCellsMessage.prototype.getMessageId = function() {
    return 5570;
};

GameActionFightUnmarkCellsMessage.prototype.getClassName = function() {
    return 'GameActionFightUnmarkCellsMessage';
};

module.exports.id = 5570;
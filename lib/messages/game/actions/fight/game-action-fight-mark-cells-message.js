var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var GameActionMark = require('../../../../types/game/actions/fight/game-action-mark.js').class;

var GameActionFightMarkCellsMessage = function() {
    this.mark = new GameActionMark();
};

require('util').inherits(GameActionFightMarkCellsMessage, require('../abstract-game-action-message.js').class);

GameActionFightMarkCellsMessage.prototype.serialize = function(output) {
    this.serializeAs_GameActionFightMarkCellsMessage(output);
};

GameActionFightMarkCellsMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameActionFightMarkCellsMessage(input);
};

GameActionFightMarkCellsMessage.prototype.serializeAs_GameActionFightMarkCellsMessage = function(param1) {
    this.serializeAs_AbstractGameActionMessage(param1);
    this.mark.serializeAs_GameActionMark(param1);
};

GameActionFightMarkCellsMessage.prototype.deserializeAs_GameActionFightMarkCellsMessage = function(param1) {
    this.deserializeAs_AbstractGameActionMessage(param1);
    this.mark = new GameActionMark();
    this.mark.deserialize(param1);
};

GameActionFightMarkCellsMessage.prototype.getMessageId = function() {
    return 5540;
};

GameActionFightMarkCellsMessage.prototype.getClassName = function() {
    return 'GameActionFightMarkCellsMessage';
};

module.exports.id = 5540;
module.exports.class = GameActionFightMarkCellsMessage;
module.exports.getInstance = function() {
    return new GameActionFightMarkCellsMessage;
};
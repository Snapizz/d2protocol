var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var GameActionMark = require('../../../../types/game/actions/fight/game-action-mark.js').class;

var GameActionFightMarkCellsMessage = module.exports = function() {
    this.mark = new GameActionMark();

    return this;
};

require('util').inherits(GameActionFightMarkCellsMessage, require('../abstract-game-action-message.js'));

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
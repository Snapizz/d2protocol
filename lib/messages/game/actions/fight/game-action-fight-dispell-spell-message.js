var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameActionFightDispellSpellMessage = function() {
    this.spellId = 0;
};

require('util').inherits(GameActionFightDispellSpellMessage, require('./game-action-fight-dispell-message.js'));

module.exports = function() {
    return new GameActionFightDispellSpellMessage();
};

GameActionFightDispellSpellMessage.prototype.serialize = function(output) {
    this.serializeAs_GameActionFightDispellSpellMessage(output);
};

GameActionFightDispellSpellMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameActionFightDispellSpellMessage(input);
};

GameActionFightDispellSpellMessage.prototype.serializeAs_GameActionFightDispellSpellMessage = function(param1) {
    this.serializeAs_GameActionFightDispellMessage(param1);
    if (this.spellId < 0) {
        throw new Error("Forbidden value (" + this.spellId + ") on element spellId.");
    } else {
        param1.writeVarShort(this.spellId);
        return;
    }
};

GameActionFightDispellSpellMessage.prototype.deserializeAs_GameActionFightDispellSpellMessage = function(param1) {
    this.deserializeAs_GameActionFightDispellMessage(param1);
    this.spellId = param1.readVarUhShort();
    if (this.spellId < 0) {
        throw new Error("Forbidden value (" + this.spellId + ") on element of GameActionFightDispellSpellMessage.spellId.");
    } else {
        return;
    }
};

GameActionFightDispellSpellMessage.prototype.getMessageId = function() {
    return 6176;
};

GameActionFightDispellSpellMessage.prototype.getClassName = function() {
    return 'GameActionFightDispellSpellMessage';
};

module.exports.id = 6176;
module.exports.GameActionFightDispellSpellMessage = GameActionFightDispellSpellMessage;
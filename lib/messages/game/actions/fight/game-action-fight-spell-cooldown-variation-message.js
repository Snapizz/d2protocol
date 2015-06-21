var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameActionFightSpellCooldownVariationMessage = function() {
    this.targetId = 0;
    this.spellId = 0;
    this.value = 0;
};

require('util').inherits(GameActionFightSpellCooldownVariationMessage, require('../abstract-game-action-message.js').AbstractGameActionMessage);

module.exports = function() {
    return new GameActionFightSpellCooldownVariationMessage();
};

GameActionFightSpellCooldownVariationMessage.prototype.serialize = function(output) {
    this.serializeAs_GameActionFightSpellCooldownVariationMessage(output);
};

GameActionFightSpellCooldownVariationMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameActionFightSpellCooldownVariationMessage(input);
};

GameActionFightSpellCooldownVariationMessage.prototype.serializeAs_GameActionFightSpellCooldownVariationMessage = function(param1) {
    this.serializeAs_AbstractGameActionMessage(param1);
    param1.writeInt(this.targetId);
    if (this.spellId < 0) {
        throw new Error("Forbidden value (" + this.spellId + ") on element spellId.");
    } else {
        param1.writeVarShort(this.spellId);
        param1.writeVarShort(this.value);
        return;
    }
};

GameActionFightSpellCooldownVariationMessage.prototype.deserializeAs_GameActionFightSpellCooldownVariationMessage = function(param1) {
    this.deserializeAs_AbstractGameActionMessage(param1);
    this.targetId = param1.readInt();
    this.spellId = param1.readVarUhShort();
    if (this.spellId < 0) {
        throw new Error("Forbidden value (" + this.spellId + ") on element of GameActionFightSpellCooldownVariationMessage.spellId.");
    } else {
        this.value = param1.readVarShort();
        return;
    }
};

GameActionFightSpellCooldownVariationMessage.prototype.getMessageId = function() {
    return 6219;
};

GameActionFightSpellCooldownVariationMessage.prototype.getClassName = function() {
    return 'GameActionFightSpellCooldownVariationMessage';
};

module.exports.id = 6219;
module.exports.GameActionFightSpellCooldownVariationMessage = GameActionFightSpellCooldownVariationMessage;
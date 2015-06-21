var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameActionFightNoSpellCastMessage = function() {
    this.spellLevelId = 0;
};

require('util').inherits(GameActionFightNoSpellCastMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GameActionFightNoSpellCastMessage();
};

GameActionFightNoSpellCastMessage.prototype.serialize = function(output) {
    this.serializeAs_GameActionFightNoSpellCastMessage(output);
};

GameActionFightNoSpellCastMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameActionFightNoSpellCastMessage(input);
};

GameActionFightNoSpellCastMessage.prototype.serializeAs_GameActionFightNoSpellCastMessage = function(param1) {
    if (this.spellLevelId < 0) {
        throw new Error("Forbidden value (" + this.spellLevelId + ") on element spellLevelId.");
    } else {
        param1.writeVarInt(this.spellLevelId);
        return;
    }
};

GameActionFightNoSpellCastMessage.prototype.deserializeAs_GameActionFightNoSpellCastMessage = function(param1) {
    this.spellLevelId = param1.readVarUhInt();
    if (this.spellLevelId < 0) {
        throw new Error("Forbidden value (" + this.spellLevelId + ") on element of GameActionFightNoSpellCastMessage.spellLevelId.");
    } else {
        return;
    }
};

GameActionFightNoSpellCastMessage.prototype.getMessageId = function() {
    return 6132;
};

GameActionFightNoSpellCastMessage.prototype.getClassName = function() {
    return 'GameActionFightNoSpellCastMessage';
};

module.exports.id = 6132;
module.exports.GameActionFightNoSpellCastMessage = GameActionFightNoSpellCastMessage;
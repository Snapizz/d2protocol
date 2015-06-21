var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameActionFightCloseCombatMessage = function() {
    this.weaponGenericId = 0;
};

require('util').inherits(GameActionFightCloseCombatMessage, require('./abstract-game-action-fight-targeted-ability-message.js').class);

GameActionFightCloseCombatMessage.prototype.serialize = function(output) {
    this.serializeAs_GameActionFightCloseCombatMessage(output);
};

GameActionFightCloseCombatMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameActionFightCloseCombatMessage(input);
};

GameActionFightCloseCombatMessage.prototype.serializeAs_GameActionFightCloseCombatMessage = function(param1) {
    this.serializeAs_AbstractGameActionFightTargetedAbilityMessage(param1);
    if (this.weaponGenericId < 0) {
        throw new Error("Forbidden value (" + this.weaponGenericId + ") on element weaponGenericId.");
    } else {
        param1.writeVarShort(this.weaponGenericId);
        return;
    }
};

GameActionFightCloseCombatMessage.prototype.deserializeAs_GameActionFightCloseCombatMessage = function(param1) {
    this.deserializeAs_AbstractGameActionFightTargetedAbilityMessage(param1);
    this.weaponGenericId = param1.readVarUhShort();
    if (this.weaponGenericId < 0) {
        throw new Error("Forbidden value (" + this.weaponGenericId + ") on element of GameActionFightCloseCombatMessage.weaponGenericId.");
    } else {
        return;
    }
};

GameActionFightCloseCombatMessage.prototype.getMessageId = function() {
    return 6116;
};

GameActionFightCloseCombatMessage.prototype.getClassName = function() {
    return 'GameActionFightCloseCombatMessage';
};

module.exports.id = 6116;
module.exports.class = GameActionFightCloseCombatMessage;
module.exports.getInstance = function() {
    return new GameActionFightCloseCombatMessage;
};
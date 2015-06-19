var d2com = require('d2com'),
  BaseMessage = require('./abstract-game-action-fight-targeted-ability-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameActionFightCloseCombatMessage = function() {
  this.weaponGenericId = 0;
};

util.inherits(GameActionFightCloseCombatMessage, BaseMessage);

GameActionFightCloseCombatMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightCloseCombatMessage(output);
};

GameActionFightCloseCombatMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightCloseCombatMessage(input);
};

GameActionFightCloseCombatMessage.prototype.serializeAs_GameActionFightCloseCombatMessage = function(output) {
  this.serializeAs_AbstractGameActionFightTargetedAbilityMessage(output);
  if (this.weaponGenericId < 0) {
    throw (new Error((("Forbidden value (" + this.weaponGenericId) + ") on element weaponGenericId.")));
  };
  output.writeVarShort(this.weaponGenericId);
};

GameActionFightCloseCombatMessage.prototype.deserializeAs_GameActionFightCloseCombatMessage = function(input) {
  this.deserialize(input);
  this.weaponGenericId = input.readVarUhShort();
  if (this.weaponGenericId < 0) {
    throw (new Error((("Forbidden value (" + this.weaponGenericId) + ") on element of GameActionFightCloseCombatMessage.weaponGenericId.")));
  };
};

GameActionFightCloseCombatMessage.prototype.getMessageId = function() {
  return 6116;
};

GameActionFightCloseCombatMessage.prototype.getClassName = function() {
  return 'GameActionFightCloseCombatMessage';
};

module.exports.id = 6116;
module.exports.class = GameActionFightCloseCombatMessage;
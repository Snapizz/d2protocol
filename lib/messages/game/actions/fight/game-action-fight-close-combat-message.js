var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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
  super.deserialize(param1);
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
  return new GameActionFightCloseCombatMessage();
};
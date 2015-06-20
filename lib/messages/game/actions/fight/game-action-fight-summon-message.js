var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');

var GameFightFighterInformations = require('../../../../types/game/context/fight/game-fight-fighter-informations.js').class;

var GameActionFightSummonMessage = function() {
  this.summon = new GameFightFighterInformations();
};

util.inherits(GameActionFightSummonMessage, BaseMessage);

GameActionFightSummonMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightSummonMessage(output);
};

GameActionFightSummonMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightSummonMessage(input);
};

GameActionFightSummonMessage.prototype.serializeAs_GameActionFightSummonMessage = function(param1) {
  this.serializeAs_AbstractGameActionMessage(param1);
  param1.writeShort(this.summon.getTypeId());
  this.summon.serialize(param1);
};

GameActionFightSummonMessage.prototype.deserializeAs_GameActionFightSummonMessage = function(param1) {
  this.deserialize(param1);
  var _loc2_ = param1.readUnsignedShort();
  this.summon = ProtocolTypeManager.getInstance(GameFightFighterInformations, _loc2_);
  this.summon.deserialize(param1);
};

GameActionFightSummonMessage.prototype.getMessageId = function() {
  return 5825;
};

GameActionFightSummonMessage.prototype.getClassName = function() {
  return 'GameActionFightSummonMessage';
};

module.exports.id = 5825;
module.exports.class = GameActionFightSummonMessage;
module.exports.getInstance = function() {
  return new GameActionFightSummonMessage();
};
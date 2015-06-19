var d2com = require('d2com'),
  BaseMessage = require('../abstract-game-action-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameActionFightSummonMessage = function() {
  this.summon;
};

util.inherits(GameActionFightSummonMessage, BaseMessage);

GameActionFightSummonMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightSummonMessage(output);
};

GameActionFightSummonMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightSummonMessage(input);
};

GameActionFightSummonMessage.prototype.serializeAs_GameActionFightSummonMessage = function(output) {
  this.serializeAs_AbstractGameActionMessage(output);
  output.writeShort(this.summon.getTypeId());
  this.summon.serialize(output);
};

GameActionFightSummonMessage.prototype.deserializeAs_GameActionFightSummonMessage = function(input) {
  this.deserialize(input);
  var _id1 = input.readUnsignedShort();
  this.summon = ProtocolTypeManager.getInstance(GameFightFighterInformations, _id1);
  this.summon.deserialize(input);
};

GameActionFightSummonMessage.prototype.getMessageId = function() {
  return 5825;
};

GameActionFightSummonMessage.prototype.getClassName = function() {
  return 'GameActionFightSummonMessage';
};

module.exports.id = 5825;
module.exports.class = GameActionFightSummonMessage;
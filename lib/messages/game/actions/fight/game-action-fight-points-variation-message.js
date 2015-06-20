var d2com = require('d2com'),
  BaseMessage = require('./game-action-fight-points-variation-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var GameActionFightPointsVariationMessage = function() {
  this.targetId = 0;
  this.delta = 0;
};

util.inherits(GameActionFightPointsVariationMessage, BaseMessage);

GameActionFightPointsVariationMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightPointsVariationMessage(output);
};

GameActionFightPointsVariationMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightPointsVariationMessage(input);
};

GameActionFightPointsVariationMessage.prototype.serializeAs_GameActionFightPointsVariationMessage = function(param1) {
  this.serializeAs_AbstractGameActionMessage(param1);
  param1.writeInt(this.targetId);
  param1.writeShort(this.delta);
};

GameActionFightPointsVariationMessage.prototype.deserializeAs_GameActionFightPointsVariationMessage = function(param1) {
  this.deserialize(param1);
  this.targetId = param1.readInt();
  this.delta = param1.readShort();
};

GameActionFightPointsVariationMessage.prototype.getMessageId = function() {
  return 1030;
};

GameActionFightPointsVariationMessage.prototype.getClassName = function() {
  return 'GameActionFightPointsVariationMessage';
};

module.exports.id = 1030;
module.exports.class = GameActionFightPointsVariationMessage;
module.exports.getInstance = function() {
  return new GameActionFightPointsVariationMessage();
};
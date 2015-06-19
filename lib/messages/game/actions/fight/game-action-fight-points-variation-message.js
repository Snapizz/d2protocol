var d2com = require('d2com'),
  BaseMessage = require('../abstract-game-action-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
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

GameActionFightPointsVariationMessage.prototype.serializeAs_GameActionFightPointsVariationMessage = function(output) {
  this.serializeAs_AbstractGameActionMessage(output);
  output.writeInt(this.targetId);
  output.writeShort(this.delta);
};

GameActionFightPointsVariationMessage.prototype.deserializeAs_GameActionFightPointsVariationMessage = function(input) {
  this.deserialize(input);
  this.targetId = input.readInt();
  this.delta = input.readShort();
};

GameActionFightPointsVariationMessage.prototype.getMessageId = function() {
  return 1030;
};

GameActionFightPointsVariationMessage.prototype.getClassName = function() {
  return 'GameActionFightPointsVariationMessage';
};

module.exports.id = 1030;
module.exports.class = GameActionFightPointsVariationMessage;
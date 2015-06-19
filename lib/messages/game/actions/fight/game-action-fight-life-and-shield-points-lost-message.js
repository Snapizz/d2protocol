var d2com = require('d2com'),
  BaseMessage = require('./game-action-fight-life-points-lost-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameActionFightLifeAndShieldPointsLostMessage = function() {
  this.shieldLoss = 0;
};

util.inherits(GameActionFightLifeAndShieldPointsLostMessage, BaseMessage);

GameActionFightLifeAndShieldPointsLostMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightLifeAndShieldPointsLostMessage(output);
};

GameActionFightLifeAndShieldPointsLostMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightLifeAndShieldPointsLostMessage(input);
};

GameActionFightLifeAndShieldPointsLostMessage.prototype.serializeAs_GameActionFightLifeAndShieldPointsLostMessage = function(output) {
  this.serializeAs_GameActionFightLifePointsLostMessage(output);
  if (this.shieldLoss < 0) {
    throw (new Error((("Forbidden value (" + this.shieldLoss) + ") on element shieldLoss.")));
  };
  output.writeVarShort(this.shieldLoss);
};

GameActionFightLifeAndShieldPointsLostMessage.prototype.deserializeAs_GameActionFightLifeAndShieldPointsLostMessage = function(input) {
  this.deserialize(input);
  this.shieldLoss = input.readVarUhShort();
  if (this.shieldLoss < 0) {
    throw (new Error((("Forbidden value (" + this.shieldLoss) + ") on element of GameActionFightLifeAndShieldPointsLostMessage.shieldLoss.")));
  };
};

GameActionFightLifeAndShieldPointsLostMessage.prototype.getMessageId = function() {
  return 6310;
};

GameActionFightLifeAndShieldPointsLostMessage.prototype.getClassName = function() {
  return 'GameActionFightLifeAndShieldPointsLostMessage';
};

module.exports.id = 6310;
module.exports.class = GameActionFightLifeAndShieldPointsLostMessage;
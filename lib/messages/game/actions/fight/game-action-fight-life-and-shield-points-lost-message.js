var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

GameActionFightLifeAndShieldPointsLostMessage.prototype.serializeAs_GameActionFightLifeAndShieldPointsLostMessage = function(param1) {
  this.serializeAs_GameActionFightLifePointsLostMessage(param1);
  if (this.shieldLoss < 0) {
    throw new Error("Forbidden value (" + this.shieldLoss + ") on element shieldLoss.");
  } else {
    param1.writeVarShort(this.shieldLoss);
    return;
  }
};

GameActionFightLifeAndShieldPointsLostMessage.prototype.deserializeAs_GameActionFightLifeAndShieldPointsLostMessage = function(param1) {
  super.deserialize(param1);
  this.shieldLoss = param1.readVarUhShort();
  if (this.shieldLoss < 0) {
    throw new Error("Forbidden value (" + this.shieldLoss + ") on element of GameActionFightLifeAndShieldPointsLostMessage.shieldLoss.");
  } else {
    return;
  }
};

GameActionFightLifeAndShieldPointsLostMessage.prototype.getMessageId = function() {
  return 6310;
};

GameActionFightLifeAndShieldPointsLostMessage.prototype.getClassName = function() {
  return 'GameActionFightLifeAndShieldPointsLostMessage';
};

module.exports.id = 6310;
module.exports.class = GameActionFightLifeAndShieldPointsLostMessage;
module.exports.getInstance = function() {
  return new GameActionFightLifeAndShieldPointsLostMessage();
};
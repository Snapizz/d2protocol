var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var GameActionFightLifePointsGainMessage = function() {
  this.targetId = 0;
  this.delta = 0;
};

util.inherits(GameActionFightLifePointsGainMessage, BaseMessage);

GameActionFightLifePointsGainMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightLifePointsGainMessage(output);
};

GameActionFightLifePointsGainMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightLifePointsGainMessage(input);
};

GameActionFightLifePointsGainMessage.prototype.serializeAs_GameActionFightLifePointsGainMessage = function(param1) {
  this.serializeAs_AbstractGameActionMessage(param1);
  param1.writeInt(this.targetId);
  if (this.delta < 0) {
    throw new Error("Forbidden value (" + this.delta + ") on element delta.");
  } else {
    param1.writeVarInt(this.delta);
    return;
  }
};

GameActionFightLifePointsGainMessage.prototype.deserializeAs_GameActionFightLifePointsGainMessage = function(param1) {
  this.deserialize(param1);
  this.targetId = param1.readInt();
  this.delta = param1.readVarUhInt();
  if (this.delta < 0) {
    throw new Error("Forbidden value (" + this.delta + ") on element of GameActionFightLifePointsGainMessage.delta.");
  } else {
    return;
  }
};

GameActionFightLifePointsGainMessage.prototype.getMessageId = function() {
  return 6311;
};

GameActionFightLifePointsGainMessage.prototype.getClassName = function() {
  return 'GameActionFightLifePointsGainMessage';
};

module.exports.id = 6311;
module.exports.class = GameActionFightLifePointsGainMessage;
module.exports.getInstance = function() {
  return new GameActionFightLifePointsGainMessage();
};
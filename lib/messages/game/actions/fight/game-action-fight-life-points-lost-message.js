var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var GameActionFightLifePointsLostMessage = function() {
  this.targetId = 0;
  this.loss = 0;
  this.permanentDamages = 0;
};

util.inherits(GameActionFightLifePointsLostMessage, BaseMessage);

GameActionFightLifePointsLostMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightLifePointsLostMessage(output);
};

GameActionFightLifePointsLostMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightLifePointsLostMessage(input);
};

GameActionFightLifePointsLostMessage.prototype.serializeAs_GameActionFightLifePointsLostMessage = function(param1) {
  this.serializeAs_AbstractGameActionMessage(param1);
  param1.writeInt(this.targetId);
  if (this.loss < 0) {
    throw new Error("Forbidden value (" + this.loss + ") on element loss.");
  } else {
    param1.writeVarShort(this.loss);
    if (this.permanentDamages < 0) {
      throw new Error("Forbidden value (" + this.permanentDamages + ") on element permanentDamages.");
    } else {
      param1.writeVarShort(this.permanentDamages);
      return;
    }
  }
};

GameActionFightLifePointsLostMessage.prototype.deserializeAs_GameActionFightLifePointsLostMessage = function(param1) {
  super.deserialize(param1);
  this.targetId = param1.readInt();
  this.loss = param1.readVarUhShort();
  if (this.loss < 0) {
    throw new Error("Forbidden value (" + this.loss + ") on element of GameActionFightLifePointsLostMessage.loss.");
  } else {
    this.permanentDamages = param1.readVarUhShort();
    if (this.permanentDamages < 0) {
      throw new Error("Forbidden value (" + this.permanentDamages + ") on element of GameActionFightLifePointsLostMessage.permanentDamages.");
    } else {
      return;
    }
  }
};

GameActionFightLifePointsLostMessage.prototype.getMessageId = function() {
  return 6312;
};

GameActionFightLifePointsLostMessage.prototype.getClassName = function() {
  return 'GameActionFightLifePointsLostMessage';
};

module.exports.id = 6312;
module.exports.class = GameActionFightLifePointsLostMessage;
module.exports.getInstance = function() {
  return new GameActionFightLifePointsLostMessage();
};
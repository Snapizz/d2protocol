var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var GameActionFightDodgePointLossMessage = function() {
  this.targetId = 0;
  this.amount = 0;
};

util.inherits(GameActionFightDodgePointLossMessage, BaseMessage);

GameActionFightDodgePointLossMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightDodgePointLossMessage(output);
};

GameActionFightDodgePointLossMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightDodgePointLossMessage(input);
};

GameActionFightDodgePointLossMessage.prototype.serializeAs_GameActionFightDodgePointLossMessage = function(param1) {
  this.serializeAs_AbstractGameActionMessage(param1);
  param1.writeInt(this.targetId);
  if (this.amount < 0) {
    throw new Error("Forbidden value (" + this.amount + ") on element amount.");
  } else {
    param1.writeVarShort(this.amount);
    return;
  }
};

GameActionFightDodgePointLossMessage.prototype.deserializeAs_GameActionFightDodgePointLossMessage = function(param1) {
  this.deserialize(param1);
  this.targetId = param1.readInt();
  this.amount = param1.readVarUhShort();
  if (this.amount < 0) {
    throw new Error("Forbidden value (" + this.amount + ") on element of GameActionFightDodgePointLossMessage.amount.");
  } else {
    return;
  }
};

GameActionFightDodgePointLossMessage.prototype.getMessageId = function() {
  return 5828;
};

GameActionFightDodgePointLossMessage.prototype.getClassName = function() {
  return 'GameActionFightDodgePointLossMessage';
};

module.exports.id = 5828;
module.exports.class = GameActionFightDodgePointLossMessage;
module.exports.getInstance = function() {
  return new GameActionFightDodgePointLossMessage();
};
var d2com = require('d2com'),
  BaseMessage = require('../abstract-game-action-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
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

GameActionFightDodgePointLossMessage.prototype.serializeAs_GameActionFightDodgePointLossMessage = function(output) {
  this.serializeAs_AbstractGameActionMessage(output);
  output.writeInt(this.targetId);
  if (this.amount < 0) {
    throw (new Error((("Forbidden value (" + this.amount) + ") on element amount.")));
  };
  output.writeVarShort(this.amount);
};

GameActionFightDodgePointLossMessage.prototype.deserializeAs_GameActionFightDodgePointLossMessage = function(input) {
  this.deserialize(input);
  this.targetId = input.readInt();
  this.amount = input.readVarUhShort();
  if (this.amount < 0) {
    throw (new Error((("Forbidden value (" + this.amount) + ") on element of GameActionFightDodgePointLossMessage.amount.")));
  };
};

GameActionFightDodgePointLossMessage.prototype.getMessageId = function() {
  return 5828;
};

GameActionFightDodgePointLossMessage.prototype.getClassName = function() {
  return 'GameActionFightDodgePointLossMessage';
};

module.exports.id = 5828;
module.exports.class = GameActionFightDodgePointLossMessage;
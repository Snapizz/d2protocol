var d2com = require('d2com'),
  BaseMessage = require('./game-action-fight-steal-kama-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var GameActionFightStealKamaMessage = function() {
  this.targetId = 0;
  this.amount = 0;
};

util.inherits(GameActionFightStealKamaMessage, BaseMessage);

GameActionFightStealKamaMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightStealKamaMessage(output);
};

GameActionFightStealKamaMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightStealKamaMessage(input);
};

GameActionFightStealKamaMessage.prototype.serializeAs_GameActionFightStealKamaMessage = function(param1) {
  this.serializeAs_AbstractGameActionMessage(param1);
  param1.writeInt(this.targetId);
  if (this.amount < 0) {
    throw new Error("Forbidden value (" + this.amount + ") on element amount.");
  } else {
    param1.writeVarInt(this.amount);
    return;
  }
};

GameActionFightStealKamaMessage.prototype.deserializeAs_GameActionFightStealKamaMessage = function(param1) {
  this.deserialize(param1);
  this.targetId = param1.readInt();
  this.amount = param1.readVarUhInt();
  if (this.amount < 0) {
    throw new Error("Forbidden value (" + this.amount + ") on element of GameActionFightStealKamaMessage.amount.");
  } else {
    return;
  }
};

GameActionFightStealKamaMessage.prototype.getMessageId = function() {
  return 5535;
};

GameActionFightStealKamaMessage.prototype.getClassName = function() {
  return 'GameActionFightStealKamaMessage';
};

module.exports.id = 5535;
module.exports.class = GameActionFightStealKamaMessage;
module.exports.getInstance = function() {
  return new GameActionFightStealKamaMessage();
};
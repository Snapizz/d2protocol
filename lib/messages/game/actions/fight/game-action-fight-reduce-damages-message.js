var d2com = require('d2com'),
  BaseMessage = require('../abstract-game-action-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameActionFightReduceDamagesMessage = function() {
  this.targetId = 0;
  this.amount = 0;
};

util.inherits(GameActionFightReduceDamagesMessage, BaseMessage);

GameActionFightReduceDamagesMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightReduceDamagesMessage(output);
};

GameActionFightReduceDamagesMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightReduceDamagesMessage(input);
};

GameActionFightReduceDamagesMessage.prototype.serializeAs_GameActionFightReduceDamagesMessage = function(output) {
  this.serializeAs_AbstractGameActionMessage(output);
  output.writeInt(this.targetId);
  if (this.amount < 0) {
    throw (new Error((("Forbidden value (" + this.amount) + ") on element amount.")));
  };
  output.writeVarInt(this.amount);
};

GameActionFightReduceDamagesMessage.prototype.deserializeAs_GameActionFightReduceDamagesMessage = function(input) {
  this.deserialize(input);
  this.targetId = input.readInt();
  this.amount = input.readVarUhInt();
  if (this.amount < 0) {
    throw (new Error((("Forbidden value (" + this.amount) + ") on element of GameActionFightReduceDamagesMessage.amount.")));
  };
};

GameActionFightReduceDamagesMessage.prototype.getMessageId = function() {
  return 5526;
};

GameActionFightReduceDamagesMessage.prototype.getClassName = function() {
  return 'GameActionFightReduceDamagesMessage';
};

module.exports.id = 5526;
module.exports.class = GameActionFightReduceDamagesMessage;
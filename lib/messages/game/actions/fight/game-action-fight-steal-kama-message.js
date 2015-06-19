var d2com = require('d2com'),
  BaseMessage = require('../abstract-game-action-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
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

GameActionFightStealKamaMessage.prototype.serializeAs_GameActionFightStealKamaMessage = function(output) {
  this.serializeAs_AbstractGameActionMessage(output);
  output.writeInt(this.targetId);
  if (this.amount < 0) {
    throw (new Error((("Forbidden value (" + this.amount) + ") on element amount.")));
  };
  output.writeVarInt(this.amount);
};

GameActionFightStealKamaMessage.prototype.deserializeAs_GameActionFightStealKamaMessage = function(input) {
  this.deserialize(input);
  this.targetId = input.readInt();
  this.amount = input.readVarUhInt();
  if (this.amount < 0) {
    throw (new Error((("Forbidden value (" + this.amount) + ") on element of GameActionFightStealKamaMessage.amount.")));
  };
};

GameActionFightStealKamaMessage.prototype.getMessageId = function() {
  return 5535;
};

GameActionFightStealKamaMessage.prototype.getClassName = function() {
  return 'GameActionFightStealKamaMessage';
};

module.exports.id = 5535;
module.exports.class = GameActionFightStealKamaMessage;
var d2com = require('d2com'),
  BaseMessage = require('../abstract-game-action-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
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

GameActionFightLifePointsGainMessage.prototype.serializeAs_GameActionFightLifePointsGainMessage = function(output) {
  this.serializeAs_AbstractGameActionMessage(output);
  output.writeInt(this.targetId);
  if (this.delta < 0) {
    throw (new Error((("Forbidden value (" + this.delta) + ") on element delta.")));
  };
  output.writeVarShort(this.delta);
};

GameActionFightLifePointsGainMessage.prototype.deserializeAs_GameActionFightLifePointsGainMessage = function(input) {
  this.deserialize(input);
  this.targetId = input.readInt();
  this.delta = input.readVarUhShort();
  if (this.delta < 0) {
    throw (new Error((("Forbidden value (" + this.delta) + ") on element of GameActionFightLifePointsGainMessage.delta.")));
  };
};

GameActionFightLifePointsGainMessage.prototype.getMessageId = function() {
  return 6311;
};

GameActionFightLifePointsGainMessage.prototype.getClassName = function() {
  return 'GameActionFightLifePointsGainMessage';
};

module.exports.id = 6311;
module.exports.class = GameActionFightLifePointsGainMessage;
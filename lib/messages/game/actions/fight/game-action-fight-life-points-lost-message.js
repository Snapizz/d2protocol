var d2com = require('d2com'),
  BaseMessage = require('../abstract-game-action-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
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

GameActionFightLifePointsLostMessage.prototype.serializeAs_GameActionFightLifePointsLostMessage = function(output) {
  this.serializeAs_AbstractGameActionMessage(output);
  output.writeInt(this.targetId);
  if (this.loss < 0) {
    throw (new Error((("Forbidden value (" + this.loss) + ") on element loss.")));
  };
  output.writeVarShort(this.loss);
  if (this.permanentDamages < 0) {
    throw (new Error((("Forbidden value (" + this.permanentDamages) + ") on element permanentDamages.")));
  };
  output.writeVarShort(this.permanentDamages);
};

GameActionFightLifePointsLostMessage.prototype.deserializeAs_GameActionFightLifePointsLostMessage = function(input) {
  this.deserialize(input);
  this.targetId = input.readInt();
  this.loss = input.readVarUhShort();
  if (this.loss < 0) {
    throw (new Error((("Forbidden value (" + this.loss) + ") on element of GameActionFightLifePointsLostMessage.loss.")));
  };
  this.permanentDamages = input.readVarUhShort();
  if (this.permanentDamages < 0) {
    throw (new Error((("Forbidden value (" + this.permanentDamages) + ") on element of GameActionFightLifePointsLostMessage.permanentDamages.")));
  };
};

GameActionFightLifePointsLostMessage.prototype.getMessageId = function() {
  return 6312;
};

GameActionFightLifePointsLostMessage.prototype.getClassName = function() {
  return 'GameActionFightLifePointsLostMessage';
};

module.exports.id = 6312;
module.exports.class = GameActionFightLifePointsLostMessage;
var d2com = require('d2com'),
  BaseMessage = require('../abstract-game-action-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameActionFightInvisibleObstacleMessage = function() {
  this.sourceSpellId = 0;
};

util.inherits(GameActionFightInvisibleObstacleMessage, BaseMessage);

GameActionFightInvisibleObstacleMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightInvisibleObstacleMessage(output);
};

GameActionFightInvisibleObstacleMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightInvisibleObstacleMessage(input);
};

GameActionFightInvisibleObstacleMessage.prototype.serializeAs_GameActionFightInvisibleObstacleMessage = function(output) {
  this.serializeAs_AbstractGameActionMessage(output);
  if (this.sourceSpellId < 0) {
    throw (new Error((("Forbidden value (" + this.sourceSpellId) + ") on element sourceSpellId.")));
  };
  output.writeVarInt(this.sourceSpellId);
};

GameActionFightInvisibleObstacleMessage.prototype.deserializeAs_GameActionFightInvisibleObstacleMessage = function(input) {
  this.deserialize(input);
  this.sourceSpellId = input.readVarUhInt();
  if (this.sourceSpellId < 0) {
    throw (new Error((("Forbidden value (" + this.sourceSpellId) + ") on element of GameActionFightInvisibleObstacleMessage.sourceSpellId.")));
  };
};

GameActionFightInvisibleObstacleMessage.prototype.getMessageId = function() {
  return 5820;
};

GameActionFightInvisibleObstacleMessage.prototype.getClassName = function() {
  return 'GameActionFightInvisibleObstacleMessage';
};

module.exports.id = 5820;
module.exports.class = GameActionFightInvisibleObstacleMessage;
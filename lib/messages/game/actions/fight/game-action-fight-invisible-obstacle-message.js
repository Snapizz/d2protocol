var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

GameActionFightInvisibleObstacleMessage.prototype.serializeAs_GameActionFightInvisibleObstacleMessage = function(param1) {
  this.serializeAs_AbstractGameActionMessage(param1);
  if (this.sourceSpellId < 0) {
    throw new Error("Forbidden value (" + this.sourceSpellId + ") on element sourceSpellId.");
  } else {
    param1.writeVarInt(this.sourceSpellId);
    return;
  }
};

GameActionFightInvisibleObstacleMessage.prototype.deserializeAs_GameActionFightInvisibleObstacleMessage = function(param1) {
  this.deserialize(param1);
  this.sourceSpellId = param1.readVarUhInt();
  if (this.sourceSpellId < 0) {
    throw new Error("Forbidden value (" + this.sourceSpellId + ") on element of GameActionFightInvisibleObstacleMessage.sourceSpellId.");
  } else {
    return;
  }
};

GameActionFightInvisibleObstacleMessage.prototype.getMessageId = function() {
  return 5820;
};

GameActionFightInvisibleObstacleMessage.prototype.getClassName = function() {
  return 'GameActionFightInvisibleObstacleMessage';
};

module.exports.id = 5820;
module.exports.class = GameActionFightInvisibleObstacleMessage;
module.exports.getInstance = function() {
  return new GameActionFightInvisibleObstacleMessage();
};
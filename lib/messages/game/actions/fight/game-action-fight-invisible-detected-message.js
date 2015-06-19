var d2com = require('d2com'),
  BaseMessage = require('../abstract-game-action-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameActionFightInvisibleDetectedMessage = function() {
  this.targetId = 0;
  this.cellId = 0;
};

util.inherits(GameActionFightInvisibleDetectedMessage, BaseMessage);

GameActionFightInvisibleDetectedMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightInvisibleDetectedMessage(output);
};

GameActionFightInvisibleDetectedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightInvisibleDetectedMessage(input);
};

GameActionFightInvisibleDetectedMessage.prototype.serializeAs_GameActionFightInvisibleDetectedMessage = function(output) {
  this.serializeAs_AbstractGameActionMessage(output);
  output.writeInt(this.targetId);
  if ((((this.cellId < -1)) || ((this.cellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.cellId) + ") on element cellId.")));
  };
  output.writeShort(this.cellId);
};

GameActionFightInvisibleDetectedMessage.prototype.deserializeAs_GameActionFightInvisibleDetectedMessage = function(input) {
  this.deserialize(input);
  this.targetId = input.readInt();
  this.cellId = input.readShort();
  if ((((this.cellId < -1)) || ((this.cellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.cellId) + ") on element of GameActionFightInvisibleDetectedMessage.cellId.")));
  };
};

GameActionFightInvisibleDetectedMessage.prototype.getMessageId = function() {
  return 6320;
};

GameActionFightInvisibleDetectedMessage.prototype.getClassName = function() {
  return 'GameActionFightInvisibleDetectedMessage';
};

module.exports.id = 6320;
module.exports.class = GameActionFightInvisibleDetectedMessage;
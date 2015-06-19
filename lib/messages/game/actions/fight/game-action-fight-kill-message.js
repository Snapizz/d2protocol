var d2com = require('d2com'),
  BaseMessage = require('../abstract-game-action-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameActionFightKillMessage = function() {
  this.targetId = 0;
};

util.inherits(GameActionFightKillMessage, BaseMessage);

GameActionFightKillMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightKillMessage(output);
};

GameActionFightKillMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightKillMessage(input);
};

GameActionFightKillMessage.prototype.serializeAs_GameActionFightKillMessage = function(output) {
  this.serializeAs_AbstractGameActionMessage(output);
  output.writeInt(this.targetId);
};

GameActionFightKillMessage.prototype.deserializeAs_GameActionFightKillMessage = function(input) {
  this.deserialize(input);
  this.targetId = input.readInt();
};

GameActionFightKillMessage.prototype.getMessageId = function() {
  return 5571;
};

GameActionFightKillMessage.prototype.getClassName = function() {
  return 'GameActionFightKillMessage';
};

module.exports.id = 5571;
module.exports.class = GameActionFightKillMessage;
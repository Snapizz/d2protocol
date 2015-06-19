var d2com = require('d2com'),
  BaseMessage = require('../abstract-game-action-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameActionFightDispellMessage = function() {
  this.targetId = 0;
};

util.inherits(GameActionFightDispellMessage, BaseMessage);

GameActionFightDispellMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightDispellMessage(output);
};

GameActionFightDispellMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightDispellMessage(input);
};

GameActionFightDispellMessage.prototype.serializeAs_GameActionFightDispellMessage = function(output) {
  this.serializeAs_AbstractGameActionMessage(output);
  output.writeInt(this.targetId);
};

GameActionFightDispellMessage.prototype.deserializeAs_GameActionFightDispellMessage = function(input) {
  this.deserialize(input);
  this.targetId = input.readInt();
};

GameActionFightDispellMessage.prototype.getMessageId = function() {
  return 5533;
};

GameActionFightDispellMessage.prototype.getClassName = function() {
  return 'GameActionFightDispellMessage';
};

module.exports.id = 5533;
module.exports.class = GameActionFightDispellMessage;
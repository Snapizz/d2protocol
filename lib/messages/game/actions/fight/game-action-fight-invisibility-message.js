var d2com = require('d2com'),
  BaseMessage = require('../abstract-game-action-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameActionFightInvisibilityMessage = function() {
  this.targetId = 0;
  this.state = 0;
};

util.inherits(GameActionFightInvisibilityMessage, BaseMessage);

GameActionFightInvisibilityMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightInvisibilityMessage(output);
};

GameActionFightInvisibilityMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightInvisibilityMessage(input);
};

GameActionFightInvisibilityMessage.prototype.serializeAs_GameActionFightInvisibilityMessage = function(output) {
  this.serializeAs_AbstractGameActionMessage(output);
  output.writeInt(this.targetId);
  output.writeByte(this.state);
};

GameActionFightInvisibilityMessage.prototype.deserializeAs_GameActionFightInvisibilityMessage = function(input) {
  this.deserialize(input);
  this.targetId = input.readInt();
  this.state = input.readByte();
  if (this.state < 0) {
    throw (new Error((("Forbidden value (" + this.state) + ") on element of GameActionFightInvisibilityMessage.state.")));
  };
};

GameActionFightInvisibilityMessage.prototype.getMessageId = function() {
  return 5821;
};

GameActionFightInvisibilityMessage.prototype.getClassName = function() {
  return 'GameActionFightInvisibilityMessage';
};

module.exports.id = 5821;
module.exports.class = GameActionFightInvisibilityMessage;
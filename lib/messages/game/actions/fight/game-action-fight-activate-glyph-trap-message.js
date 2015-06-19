var d2com = require('d2com'),
  BaseMessage = require('../abstract-game-action-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameActionFightActivateGlyphTrapMessage = function() {
  this.markId = 0;
  this.active = false;
};

util.inherits(GameActionFightActivateGlyphTrapMessage, BaseMessage);

GameActionFightActivateGlyphTrapMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightActivateGlyphTrapMessage(output);
};

GameActionFightActivateGlyphTrapMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightActivateGlyphTrapMessage(input);
};

GameActionFightActivateGlyphTrapMessage.prototype.serializeAs_GameActionFightActivateGlyphTrapMessage = function(output) {
  this.serializeAs_AbstractGameActionMessage(output);
  output.writeShort(this.markId);
  output.writeBoolean(this.active);
};

GameActionFightActivateGlyphTrapMessage.prototype.deserializeAs_GameActionFightActivateGlyphTrapMessage = function(input) {
  this.deserialize(input);
  this.markId = input.readShort();
  this.active = input.readBoolean();
};

GameActionFightActivateGlyphTrapMessage.prototype.getMessageId = function() {
  return 6545;
};

GameActionFightActivateGlyphTrapMessage.prototype.getClassName = function() {
  return 'GameActionFightActivateGlyphTrapMessage';
};

module.exports.id = 6545;
module.exports.class = GameActionFightActivateGlyphTrapMessage;
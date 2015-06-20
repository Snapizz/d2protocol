var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
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
  super.serializeAs_AbstractGameActionMessage(param1);
  param1.writeShort(this.markId);
  param1.writeBoolean(this.active);
};

GameActionFightActivateGlyphTrapMessage.prototype.deserializeAs_GameActionFightActivateGlyphTrapMessage = function(input) {
  super.deserialize(param1);
  this.markId = param1.readShort();
  this.active = param1.readBoolean();
};

GameActionFightActivateGlyphTrapMessage.prototype.getMessageId = function() {
  return 6545;
};

GameActionFightActivateGlyphTrapMessage.prototype.getClassName = function() {
  return 'GameActionFightActivateGlyphTrapMessage';
};

module.exports.id = 6545;
module.exports.class = GameActionFightActivateGlyphTrapMessage;
var d2com = require('d2com'),
  BaseMessage = require('../abstract-game-action-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameActionFightTriggerGlyphTrapMessage = function() {
  this.markId = 0;
  this.triggeringCharacterId = 0;
  this.triggeredSpellId = 0;
};

util.inherits(GameActionFightTriggerGlyphTrapMessage, BaseMessage);

GameActionFightTriggerGlyphTrapMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightTriggerGlyphTrapMessage(output);
};

GameActionFightTriggerGlyphTrapMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightTriggerGlyphTrapMessage(input);
};

GameActionFightTriggerGlyphTrapMessage.prototype.serializeAs_GameActionFightTriggerGlyphTrapMessage = function(output) {
  this.serializeAs_AbstractGameActionMessage(output);
  output.writeShort(this.markId);
  output.writeInt(this.triggeringCharacterId);
  if (this.triggeredSpellId < 0) {
    throw (new Error((("Forbidden value (" + this.triggeredSpellId) + ") on element triggeredSpellId.")));
  };
  output.writeVarShort(this.triggeredSpellId);
};

GameActionFightTriggerGlyphTrapMessage.prototype.deserializeAs_GameActionFightTriggerGlyphTrapMessage = function(input) {
  this.deserialize(input);
  this.markId = input.readShort();
  this.triggeringCharacterId = input.readInt();
  this.triggeredSpellId = input.readVarUhShort();
  if (this.triggeredSpellId < 0) {
    throw (new Error((("Forbidden value (" + this.triggeredSpellId) + ") on element of GameActionFightTriggerGlyphTrapMessage.triggeredSpellId.")));
  };
};

GameActionFightTriggerGlyphTrapMessage.prototype.getMessageId = function() {
  return 5741;
};

GameActionFightTriggerGlyphTrapMessage.prototype.getClassName = function() {
  return 'GameActionFightTriggerGlyphTrapMessage';
};

module.exports.id = 5741;
module.exports.class = GameActionFightTriggerGlyphTrapMessage;
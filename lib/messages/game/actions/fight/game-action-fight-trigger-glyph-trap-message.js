var d2com = require('d2com'),
  BaseMessage = require('./game-action-fight-trigger-glyph-trap-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

GameActionFightTriggerGlyphTrapMessage.prototype.serializeAs_GameActionFightTriggerGlyphTrapMessage = function(param1) {
  this.serializeAs_AbstractGameActionMessage(param1);
  param1.writeShort(this.markId);
  param1.writeInt(this.triggeringCharacterId);
  if (this.triggeredSpellId < 0) {
    throw new Error("Forbidden value (" + this.triggeredSpellId + ") on element triggeredSpellId.");
  } else {
    param1.writeVarShort(this.triggeredSpellId);
    return;
  }
};

GameActionFightTriggerGlyphTrapMessage.prototype.deserializeAs_GameActionFightTriggerGlyphTrapMessage = function(param1) {
  this.deserialize(param1);
  this.markId = param1.readShort();
  this.triggeringCharacterId = param1.readInt();
  this.triggeredSpellId = param1.readVarUhShort();
  if (this.triggeredSpellId < 0) {
    throw new Error("Forbidden value (" + this.triggeredSpellId + ") on element of GameActionFightTriggerGlyphTrapMessage.triggeredSpellId.");
  } else {
    return;
  }
};

GameActionFightTriggerGlyphTrapMessage.prototype.getMessageId = function() {
  return 5741;
};

GameActionFightTriggerGlyphTrapMessage.prototype.getClassName = function() {
  return 'GameActionFightTriggerGlyphTrapMessage';
};

module.exports.id = 5741;
module.exports.class = GameActionFightTriggerGlyphTrapMessage;
module.exports.getInstance = function() {
  return new GameActionFightTriggerGlyphTrapMessage();
};
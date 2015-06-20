var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameActionFightNoSpellCastMessage = function() {
  this.spellLevelId = 0;
};

util.inherits(GameActionFightNoSpellCastMessage, BaseMessage);

GameActionFightNoSpellCastMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightNoSpellCastMessage(output);
};

GameActionFightNoSpellCastMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightNoSpellCastMessage(input);
};

GameActionFightNoSpellCastMessage.prototype.serializeAs_GameActionFightNoSpellCastMessage = function(output) {
  if (this.spellLevelId < 0) {
    throw new Error("Forbidden value (" + this.spellLevelId + ") on element spellLevelId.");
  } else {
    param1.writeVarInt(this.spellLevelId);
    return;
  }
};

GameActionFightNoSpellCastMessage.prototype.deserializeAs_GameActionFightNoSpellCastMessage = function(input) {
  this.spellLevelId = param1.readVarUhInt();
  if (this.spellLevelId < 0) {
    throw new Error("Forbidden value (" + this.spellLevelId + ") on element of GameActionFightNoSpellCastMessage.spellLevelId.");
  } else {
    return;
  }
};

GameActionFightNoSpellCastMessage.prototype.getMessageId = function() {
  return 6132;
};

GameActionFightNoSpellCastMessage.prototype.getClassName = function() {
  return 'GameActionFightNoSpellCastMessage';
};

module.exports.id = 6132;
module.exports.class = GameActionFightNoSpellCastMessage;
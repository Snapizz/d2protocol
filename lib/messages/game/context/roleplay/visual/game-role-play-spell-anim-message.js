var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameRolePlaySpellAnimMessage = function() {
  this.casterId = 0;
  this.targetCellId = 0;
  this.spellId = 0;
  this.spellLevel = 0;
};

util.inherits(GameRolePlaySpellAnimMessage, BaseMessage);

GameRolePlaySpellAnimMessage.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlaySpellAnimMessage(output);
};

GameRolePlaySpellAnimMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlaySpellAnimMessage(input);
};

GameRolePlaySpellAnimMessage.prototype.serializeAs_GameRolePlaySpellAnimMessage = function(output) {
  param1.writeInt(this.casterId);
  if (this.targetCellId < 0 || this.targetCellId > 559) {
    throw new Error("Forbidden value (" + this.targetCellId + ") on element targetCellId.");
  } else {
    param1.writeVarShort(this.targetCellId);
    if (this.spellId < 0) {
      throw new Error("Forbidden value (" + this.spellId + ") on element spellId.");
    } else {
      param1.writeVarShort(this.spellId);
      if (this.spellLevel < 1 || this.spellLevel > 6) {
        throw new Error("Forbidden value (" + this.spellLevel + ") on element spellLevel.");
      } else {
        param1.writeByte(this.spellLevel);
        return;
      }
    }
  }
};

GameRolePlaySpellAnimMessage.prototype.deserializeAs_GameRolePlaySpellAnimMessage = function(input) {
  this.casterId = param1.readInt();
  this.targetCellId = param1.readVarUhShort();
  if (this.targetCellId < 0 || this.targetCellId > 559) {
    throw new Error("Forbidden value (" + this.targetCellId + ") on element of GameRolePlaySpellAnimMessage.targetCellId.");
  } else {
    this.spellId = param1.readVarUhShort();
    if (this.spellId < 0) {
      throw new Error("Forbidden value (" + this.spellId + ") on element of GameRolePlaySpellAnimMessage.spellId.");
    } else {
      this.spellLevel = param1.readByte();
      if (this.spellLevel < 1 || this.spellLevel > 6) {
        throw new Error("Forbidden value (" + this.spellLevel + ") on element of GameRolePlaySpellAnimMessage.spellLevel.");
      } else {
        return;
      }
    }
  }
};

GameRolePlaySpellAnimMessage.prototype.getMessageId = function() {
  return 6114;
};

GameRolePlaySpellAnimMessage.prototype.getClassName = function() {
  return 'GameRolePlaySpellAnimMessage';
};

module.exports.id = 6114;
module.exports.class = GameRolePlaySpellAnimMessage;
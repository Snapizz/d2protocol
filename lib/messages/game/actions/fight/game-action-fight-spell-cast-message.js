var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameActionFightSpellCastMessage = function() {
  this.spellId = 0;
  this.spellLevel = 0;
  this.portalsIds = [];
};

util.inherits(GameActionFightSpellCastMessage, BaseMessage);

GameActionFightSpellCastMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightSpellCastMessage(output);
};

GameActionFightSpellCastMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightSpellCastMessage(input);
};

GameActionFightSpellCastMessage.prototype.serializeAs_GameActionFightSpellCastMessage = function(output) {
  super.serializeAs_AbstractGameActionFightTargetedAbilityMessage(param1);
  if (this.spellId < 0) {
    throw new Error("Forbidden value (" + this.spellId + ") on element spellId.");
  } else {
    param1.writeVarShort(this.spellId);
    if (this.spellLevel < 1 || this.spellLevel > 6) {
      throw new Error("Forbidden value (" + this.spellLevel + ") on element spellLevel.");
    } else {
      param1.writeByte(this.spellLevel);
      param1.writeShort(this.portalsIds.length);
      var _loc2_ = 0;
      while (_loc2_ < this.portalsIds.length) {
        param1.writeShort(this.portalsIds[_loc2_]);
        _loc2_++;
      }
      return;
    }
  }
};

GameActionFightSpellCastMessage.prototype.deserializeAs_GameActionFightSpellCastMessage = function(input) {
  var _loc4_ = 0;
  super.deserialize(param1);
  this.spellId = param1.readVarUhShort();
  if (this.spellId < 0) {
    throw new Error("Forbidden value (" + this.spellId + ") on element of GameActionFightSpellCastMessage.spellId.");
  } else {
    this.spellLevel = param1.readByte();
    if (this.spellLevel < 1 || this.spellLevel > 6) {
      throw new Error("Forbidden value (" + this.spellLevel + ") on element of GameActionFightSpellCastMessage.spellLevel.");
    } else {
      var _loc2_ = param1.readUnsignedShort();
      var _loc3_ = 0;
      while (_loc3_ < _loc2_) {
        _loc4_ = param1.readShort();
        this.portalsIds.push(_loc4_);
        _loc3_++;
      }
      return;
    }
  }
};

GameActionFightSpellCastMessage.prototype.getMessageId = function() {
  return 1010;
};

GameActionFightSpellCastMessage.prototype.getClassName = function() {
  return 'GameActionFightSpellCastMessage';
};

module.exports.id = 1010;
module.exports.class = GameActionFightSpellCastMessage;
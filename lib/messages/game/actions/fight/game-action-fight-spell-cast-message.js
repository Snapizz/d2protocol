var d2com = require('d2com'),
  BaseMessage = require('./abstract-game-action-fight-targeted-ability-message.js').class,
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
  this.serializeAs_AbstractGameActionFightTargetedAbilityMessage(output);
  if (this.spellId < 0) {
    throw (new Error((("Forbidden value (" + this.spellId) + ") on element spellId.")));
  };
  output.writeVarShort(this.spellId);
  if ((((this.spellLevel < 1)) || ((this.spellLevel > 6)))) {
    throw (new Error((("Forbidden value (" + this.spellLevel) + ") on element spellLevel.")));
  };
  output.writeByte(this.spellLevel);
  output.writeShort(this.portalsIds.length);
  var _i3;
  while (_i3 < this.portalsIds.length) {
    output.writeShort(this.portalsIds[_i3]);
    _i3++;
  };
};

GameActionFightSpellCastMessage.prototype.deserializeAs_GameActionFightSpellCastMessage = function(input) {
  var _val3;
  this.deserialize(input);
  this.spellId = input.readVarUhShort();
  if (this.spellId < 0) {
    throw (new Error((("Forbidden value (" + this.spellId) + ") on element of GameActionFightSpellCastMessage.spellId.")));
  };
  this.spellLevel = input.readByte();
  if ((((this.spellLevel < 1)) || ((this.spellLevel > 6)))) {
    throw (new Error((("Forbidden value (" + this.spellLevel) + ") on element of GameActionFightSpellCastMessage.spellLevel.")));
  };
  var _portalsIdsLen = input.readUnsignedShort();
  var _i3;
  while (_i3 < _portalsIdsLen) {
    _val3 = input.readShort();
    this.portalsIds.push(_val3);
    _i3++;
  };
};

GameActionFightSpellCastMessage.prototype.getMessageId = function() {
  return 1010;
};

GameActionFightSpellCastMessage.prototype.getClassName = function() {
  return 'GameActionFightSpellCastMessage';
};

module.exports.id = 1010;
module.exports.class = GameActionFightSpellCastMessage;
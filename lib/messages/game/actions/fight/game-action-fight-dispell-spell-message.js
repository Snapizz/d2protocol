var d2com = require('d2com'),
  BaseMessage = require('./game-action-fight-dispell-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameActionFightDispellSpellMessage = function() {
  this.spellId = 0;
};

util.inherits(GameActionFightDispellSpellMessage, BaseMessage);

GameActionFightDispellSpellMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightDispellSpellMessage(output);
};

GameActionFightDispellSpellMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightDispellSpellMessage(input);
};

GameActionFightDispellSpellMessage.prototype.serializeAs_GameActionFightDispellSpellMessage = function(output) {
  this.serializeAs_GameActionFightDispellMessage(output);
  if (this.spellId < 0) {
    throw (new Error((("Forbidden value (" + this.spellId) + ") on element spellId.")));
  };
  output.writeVarShort(this.spellId);
};

GameActionFightDispellSpellMessage.prototype.deserializeAs_GameActionFightDispellSpellMessage = function(input) {
  this.deserialize(input);
  this.spellId = input.readVarUhShort();
  if (this.spellId < 0) {
    throw (new Error((("Forbidden value (" + this.spellId) + ") on element of GameActionFightDispellSpellMessage.spellId.")));
  };
};

GameActionFightDispellSpellMessage.prototype.getMessageId = function() {
  return 6176;
};

GameActionFightDispellSpellMessage.prototype.getClassName = function() {
  return 'GameActionFightDispellSpellMessage';
};

module.exports.id = 6176;
module.exports.class = GameActionFightDispellSpellMessage;
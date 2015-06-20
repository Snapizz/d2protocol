var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
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

GameActionFightDispellSpellMessage.prototype.serializeAs_GameActionFightDispellSpellMessage = function(param1) {
  this.serializeAs_GameActionFightDispellMessage(param1);
  if (this.spellId < 0) {
    throw new Error("Forbidden value (" + this.spellId + ") on element spellId.");
  } else {
    param1.writeVarShort(this.spellId);
    return;
  }
};

GameActionFightDispellSpellMessage.prototype.deserializeAs_GameActionFightDispellSpellMessage = function(param1) {
  this.deserialize(param1);
  this.spellId = param1.readVarUhShort();
  if (this.spellId < 0) {
    throw new Error("Forbidden value (" + this.spellId + ") on element of GameActionFightDispellSpellMessage.spellId.");
  } else {
    return;
  }
};

GameActionFightDispellSpellMessage.prototype.getMessageId = function() {
  return 6176;
};

GameActionFightDispellSpellMessage.prototype.getClassName = function() {
  return 'GameActionFightDispellSpellMessage';
};

module.exports.id = 6176;
module.exports.class = GameActionFightDispellSpellMessage;
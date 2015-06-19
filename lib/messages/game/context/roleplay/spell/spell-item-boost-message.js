var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var SpellItemBoostMessage = function() {
  this.statId = 0;
  this.spellId = 0;
  this.value = 0;
};

util.inherits(SpellItemBoostMessage, BaseMessage);

SpellItemBoostMessage.prototype.serialize = function(output) {
  this.serializeAs_SpellItemBoostMessage(output);
};

SpellItemBoostMessage.prototype.deserialize = function(input) {
  this.deserializeAs_SpellItemBoostMessage(input);
};

SpellItemBoostMessage.prototype.serializeAs_SpellItemBoostMessage = function(output) {
  if (this.statId < 0) {
    throw (new Error((("Forbidden value (" + this.statId) + ") on element statId.")));
  };
  output.writeVarInt(this.statId);
  if (this.spellId < 0) {
    throw (new Error((("Forbidden value (" + this.spellId) + ") on element spellId.")));
  };
  output.writeVarShort(this.spellId);
  output.writeVarShort(this.value);
};

SpellItemBoostMessage.prototype.deserializeAs_SpellItemBoostMessage = function(input) {
  this.statId = input.readVarUhInt();
  if (this.statId < 0) {
    throw (new Error((("Forbidden value (" + this.statId) + ") on element of SpellItemBoostMessage.statId.")));
  };
  this.spellId = input.readVarUhShort();
  if (this.spellId < 0) {
    throw (new Error((("Forbidden value (" + this.spellId) + ") on element of SpellItemBoostMessage.spellId.")));
  };
  this.value = input.readVarShort();
};

SpellItemBoostMessage.prototype.getMessageId = function() {
  return 6011;
};

SpellItemBoostMessage.prototype.getClassName = function() {
  return 'SpellItemBoostMessage';
};

module.exports.id = 6011;
module.exports.class = SpellItemBoostMessage;
var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var SpellUpgradeSuccessMessage = function() {
  this.spellId = 0;
  this.spellLevel = 0;
};

util.inherits(SpellUpgradeSuccessMessage, BaseMessage);

SpellUpgradeSuccessMessage.prototype.serialize = function(output) {
  this.serializeAs_SpellUpgradeSuccessMessage(output);
};

SpellUpgradeSuccessMessage.prototype.deserialize = function(input) {
  this.deserializeAs_SpellUpgradeSuccessMessage(input);
};

SpellUpgradeSuccessMessage.prototype.serializeAs_SpellUpgradeSuccessMessage = function(output) {
  output.writeInt(this.spellId);
  if ((((this.spellLevel < 1)) || ((this.spellLevel > 6)))) {
    throw (new Error((("Forbidden value (" + this.spellLevel) + ") on element spellLevel.")));
  };
  output.writeByte(this.spellLevel);
};

SpellUpgradeSuccessMessage.prototype.deserializeAs_SpellUpgradeSuccessMessage = function(input) {
  this.spellId = input.readInt();
  this.spellLevel = input.readByte();
  if ((((this.spellLevel < 1)) || ((this.spellLevel > 6)))) {
    throw (new Error((("Forbidden value (" + this.spellLevel) + ") on element of SpellUpgradeSuccessMessage.spellLevel.")));
  };
};

SpellUpgradeSuccessMessage.prototype.getMessageId = function() {
  return 1201;
};

SpellUpgradeSuccessMessage.prototype.getClassName = function() {
  return 'SpellUpgradeSuccessMessage';
};

module.exports.id = 1201;
module.exports.class = SpellUpgradeSuccessMessage;
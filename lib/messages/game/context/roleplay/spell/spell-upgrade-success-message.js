var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

SpellUpgradeSuccessMessage.prototype.serializeAs_SpellUpgradeSuccessMessage = function(param1) {
  param1.writeInt(this.spellId);
  if (this.spellLevel < 1 || this.spellLevel > 6) {
    throw new Error("Forbidden value (" + this.spellLevel + ") on element spellLevel.");
  } else {
    param1.writeByte(this.spellLevel);
    return;
  }
};

SpellUpgradeSuccessMessage.prototype.deserializeAs_SpellUpgradeSuccessMessage = function(param1) {
  this.spellId = param1.readInt();
  this.spellLevel = param1.readByte();
  if (this.spellLevel < 1 || this.spellLevel > 6) {
    throw new Error("Forbidden value (" + this.spellLevel + ") on element of SpellUpgradeSuccessMessage.spellLevel.");
  } else {
    return;
  }
};

SpellUpgradeSuccessMessage.prototype.getMessageId = function() {
  return 1201;
};

SpellUpgradeSuccessMessage.prototype.getClassName = function() {
  return 'SpellUpgradeSuccessMessage';
};

module.exports.id = 1201;
module.exports.class = SpellUpgradeSuccessMessage;
module.exports.getInstance = function() {
  return new SpellUpgradeSuccessMessage();
};
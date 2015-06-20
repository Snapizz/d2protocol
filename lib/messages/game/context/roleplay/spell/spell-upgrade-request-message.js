var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var SpellUpgradeRequestMessage = function() {
  this.spellId = 0;
  this.spellLevel = 0;
};

util.inherits(SpellUpgradeRequestMessage, BaseMessage);

SpellUpgradeRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_SpellUpgradeRequestMessage(output);
};

SpellUpgradeRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_SpellUpgradeRequestMessage(input);
};

SpellUpgradeRequestMessage.prototype.serializeAs_SpellUpgradeRequestMessage = function(param1) {
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
};

SpellUpgradeRequestMessage.prototype.deserializeAs_SpellUpgradeRequestMessage = function(param1) {
  this.spellId = param1.readVarUhShort();
  if (this.spellId < 0) {
    throw new Error("Forbidden value (" + this.spellId + ") on element of SpellUpgradeRequestMessage.spellId.");
  } else {
    this.spellLevel = param1.readByte();
    if (this.spellLevel < 1 || this.spellLevel > 6) {
      throw new Error("Forbidden value (" + this.spellLevel + ") on element of SpellUpgradeRequestMessage.spellLevel.");
    } else {
      return;
    }
  }
};

SpellUpgradeRequestMessage.prototype.getMessageId = function() {
  return 5608;
};

SpellUpgradeRequestMessage.prototype.getClassName = function() {
  return 'SpellUpgradeRequestMessage';
};

module.exports.id = 5608;
module.exports.class = SpellUpgradeRequestMessage;
module.exports.getInstance = function() {
  return new SpellUpgradeRequestMessage();
};
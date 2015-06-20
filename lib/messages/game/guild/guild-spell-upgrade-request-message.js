var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildSpellUpgradeRequestMessage = function() {
  this.spellId = 0;
};

util.inherits(GuildSpellUpgradeRequestMessage, BaseMessage);

GuildSpellUpgradeRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildSpellUpgradeRequestMessage(output);
};

GuildSpellUpgradeRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildSpellUpgradeRequestMessage(input);
};

GuildSpellUpgradeRequestMessage.prototype.serializeAs_GuildSpellUpgradeRequestMessage = function(output) {
  if (this.spellId < 0) {
    throw new Error("Forbidden value (" + this.spellId + ") on element spellId.");
  } else {
    param1.writeInt(this.spellId);
    return;
  }
};

GuildSpellUpgradeRequestMessage.prototype.deserializeAs_GuildSpellUpgradeRequestMessage = function(input) {
  this.spellId = param1.readInt();
  if (this.spellId < 0) {
    throw new Error("Forbidden value (" + this.spellId + ") on element of GuildSpellUpgradeRequestMessage.spellId.");
  } else {
    return;
  }
};

GuildSpellUpgradeRequestMessage.prototype.getMessageId = function() {
  return 5699;
};

GuildSpellUpgradeRequestMessage.prototype.getClassName = function() {
  return 'GuildSpellUpgradeRequestMessage';
};

module.exports.id = 5699;
module.exports.class = GuildSpellUpgradeRequestMessage;
var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var GuildLevelUpMessage = function() {
  this.newLevel = 0;
};

util.inherits(GuildLevelUpMessage, BaseMessage);

GuildLevelUpMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildLevelUpMessage(output);
};

GuildLevelUpMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildLevelUpMessage(input);
};

GuildLevelUpMessage.prototype.serializeAs_GuildLevelUpMessage = function(param1) {
  if (this.newLevel < 2 || this.newLevel > 200) {
    throw new Error("Forbidden value (" + this.newLevel + ") on element newLevel.");
  } else {
    param1.writeByte(this.newLevel);
    return;
  }
};

GuildLevelUpMessage.prototype.deserializeAs_GuildLevelUpMessage = function(param1) {
  this.newLevel = param1.readUnsignedByte();
  if (this.newLevel < 2 || this.newLevel > 200) {
    throw new Error("Forbidden value (" + this.newLevel + ") on element of GuildLevelUpMessage.newLevel.");
  } else {
    return;
  }
};

GuildLevelUpMessage.prototype.getMessageId = function() {
  return 6062;
};

GuildLevelUpMessage.prototype.getClassName = function() {
  return 'GuildLevelUpMessage';
};

module.exports.id = 6062;
module.exports.class = GuildLevelUpMessage;
module.exports.getInstance = function() {
  return new GuildLevelUpMessage();
};
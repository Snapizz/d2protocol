var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildFactsRequestMessage = function() {
  this.guildId = 0;
};

util.inherits(GuildFactsRequestMessage, BaseMessage);

GuildFactsRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildFactsRequestMessage(output);
};

GuildFactsRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildFactsRequestMessage(input);
};

GuildFactsRequestMessage.prototype.serializeAs_GuildFactsRequestMessage = function(output) {
  if (this.guildId < 0) {
    throw new Error("Forbidden value (" + this.guildId + ") on element guildId.");
  } else {
    param1.writeVarInt(this.guildId);
    return;
  }
};

GuildFactsRequestMessage.prototype.deserializeAs_GuildFactsRequestMessage = function(input) {
  this.guildId = param1.readVarUhInt();
  if (this.guildId < 0) {
    throw new Error("Forbidden value (" + this.guildId + ") on element of GuildFactsRequestMessage.guildId.");
  } else {
    return;
  }
};

GuildFactsRequestMessage.prototype.getMessageId = function() {
  return 6404;
};

GuildFactsRequestMessage.prototype.getClassName = function() {
  return 'GuildFactsRequestMessage';
};

module.exports.id = 6404;
module.exports.class = GuildFactsRequestMessage;
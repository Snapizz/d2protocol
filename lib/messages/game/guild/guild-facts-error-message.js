var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildFactsErrorMessage = function() {
  this.guildId = 0;
};

util.inherits(GuildFactsErrorMessage, BaseMessage);

GuildFactsErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildFactsErrorMessage(output);
};

GuildFactsErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildFactsErrorMessage(input);
};

GuildFactsErrorMessage.prototype.serializeAs_GuildFactsErrorMessage = function(output) {
  if (this.guildId < 0) {
    throw (new Error((("Forbidden value (" + this.guildId) + ") on element guildId.")));
  };
  output.writeVarInt(this.guildId);
};

GuildFactsErrorMessage.prototype.deserializeAs_GuildFactsErrorMessage = function(input) {
  this.guildId = input.readVarUhInt();
  if (this.guildId < 0) {
    throw (new Error((("Forbidden value (" + this.guildId) + ") on element of GuildFactsErrorMessage.guildId.")));
  };
};

GuildFactsErrorMessage.prototype.getMessageId = function() {
  return 6424;
};

GuildFactsErrorMessage.prototype.getClassName = function() {
  return 'GuildFactsErrorMessage';
};

module.exports.id = 6424;
module.exports.class = GuildFactsErrorMessage;
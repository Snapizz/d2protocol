var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildKickRequestMessage = function() {
  this.kickedId = 0;
};

util.inherits(GuildKickRequestMessage, BaseMessage);

GuildKickRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildKickRequestMessage(output);
};

GuildKickRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildKickRequestMessage(input);
};

GuildKickRequestMessage.prototype.serializeAs_GuildKickRequestMessage = function(output) {
  if (this.kickedId < 0) {
    throw (new Error((("Forbidden value (" + this.kickedId) + ") on element kickedId.")));
  };
  output.writeVarInt(this.kickedId);
};

GuildKickRequestMessage.prototype.deserializeAs_GuildKickRequestMessage = function(input) {
  this.kickedId = input.readVarUhInt();
  if (this.kickedId < 0) {
    throw (new Error((("Forbidden value (" + this.kickedId) + ") on element of GuildKickRequestMessage.kickedId.")));
  };
};

GuildKickRequestMessage.prototype.getMessageId = function() {
  return 5887;
};

GuildKickRequestMessage.prototype.getClassName = function() {
  return 'GuildKickRequestMessage';
};

module.exports.id = 5887;
module.exports.class = GuildKickRequestMessage;
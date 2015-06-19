var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildJoinedMessage = function() {
  this.guildInfo;
  this.memberRights = 0;
  this.enabled = false;
};

util.inherits(GuildJoinedMessage, BaseMessage);

GuildJoinedMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildJoinedMessage(output);
};

GuildJoinedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildJoinedMessage(input);
};

GuildJoinedMessage.prototype.serializeAs_GuildJoinedMessage = function(output) {
  this.guildInfo.serializeAs_GuildInformations(output);
  if (this.memberRights < 0) {
    throw (new Error((("Forbidden value (" + this.memberRights) + ") on element memberRights.")));
  };
  output.writeVarInt(this.memberRights);
  output.writeBoolean(this.enabled);
};

GuildJoinedMessage.prototype.deserializeAs_GuildJoinedMessage = function(input) {
  this.guildInfo = new GuildInformations();
  this.guildInfo.deserialize(input);
  this.memberRights = input.readVarUhInt();
  if (this.memberRights < 0) {
    throw (new Error((("Forbidden value (" + this.memberRights) + ") on element of GuildJoinedMessage.memberRights.")));
  };
  this.enabled = input.readBoolean();
};

GuildJoinedMessage.prototype.getMessageId = function() {
  return 5564;
};

GuildJoinedMessage.prototype.getClassName = function() {
  return 'GuildJoinedMessage';
};

module.exports.id = 5564;
module.exports.class = GuildJoinedMessage;
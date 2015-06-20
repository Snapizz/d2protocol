var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildInformations = require('../../../types/game/context/roleplay/guild-informations.js').class;

var GuildJoinedMessage = function() {
  this.guildInfo = new GuildInformations();
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

GuildJoinedMessage.prototype.serializeAs_GuildJoinedMessage = function(param1) {
  this.guildInfo.serializeAs_GuildInformations(param1);
  if (this.memberRights < 0) {
    throw new Error("Forbidden value (" + this.memberRights + ") on element memberRights.");
  } else {
    param1.writeVarInt(this.memberRights);
    param1.writeBoolean(this.enabled);
    return;
  }
};

GuildJoinedMessage.prototype.deserializeAs_GuildJoinedMessage = function(param1) {
  this.guildInfo = new GuildInformations();
  this.guildInfo.deserialize(param1);
  this.memberRights = param1.readVarUhInt();
  if (this.memberRights < 0) {
    throw new Error("Forbidden value (" + this.memberRights + ") on element of GuildJoinedMessage.memberRights.");
  } else {
    this.enabled = param1.readBoolean();
    return;
  }
};

GuildJoinedMessage.prototype.getMessageId = function() {
  return 5564;
};

GuildJoinedMessage.prototype.getClassName = function() {
  return 'GuildJoinedMessage';
};

module.exports.id = 5564;
module.exports.class = GuildJoinedMessage;
module.exports.getInstance = function() {
  return new GuildJoinedMessage();
};
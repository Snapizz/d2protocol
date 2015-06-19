var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildInvitationByNameMessage = function() {
  this.name = "";
};

util.inherits(GuildInvitationByNameMessage, BaseMessage);

GuildInvitationByNameMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildInvitationByNameMessage(output);
};

GuildInvitationByNameMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildInvitationByNameMessage(input);
};

GuildInvitationByNameMessage.prototype.serializeAs_GuildInvitationByNameMessage = function(output) {
  output.writeUTF(this.name);
};

GuildInvitationByNameMessage.prototype.deserializeAs_GuildInvitationByNameMessage = function(input) {
  this.name = input.readUTF();
};

GuildInvitationByNameMessage.prototype.getMessageId = function() {
  return 6115;
};

GuildInvitationByNameMessage.prototype.getClassName = function() {
  return 'GuildInvitationByNameMessage';
};

module.exports.id = 6115;
module.exports.class = GuildInvitationByNameMessage;
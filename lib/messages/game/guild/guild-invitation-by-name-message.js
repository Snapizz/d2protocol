var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
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

GuildInvitationByNameMessage.prototype.serializeAs_GuildInvitationByNameMessage = function(param1) {
  param1.writeUTF(this.name);
};

GuildInvitationByNameMessage.prototype.deserializeAs_GuildInvitationByNameMessage = function(param1) {
  this.name = param1.readUTF();
};

GuildInvitationByNameMessage.prototype.getMessageId = function() {
  return 6115;
};

GuildInvitationByNameMessage.prototype.getClassName = function() {
  return 'GuildInvitationByNameMessage';
};

module.exports.id = 6115;
module.exports.class = GuildInvitationByNameMessage;
module.exports.getInstance = function() {
  return new GuildInvitationByNameMessage();
};
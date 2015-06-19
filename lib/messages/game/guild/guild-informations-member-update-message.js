var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildInformationsMemberUpdateMessage = function() {
  this.member;
};

util.inherits(GuildInformationsMemberUpdateMessage, BaseMessage);

GuildInformationsMemberUpdateMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildInformationsMemberUpdateMessage(output);
};

GuildInformationsMemberUpdateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildInformationsMemberUpdateMessage(input);
};

GuildInformationsMemberUpdateMessage.prototype.serializeAs_GuildInformationsMemberUpdateMessage = function(output) {
  this.member.serializeAs_GuildMember(output);
};

GuildInformationsMemberUpdateMessage.prototype.deserializeAs_GuildInformationsMemberUpdateMessage = function(input) {
  this.member = new GuildMember();
  this.member.deserialize(input);
};

GuildInformationsMemberUpdateMessage.prototype.getMessageId = function() {
  return 5597;
};

GuildInformationsMemberUpdateMessage.prototype.getClassName = function() {
  return 'GuildInformationsMemberUpdateMessage';
};

module.exports.id = 5597;
module.exports.class = GuildInformationsMemberUpdateMessage;
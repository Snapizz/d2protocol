var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildMember = require('../../../types/game/guild/guild-member.js').class;

var GuildInformationsMemberUpdateMessage = function() {
  this.member = new GuildMember();
};

util.inherits(GuildInformationsMemberUpdateMessage, BaseMessage);

GuildInformationsMemberUpdateMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildInformationsMemberUpdateMessage(output);
};

GuildInformationsMemberUpdateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildInformationsMemberUpdateMessage(input);
};

GuildInformationsMemberUpdateMessage.prototype.serializeAs_GuildInformationsMemberUpdateMessage = function(param1) {
  this.member.serializeAs_GuildMember(param1);
};

GuildInformationsMemberUpdateMessage.prototype.deserializeAs_GuildInformationsMemberUpdateMessage = function(param1) {
  this.member = new GuildMember();
  this.member.deserialize(param1);
};

GuildInformationsMemberUpdateMessage.prototype.getMessageId = function() {
  return 5597;
};

GuildInformationsMemberUpdateMessage.prototype.getClassName = function() {
  return 'GuildInformationsMemberUpdateMessage';
};

module.exports.id = 5597;
module.exports.class = GuildInformationsMemberUpdateMessage;
module.exports.getInstance = function() {
  return new GuildInformationsMemberUpdateMessage();
};
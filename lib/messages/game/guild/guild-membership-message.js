var d2com = require('d2com'),
  BaseMessage = require('./guild-joined-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildMembershipMessage = function() {

};

util.inherits(GuildMembershipMessage, BaseMessage);

GuildMembershipMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildMembershipMessage(output);
};

GuildMembershipMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildMembershipMessage(input);
};

GuildMembershipMessage.prototype.serializeAs_GuildMembershipMessage = function(output) {
  this.serializeAs_GuildJoinedMessage(output);
};

GuildMembershipMessage.prototype.deserializeAs_GuildMembershipMessage = function(input) {
  this.deserialize(input);
};

GuildMembershipMessage.prototype.getMessageId = function() {
  return 5835;
};

GuildMembershipMessage.prototype.getClassName = function() {
  return 'GuildMembershipMessage';
};

module.exports.id = 5835;
module.exports.class = GuildMembershipMessage;
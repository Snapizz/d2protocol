var d2com = require('d2com'),
  BaseMessage = require('./guild-membership-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

GuildMembershipMessage.prototype.serializeAs_GuildMembershipMessage = function(param1) {
  this.serializeAs_GuildJoinedMessage(param1);
};

GuildMembershipMessage.prototype.deserializeAs_GuildMembershipMessage = function(param1) {
  this.deserialize(param1);
};

GuildMembershipMessage.prototype.getMessageId = function() {
  return 5835;
};

GuildMembershipMessage.prototype.getClassName = function() {
  return 'GuildMembershipMessage';
};

module.exports.id = 5835;
module.exports.class = GuildMembershipMessage;
module.exports.getInstance = function() {
  return new GuildMembershipMessage();
};
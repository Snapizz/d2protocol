var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildFightJoinRequestMessage = function() {
  this.taxCollectorId = 0;
};

util.inherits(GuildFightJoinRequestMessage, BaseMessage);

GuildFightJoinRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildFightJoinRequestMessage(output);
};

GuildFightJoinRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildFightJoinRequestMessage(input);
};

GuildFightJoinRequestMessage.prototype.serializeAs_GuildFightJoinRequestMessage = function(output) {
  output.writeInt(this.taxCollectorId);
};

GuildFightJoinRequestMessage.prototype.deserializeAs_GuildFightJoinRequestMessage = function(input) {
  this.taxCollectorId = input.readInt();
};

GuildFightJoinRequestMessage.prototype.getMessageId = function() {
  return 5717;
};

GuildFightJoinRequestMessage.prototype.getClassName = function() {
  return 'GuildFightJoinRequestMessage';
};

module.exports.id = 5717;
module.exports.class = GuildFightJoinRequestMessage;
var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyFollowThisMemberRequestMessage = function() {
  this.enabled = false;
};

util.inherits(PartyFollowThisMemberRequestMessage, BaseMessage);

PartyFollowThisMemberRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyFollowThisMemberRequestMessage(output);
};

PartyFollowThisMemberRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyFollowThisMemberRequestMessage(input);
};

PartyFollowThisMemberRequestMessage.prototype.serializeAs_PartyFollowThisMemberRequestMessage = function(output) {
  this.serializeAs_PartyFollowMemberRequestMessage(param1);
  param1.writeBoolean(this.enabled);
};

PartyFollowThisMemberRequestMessage.prototype.deserializeAs_PartyFollowThisMemberRequestMessage = function(input) {
  this.deserialize(param1);
  this.enabled = param1.readBoolean();
};

PartyFollowThisMemberRequestMessage.prototype.getMessageId = function() {
  return 5588;
};

PartyFollowThisMemberRequestMessage.prototype.getClassName = function() {
  return 'PartyFollowThisMemberRequestMessage';
};

module.exports.id = 5588;
module.exports.class = PartyFollowThisMemberRequestMessage;
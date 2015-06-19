var d2com = require('d2com'),
  BaseMessage = require('./party-follow-member-request-message.js').class,
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
  this.serializeAs_PartyFollowMemberRequestMessage(output);
  output.writeBoolean(this.enabled);
};

PartyFollowThisMemberRequestMessage.prototype.deserializeAs_PartyFollowThisMemberRequestMessage = function(input) {
  this.deserialize(input);
  this.enabled = input.readBoolean();
};

PartyFollowThisMemberRequestMessage.prototype.getMessageId = function() {
  return 5588;
};

PartyFollowThisMemberRequestMessage.prototype.getClassName = function() {
  return 'PartyFollowThisMemberRequestMessage';
};

module.exports.id = 5588;
module.exports.class = PartyFollowThisMemberRequestMessage;
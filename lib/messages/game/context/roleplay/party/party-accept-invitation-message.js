var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyAcceptInvitationMessage = function() {

};

util.inherits(PartyAcceptInvitationMessage, BaseMessage);

PartyAcceptInvitationMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyAcceptInvitationMessage(output);
};

PartyAcceptInvitationMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyAcceptInvitationMessage(input);
};

PartyAcceptInvitationMessage.prototype.serializeAs_PartyAcceptInvitationMessage = function(output) {
  this.serializeAs_AbstractPartyMessage(param1);
};

PartyAcceptInvitationMessage.prototype.deserializeAs_PartyAcceptInvitationMessage = function(input) {
  this.deserialize(param1);
};

PartyAcceptInvitationMessage.prototype.getMessageId = function() {
  return 5580;
};

PartyAcceptInvitationMessage.prototype.getClassName = function() {
  return 'PartyAcceptInvitationMessage';
};

module.exports.id = 5580;
module.exports.class = PartyAcceptInvitationMessage;
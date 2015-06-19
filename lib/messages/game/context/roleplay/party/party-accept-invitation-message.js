var d2com = require('d2com'),
  BaseMessage = require('./abstract-party-message.js').class,
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
  this.serializeAs_AbstractPartyMessage(output);
};

PartyAcceptInvitationMessage.prototype.deserializeAs_PartyAcceptInvitationMessage = function(input) {
  this.deserialize(input);
};

PartyAcceptInvitationMessage.prototype.getMessageId = function() {
  return 5580;
};

PartyAcceptInvitationMessage.prototype.getClassName = function() {
  return 'PartyAcceptInvitationMessage';
};

module.exports.id = 5580;
module.exports.class = PartyAcceptInvitationMessage;
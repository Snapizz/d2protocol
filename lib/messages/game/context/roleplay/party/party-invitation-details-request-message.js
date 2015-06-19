var d2com = require('d2com'),
  BaseMessage = require('./abstract-party-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyInvitationDetailsRequestMessage = function() {

};

util.inherits(PartyInvitationDetailsRequestMessage, BaseMessage);

PartyInvitationDetailsRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyInvitationDetailsRequestMessage(output);
};

PartyInvitationDetailsRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyInvitationDetailsRequestMessage(input);
};

PartyInvitationDetailsRequestMessage.prototype.serializeAs_PartyInvitationDetailsRequestMessage = function(output) {
  this.serializeAs_AbstractPartyMessage(output);
};

PartyInvitationDetailsRequestMessage.prototype.deserializeAs_PartyInvitationDetailsRequestMessage = function(input) {
  this.deserialize(input);
};

PartyInvitationDetailsRequestMessage.prototype.getMessageId = function() {
  return 6264;
};

PartyInvitationDetailsRequestMessage.prototype.getClassName = function() {
  return 'PartyInvitationDetailsRequestMessage';
};

module.exports.id = 6264;
module.exports.class = PartyInvitationDetailsRequestMessage;
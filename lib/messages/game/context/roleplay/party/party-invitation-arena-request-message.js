var d2com = require('d2com'),
  BaseMessage = require('./party-invitation-request-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyInvitationArenaRequestMessage = function() {

};

util.inherits(PartyInvitationArenaRequestMessage, BaseMessage);

PartyInvitationArenaRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyInvitationArenaRequestMessage(output);
};

PartyInvitationArenaRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyInvitationArenaRequestMessage(input);
};

PartyInvitationArenaRequestMessage.prototype.serializeAs_PartyInvitationArenaRequestMessage = function(output) {
  this.serializeAs_PartyInvitationRequestMessage(output);
};

PartyInvitationArenaRequestMessage.prototype.deserializeAs_PartyInvitationArenaRequestMessage = function(input) {
  this.deserialize(input);
};

PartyInvitationArenaRequestMessage.prototype.getMessageId = function() {
  return 6283;
};

PartyInvitationArenaRequestMessage.prototype.getClassName = function() {
  return 'PartyInvitationArenaRequestMessage';
};

module.exports.id = 6283;
module.exports.class = PartyInvitationArenaRequestMessage;
var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
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
  super.serializeAs_AbstractPartyMessage(param1);
};

PartyInvitationDetailsRequestMessage.prototype.deserializeAs_PartyInvitationDetailsRequestMessage = function(input) {
  super.deserialize(param1);
};

PartyInvitationDetailsRequestMessage.prototype.getMessageId = function() {
  return 6264;
};

PartyInvitationDetailsRequestMessage.prototype.getClassName = function() {
  return 'PartyInvitationDetailsRequestMessage';
};

module.exports.id = 6264;
module.exports.class = PartyInvitationDetailsRequestMessage;
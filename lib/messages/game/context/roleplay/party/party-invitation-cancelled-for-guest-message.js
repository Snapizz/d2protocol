var d2com = require('d2com'),
  BaseMessage = require('./abstract-party-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyInvitationCancelledForGuestMessage = function() {
  this.cancelerId = 0;
};

util.inherits(PartyInvitationCancelledForGuestMessage, BaseMessage);

PartyInvitationCancelledForGuestMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyInvitationCancelledForGuestMessage(output);
};

PartyInvitationCancelledForGuestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyInvitationCancelledForGuestMessage(input);
};

PartyInvitationCancelledForGuestMessage.prototype.serializeAs_PartyInvitationCancelledForGuestMessage = function(output) {
  this.serializeAs_AbstractPartyMessage(output);
  if (this.cancelerId < 0) {
    throw (new Error((("Forbidden value (" + this.cancelerId) + ") on element cancelerId.")));
  };
  output.writeVarInt(this.cancelerId);
};

PartyInvitationCancelledForGuestMessage.prototype.deserializeAs_PartyInvitationCancelledForGuestMessage = function(input) {
  this.deserialize(input);
  this.cancelerId = input.readVarUhInt();
  if (this.cancelerId < 0) {
    throw (new Error((("Forbidden value (" + this.cancelerId) + ") on element of PartyInvitationCancelledForGuestMessage.cancelerId.")));
  };
};

PartyInvitationCancelledForGuestMessage.prototype.getMessageId = function() {
  return 6256;
};

PartyInvitationCancelledForGuestMessage.prototype.getClassName = function() {
  return 'PartyInvitationCancelledForGuestMessage';
};

module.exports.id = 6256;
module.exports.class = PartyInvitationCancelledForGuestMessage;
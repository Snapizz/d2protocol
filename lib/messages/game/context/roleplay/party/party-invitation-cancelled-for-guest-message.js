var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
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
  super.serializeAs_AbstractPartyMessage(param1);
  if (this.cancelerId < 0) {
    throw new Error("Forbidden value (" + this.cancelerId + ") on element cancelerId.");
  } else {
    param1.writeVarInt(this.cancelerId);
    return;
  }
};

PartyInvitationCancelledForGuestMessage.prototype.deserializeAs_PartyInvitationCancelledForGuestMessage = function(input) {
  super.deserialize(param1);
  this.cancelerId = param1.readVarUhInt();
  if (this.cancelerId < 0) {
    throw new Error("Forbidden value (" + this.cancelerId + ") on element of PartyInvitationCancelledForGuestMessage.cancelerId.");
  } else {
    return;
  }
};

PartyInvitationCancelledForGuestMessage.prototype.getMessageId = function() {
  return 6256;
};

PartyInvitationCancelledForGuestMessage.prototype.getClassName = function() {
  return 'PartyInvitationCancelledForGuestMessage';
};

module.exports.id = 6256;
module.exports.class = PartyInvitationCancelledForGuestMessage;
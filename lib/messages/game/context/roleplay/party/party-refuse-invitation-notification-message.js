var d2com = require('d2com'),
  BaseMessage = require('./abstract-party-event-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyRefuseInvitationNotificationMessage = function() {
  this.guestId = 0;
};

util.inherits(PartyRefuseInvitationNotificationMessage, BaseMessage);

PartyRefuseInvitationNotificationMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyRefuseInvitationNotificationMessage(output);
};

PartyRefuseInvitationNotificationMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyRefuseInvitationNotificationMessage(input);
};

PartyRefuseInvitationNotificationMessage.prototype.serializeAs_PartyRefuseInvitationNotificationMessage = function(output) {
  this.serializeAs_AbstractPartyEventMessage(output);
  if (this.guestId < 0) {
    throw (new Error((("Forbidden value (" + this.guestId) + ") on element guestId.")));
  };
  output.writeVarInt(this.guestId);
};

PartyRefuseInvitationNotificationMessage.prototype.deserializeAs_PartyRefuseInvitationNotificationMessage = function(input) {
  this.deserialize(input);
  this.guestId = input.readVarUhInt();
  if (this.guestId < 0) {
    throw (new Error((("Forbidden value (" + this.guestId) + ") on element of PartyRefuseInvitationNotificationMessage.guestId.")));
  };
};

PartyRefuseInvitationNotificationMessage.prototype.getMessageId = function() {
  return 5596;
};

PartyRefuseInvitationNotificationMessage.prototype.getClassName = function() {
  return 'PartyRefuseInvitationNotificationMessage';
};

module.exports.id = 5596;
module.exports.class = PartyRefuseInvitationNotificationMessage;
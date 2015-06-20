var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
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

PartyRefuseInvitationNotificationMessage.prototype.serializeAs_PartyRefuseInvitationNotificationMessage = function(param1) {
  this.serializeAs_AbstractPartyEventMessage(param1);
  if (this.guestId < 0) {
    throw new Error("Forbidden value (" + this.guestId + ") on element guestId.");
  } else {
    param1.writeVarInt(this.guestId);
    return;
  }
};

PartyRefuseInvitationNotificationMessage.prototype.deserializeAs_PartyRefuseInvitationNotificationMessage = function(param1) {
  this.deserialize(param1);
  this.guestId = param1.readVarUhInt();
  if (this.guestId < 0) {
    throw new Error("Forbidden value (" + this.guestId + ") on element of PartyRefuseInvitationNotificationMessage.guestId.");
  } else {
    return;
  }
};

PartyRefuseInvitationNotificationMessage.prototype.getMessageId = function() {
  return 5596;
};

PartyRefuseInvitationNotificationMessage.prototype.getClassName = function() {
  return 'PartyRefuseInvitationNotificationMessage';
};

module.exports.id = 5596;
module.exports.class = PartyRefuseInvitationNotificationMessage;
module.exports.getInstance = function() {
  return new PartyRefuseInvitationNotificationMessage();
};
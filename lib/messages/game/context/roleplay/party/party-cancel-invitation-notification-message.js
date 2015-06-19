var d2com = require('d2com'),
  BaseMessage = require('./abstract-party-event-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyCancelInvitationNotificationMessage = function() {
  this.cancelerId = 0;
  this.guestId = 0;
};

util.inherits(PartyCancelInvitationNotificationMessage, BaseMessage);

PartyCancelInvitationNotificationMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyCancelInvitationNotificationMessage(output);
};

PartyCancelInvitationNotificationMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyCancelInvitationNotificationMessage(input);
};

PartyCancelInvitationNotificationMessage.prototype.serializeAs_PartyCancelInvitationNotificationMessage = function(output) {
  this.serializeAs_AbstractPartyEventMessage(output);
  if (this.cancelerId < 0) {
    throw (new Error((("Forbidden value (" + this.cancelerId) + ") on element cancelerId.")));
  };
  output.writeVarInt(this.cancelerId);
  if (this.guestId < 0) {
    throw (new Error((("Forbidden value (" + this.guestId) + ") on element guestId.")));
  };
  output.writeVarInt(this.guestId);
};

PartyCancelInvitationNotificationMessage.prototype.deserializeAs_PartyCancelInvitationNotificationMessage = function(input) {
  this.deserialize(input);
  this.cancelerId = input.readVarUhInt();
  if (this.cancelerId < 0) {
    throw (new Error((("Forbidden value (" + this.cancelerId) + ") on element of PartyCancelInvitationNotificationMessage.cancelerId.")));
  };
  this.guestId = input.readVarUhInt();
  if (this.guestId < 0) {
    throw (new Error((("Forbidden value (" + this.guestId) + ") on element of PartyCancelInvitationNotificationMessage.guestId.")));
  };
};

PartyCancelInvitationNotificationMessage.prototype.getMessageId = function() {
  return 6251;
};

PartyCancelInvitationNotificationMessage.prototype.getClassName = function() {
  return 'PartyCancelInvitationNotificationMessage';
};

module.exports.id = 6251;
module.exports.class = PartyCancelInvitationNotificationMessage;
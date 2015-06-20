var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyCancelInvitationMessage = function() {
  this.guestId = 0;
};

util.inherits(PartyCancelInvitationMessage, BaseMessage);

PartyCancelInvitationMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyCancelInvitationMessage(output);
};

PartyCancelInvitationMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyCancelInvitationMessage(input);
};

PartyCancelInvitationMessage.prototype.serializeAs_PartyCancelInvitationMessage = function(output) {
  super.serializeAs_AbstractPartyMessage(param1);
  if (this.guestId < 0) {
    throw new Error("Forbidden value (" + this.guestId + ") on element guestId.");
  } else {
    param1.writeVarInt(this.guestId);
    return;
  }
};

PartyCancelInvitationMessage.prototype.deserializeAs_PartyCancelInvitationMessage = function(input) {
  super.deserialize(param1);
  this.guestId = param1.readVarUhInt();
  if (this.guestId < 0) {
    throw new Error("Forbidden value (" + this.guestId + ") on element of PartyCancelInvitationMessage.guestId.");
  } else {
    return;
  }
};

PartyCancelInvitationMessage.prototype.getMessageId = function() {
  return 6254;
};

PartyCancelInvitationMessage.prototype.getClassName = function() {
  return 'PartyCancelInvitationMessage';
};

module.exports.id = 6254;
module.exports.class = PartyCancelInvitationMessage;
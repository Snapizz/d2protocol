var d2com = require('d2com'),
  BaseMessage = require('./abstract-party-message.js').class,
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
  this.serializeAs_AbstractPartyMessage(output);
  if (this.guestId < 0) {
    throw (new Error((("Forbidden value (" + this.guestId) + ") on element guestId.")));
  };
  output.writeVarInt(this.guestId);
};

PartyCancelInvitationMessage.prototype.deserializeAs_PartyCancelInvitationMessage = function(input) {
  this.deserialize(input);
  this.guestId = input.readVarUhInt();
  if (this.guestId < 0) {
    throw (new Error((("Forbidden value (" + this.guestId) + ") on element of PartyCancelInvitationMessage.guestId.")));
  };
};

PartyCancelInvitationMessage.prototype.getMessageId = function() {
  return 6254;
};

PartyCancelInvitationMessage.prototype.getClassName = function() {
  return 'PartyCancelInvitationMessage';
};

module.exports.id = 6254;
module.exports.class = PartyCancelInvitationMessage;
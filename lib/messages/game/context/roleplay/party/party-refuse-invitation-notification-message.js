var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var PartyRefuseInvitationNotificationMessage = function() {
    this.guestId = 0;
};

require('util').inherits(PartyRefuseInvitationNotificationMessage, require('./abstract-party-event-message.js').AbstractPartyEventMessage);

module.exports = function() {
    return new PartyRefuseInvitationNotificationMessage();
};

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
    this.deserializeAs_AbstractPartyEventMessage(param1);
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
module.exports.PartyRefuseInvitationNotificationMessage = PartyRefuseInvitationNotificationMessage;
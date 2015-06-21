var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var PartyCancelInvitationNotificationMessage = function() {
    this.cancelerId = 0;
    this.guestId = 0;
};

require('util').inherits(PartyCancelInvitationNotificationMessage, require('./abstract-party-event-message.js').class);

PartyCancelInvitationNotificationMessage.prototype.serialize = function(output) {
    this.serializeAs_PartyCancelInvitationNotificationMessage(output);
};

PartyCancelInvitationNotificationMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PartyCancelInvitationNotificationMessage(input);
};

PartyCancelInvitationNotificationMessage.prototype.serializeAs_PartyCancelInvitationNotificationMessage = function(param1) {
    this.serializeAs_AbstractPartyEventMessage(param1);
    if (this.cancelerId < 0) {
        throw new Error("Forbidden value (" + this.cancelerId + ") on element cancelerId.");
    } else {
        param1.writeVarInt(this.cancelerId);
        if (this.guestId < 0) {
            throw new Error("Forbidden value (" + this.guestId + ") on element guestId.");
        } else {
            param1.writeVarInt(this.guestId);
            return;
        }
    }
};

PartyCancelInvitationNotificationMessage.prototype.deserializeAs_PartyCancelInvitationNotificationMessage = function(param1) {
    this.deserializeAs_AbstractPartyEventMessage(param1);
    this.cancelerId = param1.readVarUhInt();
    if (this.cancelerId < 0) {
        throw new Error("Forbidden value (" + this.cancelerId + ") on element of PartyCancelInvitationNotificationMessage.cancelerId.");
    } else {
        this.guestId = param1.readVarUhInt();
        if (this.guestId < 0) {
            throw new Error("Forbidden value (" + this.guestId + ") on element of PartyCancelInvitationNotificationMessage.guestId.");
        } else {
            return;
        }
    }
};

PartyCancelInvitationNotificationMessage.prototype.getMessageId = function() {
    return 6251;
};

PartyCancelInvitationNotificationMessage.prototype.getClassName = function() {
    return 'PartyCancelInvitationNotificationMessage';
};

module.exports.id = 6251;
module.exports.class = PartyCancelInvitationNotificationMessage;
module.exports.getInstance = function() {
    return new PartyCancelInvitationNotificationMessage;
};
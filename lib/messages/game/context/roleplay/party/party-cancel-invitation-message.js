var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var PartyCancelInvitationMessage = function() {
    this.guestId = 0;
};

require('util').inherits(PartyCancelInvitationMessage, require('./abstract-party-message.js').AbstractPartyMessage);

module.exports = function() {
    return new PartyCancelInvitationMessage();
};

PartyCancelInvitationMessage.prototype.serialize = function(output) {
    this.serializeAs_PartyCancelInvitationMessage(output);
};

PartyCancelInvitationMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PartyCancelInvitationMessage(input);
};

PartyCancelInvitationMessage.prototype.serializeAs_PartyCancelInvitationMessage = function(param1) {
    this.serializeAs_AbstractPartyMessage(param1);
    if (this.guestId < 0) {
        throw new Error("Forbidden value (" + this.guestId + ") on element guestId.");
    } else {
        param1.writeVarInt(this.guestId);
        return;
    }
};

PartyCancelInvitationMessage.prototype.deserializeAs_PartyCancelInvitationMessage = function(param1) {
    this.deserializeAs_AbstractPartyMessage(param1);
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
module.exports.PartyCancelInvitationMessage = PartyCancelInvitationMessage;
var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var TeleportToBuddyCloseMessage = function() {
    this.dungeonId = 0;
    this.buddyId = 0;
};

require('util').inherits(TeleportToBuddyCloseMessage, d2com.NetworkMessage.class);

TeleportToBuddyCloseMessage.prototype.serialize = function(output) {
    this.serializeAs_TeleportToBuddyCloseMessage(output);
};

TeleportToBuddyCloseMessage.prototype.deserialize = function(input) {
    this.deserializeAs_TeleportToBuddyCloseMessage(input);
};

TeleportToBuddyCloseMessage.prototype.serializeAs_TeleportToBuddyCloseMessage = function(param1) {
    if (this.dungeonId < 0) {
        throw new Error("Forbidden value (" + this.dungeonId + ") on element dungeonId.");
    } else {
        param1.writeVarShort(this.dungeonId);
        if (this.buddyId < 0) {
            throw new Error("Forbidden value (" + this.buddyId + ") on element buddyId.");
        } else {
            param1.writeVarInt(this.buddyId);
            return;
        }
    }
};

TeleportToBuddyCloseMessage.prototype.deserializeAs_TeleportToBuddyCloseMessage = function(param1) {
    this.dungeonId = param1.readVarUhShort();
    if (this.dungeonId < 0) {
        throw new Error("Forbidden value (" + this.dungeonId + ") on element of TeleportToBuddyCloseMessage.dungeonId.");
    } else {
        this.buddyId = param1.readVarUhInt();
        if (this.buddyId < 0) {
            throw new Error("Forbidden value (" + this.buddyId + ") on element of TeleportToBuddyCloseMessage.buddyId.");
        } else {
            return;
        }
    }
};

TeleportToBuddyCloseMessage.prototype.getMessageId = function() {
    return 6303;
};

TeleportToBuddyCloseMessage.prototype.getClassName = function() {
    return 'TeleportToBuddyCloseMessage';
};

module.exports.id = 6303;
module.exports.class = TeleportToBuddyCloseMessage;
module.exports.getInstance = function() {
    return new TeleportToBuddyCloseMessage;
};
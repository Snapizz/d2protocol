var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var TeleportToBuddyAnswerMessage = function() {
    this.dungeonId = 0;
    this.buddyId = 0;
    this.accept = false;
};

require('util').inherits(TeleportToBuddyAnswerMessage, d2com.NetworkMessage.class);

TeleportToBuddyAnswerMessage.prototype.serialize = function(output) {
    this.serializeAs_TeleportToBuddyAnswerMessage(output);
};

TeleportToBuddyAnswerMessage.prototype.deserialize = function(input) {
    this.deserializeAs_TeleportToBuddyAnswerMessage(input);
};

TeleportToBuddyAnswerMessage.prototype.serializeAs_TeleportToBuddyAnswerMessage = function(param1) {
    if (this.dungeonId < 0) {
        throw new Error("Forbidden value (" + this.dungeonId + ") on element dungeonId.");
    } else {
        param1.writeVarShort(this.dungeonId);
        if (this.buddyId < 0) {
            throw new Error("Forbidden value (" + this.buddyId + ") on element buddyId.");
        } else {
            param1.writeVarInt(this.buddyId);
            param1.writeBoolean(this.accept);
            return;
        }
    }
};

TeleportToBuddyAnswerMessage.prototype.deserializeAs_TeleportToBuddyAnswerMessage = function(param1) {
    this.dungeonId = param1.readVarUhShort();
    if (this.dungeonId < 0) {
        throw new Error("Forbidden value (" + this.dungeonId + ") on element of TeleportToBuddyAnswerMessage.dungeonId.");
    } else {
        this.buddyId = param1.readVarUhInt();
        if (this.buddyId < 0) {
            throw new Error("Forbidden value (" + this.buddyId + ") on element of TeleportToBuddyAnswerMessage.buddyId.");
        } else {
            this.accept = param1.readBoolean();
            return;
        }
    }
};

TeleportToBuddyAnswerMessage.prototype.getMessageId = function() {
    return 6293;
};

TeleportToBuddyAnswerMessage.prototype.getClassName = function() {
    return 'TeleportToBuddyAnswerMessage';
};

module.exports.id = 6293;
module.exports.class = TeleportToBuddyAnswerMessage;
module.exports.getInstance = function() {
    return new TeleportToBuddyAnswerMessage;
};
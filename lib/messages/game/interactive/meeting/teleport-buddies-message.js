var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var TeleportBuddiesMessage = function() {
    this.dungeonId = 0;
};

require('util').inherits(TeleportBuddiesMessage, d2com.NetworkMessage.class);

TeleportBuddiesMessage.prototype.serialize = function(output) {
    this.serializeAs_TeleportBuddiesMessage(output);
};

TeleportBuddiesMessage.prototype.deserialize = function(input) {
    this.deserializeAs_TeleportBuddiesMessage(input);
};

TeleportBuddiesMessage.prototype.serializeAs_TeleportBuddiesMessage = function(param1) {
    if (this.dungeonId < 0) {
        throw new Error("Forbidden value (" + this.dungeonId + ") on element dungeonId.");
    } else {
        param1.writeVarShort(this.dungeonId);
        return;
    }
};

TeleportBuddiesMessage.prototype.deserializeAs_TeleportBuddiesMessage = function(param1) {
    this.dungeonId = param1.readVarUhShort();
    if (this.dungeonId < 0) {
        throw new Error("Forbidden value (" + this.dungeonId + ") on element of TeleportBuddiesMessage.dungeonId.");
    } else {
        return;
    }
};

TeleportBuddiesMessage.prototype.getMessageId = function() {
    return 6289;
};

TeleportBuddiesMessage.prototype.getClassName = function() {
    return 'TeleportBuddiesMessage';
};

module.exports.id = 6289;
module.exports.class = TeleportBuddiesMessage;
module.exports.getInstance = function() {
    return new TeleportBuddiesMessage;
};
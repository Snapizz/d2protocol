var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var DungeonKeyRingUpdateMessage = function() {
    this.dungeonId = 0;
    this.available = false;
};

require('util').inherits(DungeonKeyRingUpdateMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new DungeonKeyRingUpdateMessage();
};

DungeonKeyRingUpdateMessage.prototype.serialize = function(output) {
    this.serializeAs_DungeonKeyRingUpdateMessage(output);
};

DungeonKeyRingUpdateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_DungeonKeyRingUpdateMessage(input);
};

DungeonKeyRingUpdateMessage.prototype.serializeAs_DungeonKeyRingUpdateMessage = function(param1) {
    if (this.dungeonId < 0) {
        throw new Error("Forbidden value (" + this.dungeonId + ") on element dungeonId.");
    } else {
        param1.writeVarShort(this.dungeonId);
        param1.writeBoolean(this.available);
        return;
    }
};

DungeonKeyRingUpdateMessage.prototype.deserializeAs_DungeonKeyRingUpdateMessage = function(param1) {
    this.dungeonId = param1.readVarUhShort();
    if (this.dungeonId < 0) {
        throw new Error("Forbidden value (" + this.dungeonId + ") on element of DungeonKeyRingUpdateMessage.dungeonId.");
    } else {
        this.available = param1.readBoolean();
        return;
    }
};

DungeonKeyRingUpdateMessage.prototype.getMessageId = function() {
    return 6296;
};

DungeonKeyRingUpdateMessage.prototype.getClassName = function() {
    return 'DungeonKeyRingUpdateMessage';
};

module.exports.id = 6296;
module.exports.DungeonKeyRingUpdateMessage = DungeonKeyRingUpdateMessage;
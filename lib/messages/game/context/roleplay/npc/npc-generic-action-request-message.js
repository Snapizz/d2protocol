var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var NpcGenericActionRequestMessage = module.exports = function() {
    this.npcId = 0;
    this.npcActionId = 0;
    this.npcMapId = 0;

    return this;
};

require('util').inherits(NpcGenericActionRequestMessage, d2com.NetworkMessage.class);

NpcGenericActionRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_NpcGenericActionRequestMessage(output);
};

NpcGenericActionRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_NpcGenericActionRequestMessage(input);
};

NpcGenericActionRequestMessage.prototype.serializeAs_NpcGenericActionRequestMessage = function(param1) {
    param1.writeInt(this.npcId);
    if (this.npcActionId < 0) {
        throw new Error("Forbidden value (" + this.npcActionId + ") on element npcActionId.");
    } else {
        param1.writeByte(this.npcActionId);
        param1.writeInt(this.npcMapId);
        return;
    }
};

NpcGenericActionRequestMessage.prototype.deserializeAs_NpcGenericActionRequestMessage = function(param1) {
    this.npcId = param1.readInt();
    this.npcActionId = param1.readByte();
    if (this.npcActionId < 0) {
        throw new Error("Forbidden value (" + this.npcActionId + ") on element of NpcGenericActionRequestMessage.npcActionId.");
    } else {
        this.npcMapId = param1.readInt();
        return;
    }
};

NpcGenericActionRequestMessage.prototype.getMessageId = function() {
    return 5898;
};

NpcGenericActionRequestMessage.prototype.getClassName = function() {
    return 'NpcGenericActionRequestMessage';
};

module.exports.id = 5898;
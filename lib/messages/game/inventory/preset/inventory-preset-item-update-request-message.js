var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var InventoryPresetItemUpdateRequestMessage = function() {
    this.presetId = 0;
    this.position = 63;
    this.objUid = 0;
};

require('util').inherits(InventoryPresetItemUpdateRequestMessage, d2com.NetworkMessage.class);

InventoryPresetItemUpdateRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_InventoryPresetItemUpdateRequestMessage(output);
};

InventoryPresetItemUpdateRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_InventoryPresetItemUpdateRequestMessage(input);
};

InventoryPresetItemUpdateRequestMessage.prototype.serializeAs_InventoryPresetItemUpdateRequestMessage = function(param1) {
    if (this.presetId < 0) {
        throw new Error("Forbidden value (" + this.presetId + ") on element presetId.");
    } else {
        param1.writeByte(this.presetId);
        param1.writeByte(this.position);
        if (this.objUid < 0) {
            throw new Error("Forbidden value (" + this.objUid + ") on element objUid.");
        } else {
            param1.writeVarInt(this.objUid);
            return;
        }
    }
};

InventoryPresetItemUpdateRequestMessage.prototype.deserializeAs_InventoryPresetItemUpdateRequestMessage = function(param1) {
    this.presetId = param1.readByte();
    if (this.presetId < 0) {
        throw new Error("Forbidden value (" + this.presetId + ") on element of InventoryPresetItemUpdateRequestMessage.presetId.");
    } else {
        this.position = param1.readUnsignedByte();
        if (this.position < 0 || this.position > 255) {
            throw new Error("Forbidden value (" + this.position + ") on element of InventoryPresetItemUpdateRequestMessage.position.");
        } else {
            this.objUid = param1.readVarUhInt();
            if (this.objUid < 0) {
                throw new Error("Forbidden value (" + this.objUid + ") on element of InventoryPresetItemUpdateRequestMessage.objUid.");
            } else {
                return;
            }
        }
    }
};

InventoryPresetItemUpdateRequestMessage.prototype.getMessageId = function() {
    return 6210;
};

InventoryPresetItemUpdateRequestMessage.prototype.getClassName = function() {
    return 'InventoryPresetItemUpdateRequestMessage';
};

module.exports.id = 6210;
module.exports.class = InventoryPresetItemUpdateRequestMessage;
module.exports.getInstance = function() {
    return new InventoryPresetItemUpdateRequestMessage;
};
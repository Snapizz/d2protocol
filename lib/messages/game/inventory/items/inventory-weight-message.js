var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var InventoryWeightMessage = module.exports = function() {
    this.weight = 0;
    this.weightMax = 0;

    return this;
};

require('util').inherits(InventoryWeightMessage, d2com.NetworkMessage.class);

InventoryWeightMessage.prototype.serialize = function(output) {
    this.serializeAs_InventoryWeightMessage(output);
};

InventoryWeightMessage.prototype.deserialize = function(input) {
    this.deserializeAs_InventoryWeightMessage(input);
};

InventoryWeightMessage.prototype.serializeAs_InventoryWeightMessage = function(param1) {
    if (this.weight < 0) {
        throw new Error("Forbidden value (" + this.weight + ") on element weight.");
    } else {
        param1.writeVarInt(this.weight);
        if (this.weightMax < 0) {
            throw new Error("Forbidden value (" + this.weightMax + ") on element weightMax.");
        } else {
            param1.writeVarInt(this.weightMax);
            return;
        }
    }
};

InventoryWeightMessage.prototype.deserializeAs_InventoryWeightMessage = function(param1) {
    this.weight = param1.readVarUhInt();
    if (this.weight < 0) {
        throw new Error("Forbidden value (" + this.weight + ") on element of InventoryWeightMessage.weight.");
    } else {
        this.weightMax = param1.readVarUhInt();
        if (this.weightMax < 0) {
            throw new Error("Forbidden value (" + this.weightMax + ") on element of InventoryWeightMessage.weightMax.");
        } else {
            return;
        }
    }
};

InventoryWeightMessage.prototype.getMessageId = function() {
    return 3009;
};

InventoryWeightMessage.prototype.getClassName = function() {
    return 'InventoryWeightMessage';
};

module.exports.id = 3009;
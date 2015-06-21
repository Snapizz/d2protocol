var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var PaddockRemoveItemRequestMessage = module.exports = function() {
    this.cellId = 0;

    return this;
};

require('util').inherits(PaddockRemoveItemRequestMessage, d2com.NetworkMessage.class);

PaddockRemoveItemRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_PaddockRemoveItemRequestMessage(output);
};

PaddockRemoveItemRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PaddockRemoveItemRequestMessage(input);
};

PaddockRemoveItemRequestMessage.prototype.serializeAs_PaddockRemoveItemRequestMessage = function(param1) {
    if (this.cellId < 0 || this.cellId > 559) {
        throw new Error("Forbidden value (" + this.cellId + ") on element cellId.");
    } else {
        param1.writeVarShort(this.cellId);
        return;
    }
};

PaddockRemoveItemRequestMessage.prototype.deserializeAs_PaddockRemoveItemRequestMessage = function(param1) {
    this.cellId = param1.readVarUhShort();
    if (this.cellId < 0 || this.cellId > 559) {
        throw new Error("Forbidden value (" + this.cellId + ") on element of PaddockRemoveItemRequestMessage.cellId.");
    } else {
        return;
    }
};

PaddockRemoveItemRequestMessage.prototype.getMessageId = function() {
    return 5958;
};

PaddockRemoveItemRequestMessage.prototype.getClassName = function() {
    return 'PaddockRemoveItemRequestMessage';
};

module.exports.id = 5958;
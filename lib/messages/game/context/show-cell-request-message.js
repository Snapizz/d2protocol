var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ShowCellRequestMessage = function() {
    this.cellId = 0;
};

require('util').inherits(ShowCellRequestMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new ShowCellRequestMessage();
};

ShowCellRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_ShowCellRequestMessage(output);
};

ShowCellRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ShowCellRequestMessage(input);
};

ShowCellRequestMessage.prototype.serializeAs_ShowCellRequestMessage = function(param1) {
    if (this.cellId < 0 || this.cellId > 559) {
        throw new Error("Forbidden value (" + this.cellId + ") on element cellId.");
    } else {
        param1.writeVarShort(this.cellId);
        return;
    }
};

ShowCellRequestMessage.prototype.deserializeAs_ShowCellRequestMessage = function(param1) {
    this.cellId = param1.readVarUhShort();
    if (this.cellId < 0 || this.cellId > 559) {
        throw new Error("Forbidden value (" + this.cellId + ") on element of ShowCellRequestMessage.cellId.");
    } else {
        return;
    }
};

ShowCellRequestMessage.prototype.getMessageId = function() {
    return 5611;
};

ShowCellRequestMessage.prototype.getClassName = function() {
    return 'ShowCellRequestMessage';
};

module.exports.id = 5611;
module.exports.ShowCellRequestMessage = ShowCellRequestMessage;
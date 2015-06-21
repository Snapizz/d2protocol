var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var PaddockToSellListRequestMessage = function() {
    this.pageIndex = 0;
};

require('util').inherits(PaddockToSellListRequestMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new PaddockToSellListRequestMessage();
};

PaddockToSellListRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_PaddockToSellListRequestMessage(output);
};

PaddockToSellListRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PaddockToSellListRequestMessage(input);
};

PaddockToSellListRequestMessage.prototype.serializeAs_PaddockToSellListRequestMessage = function(param1) {
    if (this.pageIndex < 0) {
        throw new Error("Forbidden value (" + this.pageIndex + ") on element pageIndex.");
    } else {
        param1.writeVarShort(this.pageIndex);
        return;
    }
};

PaddockToSellListRequestMessage.prototype.deserializeAs_PaddockToSellListRequestMessage = function(param1) {
    this.pageIndex = param1.readVarUhShort();
    if (this.pageIndex < 0) {
        throw new Error("Forbidden value (" + this.pageIndex + ") on element of PaddockToSellListRequestMessage.pageIndex.");
    } else {
        return;
    }
};

PaddockToSellListRequestMessage.prototype.getMessageId = function() {
    return 6141;
};

PaddockToSellListRequestMessage.prototype.getClassName = function() {
    return 'PaddockToSellListRequestMessage';
};

module.exports.id = 6141;
module.exports.PaddockToSellListRequestMessage = PaddockToSellListRequestMessage;
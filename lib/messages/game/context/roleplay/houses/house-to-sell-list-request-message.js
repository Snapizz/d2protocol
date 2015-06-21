var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var HouseToSellListRequestMessage = module.exports = function() {
    this.pageIndex = 0;

    return this;
};

require('util').inherits(HouseToSellListRequestMessage, d2com.NetworkMessage.class);

HouseToSellListRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_HouseToSellListRequestMessage(output);
};

HouseToSellListRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_HouseToSellListRequestMessage(input);
};

HouseToSellListRequestMessage.prototype.serializeAs_HouseToSellListRequestMessage = function(param1) {
    if (this.pageIndex < 0) {
        throw new Error("Forbidden value (" + this.pageIndex + ") on element pageIndex.");
    } else {
        param1.writeVarShort(this.pageIndex);
        return;
    }
};

HouseToSellListRequestMessage.prototype.deserializeAs_HouseToSellListRequestMessage = function(param1) {
    this.pageIndex = param1.readVarUhShort();
    if (this.pageIndex < 0) {
        throw new Error("Forbidden value (" + this.pageIndex + ") on element of HouseToSellListRequestMessage.pageIndex.");
    } else {
        return;
    }
};

HouseToSellListRequestMessage.prototype.getMessageId = function() {
    return 6139;
};

HouseToSellListRequestMessage.prototype.getClassName = function() {
    return 'HouseToSellListRequestMessage';
};

module.exports.id = 6139;
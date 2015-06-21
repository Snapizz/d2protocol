var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeBidHouseBuyMessage = function() {
    this.uid = 0;
    this.qty = 0;
    this.price = 0;
};

require('util').inherits(ExchangeBidHouseBuyMessage, d2com.NetworkMessage.class);

ExchangeBidHouseBuyMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeBidHouseBuyMessage(output);
};

ExchangeBidHouseBuyMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeBidHouseBuyMessage(input);
};

ExchangeBidHouseBuyMessage.prototype.serializeAs_ExchangeBidHouseBuyMessage = function(param1) {
    if (this.uid < 0) {
        throw new Error("Forbidden value (" + this.uid + ") on element uid.");
    } else {
        param1.writeVarInt(this.uid);
        if (this.qty < 0) {
            throw new Error("Forbidden value (" + this.qty + ") on element qty.");
        } else {
            param1.writeVarInt(this.qty);
            if (this.price < 0) {
                throw new Error("Forbidden value (" + this.price + ") on element price.");
            } else {
                param1.writeVarInt(this.price);
                return;
            }
        }
    }
};

ExchangeBidHouseBuyMessage.prototype.deserializeAs_ExchangeBidHouseBuyMessage = function(param1) {
    this.uid = param1.readVarUhInt();
    if (this.uid < 0) {
        throw new Error("Forbidden value (" + this.uid + ") on element of ExchangeBidHouseBuyMessage.uid.");
    } else {
        this.qty = param1.readVarUhInt();
        if (this.qty < 0) {
            throw new Error("Forbidden value (" + this.qty + ") on element of ExchangeBidHouseBuyMessage.qty.");
        } else {
            this.price = param1.readVarUhInt();
            if (this.price < 0) {
                throw new Error("Forbidden value (" + this.price + ") on element of ExchangeBidHouseBuyMessage.price.");
            } else {
                return;
            }
        }
    }
};

ExchangeBidHouseBuyMessage.prototype.getMessageId = function() {
    return 5804;
};

ExchangeBidHouseBuyMessage.prototype.getClassName = function() {
    return 'ExchangeBidHouseBuyMessage';
};

module.exports.id = 5804;
module.exports.class = ExchangeBidHouseBuyMessage;
module.exports.getInstance = function() {
    return new ExchangeBidHouseBuyMessage;
};
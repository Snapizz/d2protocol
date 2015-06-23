var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeStartOkMulticraftCustomerMessage = function() {
    this.skillId = 0;
    this.crafterJobLevel = 0;
};

require('util').inherits(ExchangeStartOkMulticraftCustomerMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new ExchangeStartOkMulticraftCustomerMessage();
};

ExchangeStartOkMulticraftCustomerMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeStartOkMulticraftCustomerMessage(output);
};

ExchangeStartOkMulticraftCustomerMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeStartOkMulticraftCustomerMessage(input);
};

ExchangeStartOkMulticraftCustomerMessage.prototype.serializeAs_ExchangeStartOkMulticraftCustomerMessage = function(param1) {
    if (this.skillId < 0) {
        throw new Error("Forbidden value (" + this.skillId + ") on element skillId.");
    } else {
        param1.writeVarInt(this.skillId);
        if (this.crafterJobLevel < 0 || this.crafterJobLevel > 255) {
            throw new Error("Forbidden value (" + this.crafterJobLevel + ") on element crafterJobLevel.");
        } else {
            param1.writeByte(this.crafterJobLevel);
            return;
        }
    }
};

ExchangeStartOkMulticraftCustomerMessage.prototype.deserializeAs_ExchangeStartOkMulticraftCustomerMessage = function(param1) {
    this.skillId = param1.readVarUhInt();
    if (this.skillId < 0) {
        throw new Error("Forbidden value (" + this.skillId + ") on element of ExchangeStartOkMulticraftCustomerMessage.skillId.");
    } else {
        this.crafterJobLevel = param1.readUnsignedByte();
        if (this.crafterJobLevel < 0 || this.crafterJobLevel > 255) {
            throw new Error("Forbidden value (" + this.crafterJobLevel + ") on element of ExchangeStartOkMulticraftCustomerMessage.crafterJobLevel.");
        } else {
            return;
        }
    }
};

ExchangeStartOkMulticraftCustomerMessage.prototype.getMessageId = function() {
    return 5817;
};

ExchangeStartOkMulticraftCustomerMessage.prototype.getClassName = function() {
    return 'ExchangeStartOkMulticraftCustomerMessage';
};

module.exports.id = 5817;
module.exports.ExchangeStartOkMulticraftCustomerMessage = ExchangeStartOkMulticraftCustomerMessage;
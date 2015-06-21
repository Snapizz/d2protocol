var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeStartOkMulticraftCrafterMessage = function() {
    this.maxCase = 0;
    this.skillId = 0;
};

require('util').inherits(ExchangeStartOkMulticraftCrafterMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new ExchangeStartOkMulticraftCrafterMessage();
};

ExchangeStartOkMulticraftCrafterMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeStartOkMulticraftCrafterMessage(output);
};

ExchangeStartOkMulticraftCrafterMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeStartOkMulticraftCrafterMessage(input);
};

ExchangeStartOkMulticraftCrafterMessage.prototype.serializeAs_ExchangeStartOkMulticraftCrafterMessage = function(param1) {
    if (this.maxCase < 0) {
        throw new Error("Forbidden value (" + this.maxCase + ") on element maxCase.");
    } else {
        param1.writeByte(this.maxCase);
        if (this.skillId < 0) {
            throw new Error("Forbidden value (" + this.skillId + ") on element skillId.");
        } else {
            param1.writeVarInt(this.skillId);
            return;
        }
    }
};

ExchangeStartOkMulticraftCrafterMessage.prototype.deserializeAs_ExchangeStartOkMulticraftCrafterMessage = function(param1) {
    this.maxCase = param1.readByte();
    if (this.maxCase < 0) {
        throw new Error("Forbidden value (" + this.maxCase + ") on element of ExchangeStartOkMulticraftCrafterMessage.maxCase.");
    } else {
        this.skillId = param1.readVarUhInt();
        if (this.skillId < 0) {
            throw new Error("Forbidden value (" + this.skillId + ") on element of ExchangeStartOkMulticraftCrafterMessage.skillId.");
        } else {
            return;
        }
    }
};

ExchangeStartOkMulticraftCrafterMessage.prototype.getMessageId = function() {
    return 5818;
};

ExchangeStartOkMulticraftCrafterMessage.prototype.getClassName = function() {
    return 'ExchangeStartOkMulticraftCrafterMessage';
};

module.exports.id = 5818;
module.exports.ExchangeStartOkMulticraftCrafterMessage = ExchangeStartOkMulticraftCrafterMessage;
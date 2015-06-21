var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeStartedWithStorageMessage = function() {
    this.storageMaxSlot = 0;
};

require('util').inherits(ExchangeStartedWithStorageMessage, require('./exchange-started-message.js').class);

ExchangeStartedWithStorageMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeStartedWithStorageMessage(output);
};

ExchangeStartedWithStorageMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeStartedWithStorageMessage(input);
};

ExchangeStartedWithStorageMessage.prototype.serializeAs_ExchangeStartedWithStorageMessage = function(param1) {
    this.serializeAs_ExchangeStartedMessageAs_ExchangeStartedMessage(param1);
    if (this.storageMaxSlot < 0) {
        throw new Error("Forbidden value (" + this.storageMaxSlot + ") on element storageMaxSlot.");
    } else {
        param1.writeVarInt(this.storageMaxSlot);
        return;
    }
};

ExchangeStartedWithStorageMessage.prototype.deserializeAs_ExchangeStartedWithStorageMessage = function(param1) {
    this.deserializeAs_ExchangeStartedMessage(param1);
    this.storageMaxSlot = param1.readVarUhInt();
    if (this.storageMaxSlot < 0) {
        throw new Error("Forbidden value (" + this.storageMaxSlot + ") on element of ExchangeStartedWithStorageMessage.storageMaxSlot.");
    } else {
        return;
    }
};

ExchangeStartedWithStorageMessage.prototype.getMessageId = function() {
    return 6236;
};

ExchangeStartedWithStorageMessage.prototype.getClassName = function() {
    return 'ExchangeStartedWithStorageMessage';
};

module.exports.id = 6236;
module.exports.class = ExchangeStartedWithStorageMessage;
module.exports.getInstance = function() {
    return new ExchangeStartedWithStorageMessage;
};
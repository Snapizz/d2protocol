var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var ExchangeReadyMessage = function() {
    this.ready = false;
    this.step = 0;
};

require('util').inherits(ExchangeReadyMessage, d2com.NetworkMessage.class);

ExchangeReadyMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeReadyMessage(output);
};

ExchangeReadyMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeReadyMessage(input);
};

ExchangeReadyMessage.prototype.serializeAs_ExchangeReadyMessage = function(param1) {
    param1.writeBoolean(this.ready);
    if (this.step < 0) {
        throw new Error("Forbidden value (" + this.step + ") on element step.");
    } else {
        param1.writeVarShort(this.step);
        return;
    }
};

ExchangeReadyMessage.prototype.deserializeAs_ExchangeReadyMessage = function(param1) {
    this.ready = param1.readBoolean();
    this.step = param1.readVarUhShort();
    if (this.step < 0) {
        throw new Error("Forbidden value (" + this.step + ") on element of ExchangeReadyMessage.step.");
    } else {
        return;
    }
};

ExchangeReadyMessage.prototype.getMessageId = function() {
    return 5511;
};

ExchangeReadyMessage.prototype.getClassName = function() {
    return 'ExchangeReadyMessage';
};

module.exports.id = 5511;
module.exports.class = ExchangeReadyMessage;
module.exports.getInstance = function() {
    return new ExchangeReadyMessage;
};
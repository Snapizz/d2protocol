var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeErrorMessage = module.exports = function() {
    this.errorType = 0;

    return this;
};

require('util').inherits(ExchangeErrorMessage, d2com.NetworkMessage.class);

ExchangeErrorMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeErrorMessage(output);
};

ExchangeErrorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeErrorMessage(input);
};

ExchangeErrorMessage.prototype.serializeAs_ExchangeErrorMessage = function(param1) {
    param1.writeByte(this.errorType);
};

ExchangeErrorMessage.prototype.deserializeAs_ExchangeErrorMessage = function(param1) {
    this.errorType = param1.readByte();
};

ExchangeErrorMessage.prototype.getMessageId = function() {
    return 5513;
};

ExchangeErrorMessage.prototype.getClassName = function() {
    return 'ExchangeErrorMessage';
};

module.exports.id = 5513;
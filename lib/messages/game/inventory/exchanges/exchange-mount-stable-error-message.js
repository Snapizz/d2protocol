var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeMountStableErrorMessage = function() {

};

require('util').inherits(ExchangeMountStableErrorMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new ExchangeMountStableErrorMessage();
};

ExchangeMountStableErrorMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeMountStableErrorMessage(output);
};

ExchangeMountStableErrorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeMountStableErrorMessage(input);
};

ExchangeMountStableErrorMessage.prototype.serializeAs_ExchangeMountStableErrorMessage = function(param1) {

};

ExchangeMountStableErrorMessage.prototype.deserializeAs_ExchangeMountStableErrorMessage = function(param1) {

};

ExchangeMountStableErrorMessage.prototype.getMessageId = function() {
    return 5981;
};

ExchangeMountStableErrorMessage.prototype.getClassName = function() {
    return 'ExchangeMountStableErrorMessage';
};

module.exports.id = 5981;
module.exports.ExchangeMountStableErrorMessage = ExchangeMountStableErrorMessage;
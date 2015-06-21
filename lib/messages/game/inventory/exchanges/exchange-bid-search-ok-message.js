var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeBidSearchOkMessage = function() {

};

require('util').inherits(ExchangeBidSearchOkMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new ExchangeBidSearchOkMessage();
};

ExchangeBidSearchOkMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeBidSearchOkMessage(output);
};

ExchangeBidSearchOkMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeBidSearchOkMessage(input);
};

ExchangeBidSearchOkMessage.prototype.serializeAs_ExchangeBidSearchOkMessage = function(param1) {

};

ExchangeBidSearchOkMessage.prototype.deserializeAs_ExchangeBidSearchOkMessage = function(param1) {

};

ExchangeBidSearchOkMessage.prototype.getMessageId = function() {
    return 5802;
};

ExchangeBidSearchOkMessage.prototype.getClassName = function() {
    return 'ExchangeBidSearchOkMessage';
};

module.exports.id = 5802;
module.exports.ExchangeBidSearchOkMessage = ExchangeBidSearchOkMessage;
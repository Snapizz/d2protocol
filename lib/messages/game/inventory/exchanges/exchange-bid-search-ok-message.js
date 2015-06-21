var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var ExchangeBidSearchOkMessage = function() {

};

require('util').inherits(ExchangeBidSearchOkMessage, d2com.NetworkMessage.class);

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
module.exports.class = ExchangeBidSearchOkMessage;
module.exports.getInstance = function() {
    return new ExchangeBidSearchOkMessage;
};
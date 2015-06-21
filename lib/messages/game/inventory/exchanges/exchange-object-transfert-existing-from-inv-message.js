var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeObjectTransfertExistingFromInvMessage = function() {

};

require('util').inherits(ExchangeObjectTransfertExistingFromInvMessage, d2com.NetworkMessage.class);

ExchangeObjectTransfertExistingFromInvMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeObjectTransfertExistingFromInvMessage(output);
};

ExchangeObjectTransfertExistingFromInvMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeObjectTransfertExistingFromInvMessage(input);
};

ExchangeObjectTransfertExistingFromInvMessage.prototype.serializeAs_ExchangeObjectTransfertExistingFromInvMessage = function(param1) {

};

ExchangeObjectTransfertExistingFromInvMessage.prototype.deserializeAs_ExchangeObjectTransfertExistingFromInvMessage = function(param1) {

};

ExchangeObjectTransfertExistingFromInvMessage.prototype.getMessageId = function() {
    return 6325;
};

ExchangeObjectTransfertExistingFromInvMessage.prototype.getClassName = function() {
    return 'ExchangeObjectTransfertExistingFromInvMessage';
};

module.exports.id = 6325;
module.exports.class = ExchangeObjectTransfertExistingFromInvMessage;
module.exports.getInstance = function() {
    return new ExchangeObjectTransfertExistingFromInvMessage;
};
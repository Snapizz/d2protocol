var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var ExchangeObjectTransfertExistingToInvMessage = function() {

};

require('util').inherits(ExchangeObjectTransfertExistingToInvMessage, d2com.NetworkMessage.class);

ExchangeObjectTransfertExistingToInvMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeObjectTransfertExistingToInvMessage(output);
};

ExchangeObjectTransfertExistingToInvMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeObjectTransfertExistingToInvMessage(input);
};

ExchangeObjectTransfertExistingToInvMessage.prototype.serializeAs_ExchangeObjectTransfertExistingToInvMessage = function(param1) {

};

ExchangeObjectTransfertExistingToInvMessage.prototype.deserializeAs_ExchangeObjectTransfertExistingToInvMessage = function(param1) {

};

ExchangeObjectTransfertExistingToInvMessage.prototype.getMessageId = function() {
    return 6326;
};

ExchangeObjectTransfertExistingToInvMessage.prototype.getClassName = function() {
    return 'ExchangeObjectTransfertExistingToInvMessage';
};

module.exports.id = 6326;
module.exports.class = ExchangeObjectTransfertExistingToInvMessage;
module.exports.getInstance = function() {
    return new ExchangeObjectTransfertExistingToInvMessage;
};
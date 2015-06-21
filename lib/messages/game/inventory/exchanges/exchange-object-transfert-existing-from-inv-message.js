var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeObjectTransfertExistingFromInvMessage = module.exports = function() {


    return this;
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
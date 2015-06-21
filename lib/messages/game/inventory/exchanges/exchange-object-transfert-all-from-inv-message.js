var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeObjectTransfertAllFromInvMessage = function() {

};

require('util').inherits(ExchangeObjectTransfertAllFromInvMessage, d2com.NetworkMessage.class);

ExchangeObjectTransfertAllFromInvMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeObjectTransfertAllFromInvMessage(output);
};

ExchangeObjectTransfertAllFromInvMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeObjectTransfertAllFromInvMessage(input);
};

ExchangeObjectTransfertAllFromInvMessage.prototype.serializeAs_ExchangeObjectTransfertAllFromInvMessage = function(param1) {

};

ExchangeObjectTransfertAllFromInvMessage.prototype.deserializeAs_ExchangeObjectTransfertAllFromInvMessage = function(param1) {

};

ExchangeObjectTransfertAllFromInvMessage.prototype.getMessageId = function() {
    return 6184;
};

ExchangeObjectTransfertAllFromInvMessage.prototype.getClassName = function() {
    return 'ExchangeObjectTransfertAllFromInvMessage';
};

module.exports.id = 6184;
module.exports.class = ExchangeObjectTransfertAllFromInvMessage;
module.exports.getInstance = function() {
    return new ExchangeObjectTransfertAllFromInvMessage;
};
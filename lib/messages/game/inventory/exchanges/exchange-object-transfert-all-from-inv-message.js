var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeObjectTransfertAllFromInvMessage = function() {

};

require('util').inherits(ExchangeObjectTransfertAllFromInvMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new ExchangeObjectTransfertAllFromInvMessage();
};

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
module.exports.ExchangeObjectTransfertAllFromInvMessage = ExchangeObjectTransfertAllFromInvMessage;
var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeObjectTransfertAllToInvMessage = function() {

};

require('util').inherits(ExchangeObjectTransfertAllToInvMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new ExchangeObjectTransfertAllToInvMessage();
};

ExchangeObjectTransfertAllToInvMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeObjectTransfertAllToInvMessage(output);
};

ExchangeObjectTransfertAllToInvMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeObjectTransfertAllToInvMessage(input);
};

ExchangeObjectTransfertAllToInvMessage.prototype.serializeAs_ExchangeObjectTransfertAllToInvMessage = function(param1) {

};

ExchangeObjectTransfertAllToInvMessage.prototype.deserializeAs_ExchangeObjectTransfertAllToInvMessage = function(param1) {

};

ExchangeObjectTransfertAllToInvMessage.prototype.getMessageId = function() {
    return 6032;
};

ExchangeObjectTransfertAllToInvMessage.prototype.getClassName = function() {
    return 'ExchangeObjectTransfertAllToInvMessage';
};

module.exports.id = 6032;
module.exports.ExchangeObjectTransfertAllToInvMessage = ExchangeObjectTransfertAllToInvMessage;
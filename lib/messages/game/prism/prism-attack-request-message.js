var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var PrismAttackRequestMessage = function() {

};

require('util').inherits(PrismAttackRequestMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new PrismAttackRequestMessage();
};

PrismAttackRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_PrismAttackRequestMessage(output);
};

PrismAttackRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PrismAttackRequestMessage(input);
};

PrismAttackRequestMessage.prototype.serializeAs_PrismAttackRequestMessage = function(param1) {

};

PrismAttackRequestMessage.prototype.deserializeAs_PrismAttackRequestMessage = function(param1) {

};

PrismAttackRequestMessage.prototype.getMessageId = function() {
    return 6042;
};

PrismAttackRequestMessage.prototype.getClassName = function() {
    return 'PrismAttackRequestMessage';
};

module.exports.id = 6042;
module.exports.PrismAttackRequestMessage = PrismAttackRequestMessage;
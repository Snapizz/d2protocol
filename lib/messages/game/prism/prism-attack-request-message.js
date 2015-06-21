var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var PrismAttackRequestMessage = module.exports = function() {


    return this;
};

require('util').inherits(PrismAttackRequestMessage, d2com.NetworkMessage.class);

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
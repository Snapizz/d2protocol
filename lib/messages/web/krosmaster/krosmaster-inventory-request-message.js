var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var KrosmasterInventoryRequestMessage = module.exports = function() {


    return this;
};

require('util').inherits(KrosmasterInventoryRequestMessage, d2com.NetworkMessage.class);

KrosmasterInventoryRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_KrosmasterInventoryRequestMessage(output);
};

KrosmasterInventoryRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_KrosmasterInventoryRequestMessage(input);
};

KrosmasterInventoryRequestMessage.prototype.serializeAs_KrosmasterInventoryRequestMessage = function(param1) {

};

KrosmasterInventoryRequestMessage.prototype.deserializeAs_KrosmasterInventoryRequestMessage = function(param1) {

};

KrosmasterInventoryRequestMessage.prototype.getMessageId = function() {
    return 6344;
};

KrosmasterInventoryRequestMessage.prototype.getClassName = function() {
    return 'KrosmasterInventoryRequestMessage';
};

module.exports.id = 6344;
var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var PrismUseRequestMessage = module.exports = function() {


    return this;
};

require('util').inherits(PrismUseRequestMessage, d2com.NetworkMessage.class);

PrismUseRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_PrismUseRequestMessage(output);
};

PrismUseRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PrismUseRequestMessage(input);
};

PrismUseRequestMessage.prototype.serializeAs_PrismUseRequestMessage = function(param1) {

};

PrismUseRequestMessage.prototype.deserializeAs_PrismUseRequestMessage = function(param1) {

};

PrismUseRequestMessage.prototype.getMessageId = function() {
    return 6041;
};

PrismUseRequestMessage.prototype.getClassName = function() {
    return 'PrismUseRequestMessage';
};

module.exports.id = 6041;
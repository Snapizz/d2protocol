var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ObjectAveragePricesErrorMessage = module.exports = function() {


    return this;
};

require('util').inherits(ObjectAveragePricesErrorMessage, d2com.NetworkMessage.class);

ObjectAveragePricesErrorMessage.prototype.serialize = function(output) {
    this.serializeAs_ObjectAveragePricesErrorMessage(output);
};

ObjectAveragePricesErrorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ObjectAveragePricesErrorMessage(input);
};

ObjectAveragePricesErrorMessage.prototype.serializeAs_ObjectAveragePricesErrorMessage = function(param1) {

};

ObjectAveragePricesErrorMessage.prototype.deserializeAs_ObjectAveragePricesErrorMessage = function(param1) {

};

ObjectAveragePricesErrorMessage.prototype.getMessageId = function() {
    return 6336;
};

ObjectAveragePricesErrorMessage.prototype.getClassName = function() {
    return 'ObjectAveragePricesErrorMessage';
};

module.exports.id = 6336;
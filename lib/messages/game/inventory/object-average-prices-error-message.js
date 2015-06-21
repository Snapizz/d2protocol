var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ObjectAveragePricesErrorMessage = function() {

};

require('util').inherits(ObjectAveragePricesErrorMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new ObjectAveragePricesErrorMessage();
};

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
module.exports.ObjectAveragePricesErrorMessage = ObjectAveragePricesErrorMessage;
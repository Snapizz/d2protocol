var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ObjectAveragePricesGetMessage = module.exports = function() {


    return this;
};

require('util').inherits(ObjectAveragePricesGetMessage, d2com.NetworkMessage.class);

ObjectAveragePricesGetMessage.prototype.serialize = function(output) {
    this.serializeAs_ObjectAveragePricesGetMessage(output);
};

ObjectAveragePricesGetMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ObjectAveragePricesGetMessage(input);
};

ObjectAveragePricesGetMessage.prototype.serializeAs_ObjectAveragePricesGetMessage = function(param1) {

};

ObjectAveragePricesGetMessage.prototype.deserializeAs_ObjectAveragePricesGetMessage = function(param1) {

};

ObjectAveragePricesGetMessage.prototype.getMessageId = function() {
    return 6334;
};

ObjectAveragePricesGetMessage.prototype.getClassName = function() {
    return 'ObjectAveragePricesGetMessage';
};

module.exports.id = 6334;
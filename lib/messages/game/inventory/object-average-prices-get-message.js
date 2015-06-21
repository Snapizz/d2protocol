var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var ObjectAveragePricesGetMessage = function() {

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
module.exports.class = ObjectAveragePricesGetMessage;
module.exports.getInstance = function() {
    return new ObjectAveragePricesGetMessage;
};
var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var HouseSellFromInsideRequestMessage = function() {

};

require('util').inherits(HouseSellFromInsideRequestMessage, require('./house-sell-request-message.js'));

module.exports = function() {
    return new HouseSellFromInsideRequestMessage();
};

HouseSellFromInsideRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_HouseSellFromInsideRequestMessage(output);
};

HouseSellFromInsideRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_HouseSellFromInsideRequestMessage(input);
};

HouseSellFromInsideRequestMessage.prototype.serializeAs_HouseSellFromInsideRequestMessage = function(param1) {
    this.serializeAs_HouseSellRequestMessage(param1);
};

HouseSellFromInsideRequestMessage.prototype.deserializeAs_HouseSellFromInsideRequestMessage = function(param1) {
    this.deserializeAs_HouseSellRequestMessage(param1);
};

HouseSellFromInsideRequestMessage.prototype.getMessageId = function() {
    return 5884;
};

HouseSellFromInsideRequestMessage.prototype.getClassName = function() {
    return 'HouseSellFromInsideRequestMessage';
};

module.exports.id = 5884;
module.exports.HouseSellFromInsideRequestMessage = HouseSellFromInsideRequestMessage;
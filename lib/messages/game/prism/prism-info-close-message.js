var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var PrismInfoCloseMessage = function() {

};

require('util').inherits(PrismInfoCloseMessage, d2com.NetworkMessage.class);

PrismInfoCloseMessage.prototype.serialize = function(output) {
    this.serializeAs_PrismInfoCloseMessage(output);
};

PrismInfoCloseMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PrismInfoCloseMessage(input);
};

PrismInfoCloseMessage.prototype.serializeAs_PrismInfoCloseMessage = function(param1) {

};

PrismInfoCloseMessage.prototype.deserializeAs_PrismInfoCloseMessage = function(param1) {

};

PrismInfoCloseMessage.prototype.getMessageId = function() {
    return 5853;
};

PrismInfoCloseMessage.prototype.getClassName = function() {
    return 'PrismInfoCloseMessage';
};

module.exports.id = 5853;
module.exports.class = PrismInfoCloseMessage;
module.exports.getInstance = function() {
    return new PrismInfoCloseMessage;
};
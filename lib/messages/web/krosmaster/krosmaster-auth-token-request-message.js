var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var KrosmasterAuthTokenRequestMessage = function() {

};

require('util').inherits(KrosmasterAuthTokenRequestMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new KrosmasterAuthTokenRequestMessage();
};

KrosmasterAuthTokenRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_KrosmasterAuthTokenRequestMessage(output);
};

KrosmasterAuthTokenRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_KrosmasterAuthTokenRequestMessage(input);
};

KrosmasterAuthTokenRequestMessage.prototype.serializeAs_KrosmasterAuthTokenRequestMessage = function(param1) {

};

KrosmasterAuthTokenRequestMessage.prototype.deserializeAs_KrosmasterAuthTokenRequestMessage = function(param1) {

};

KrosmasterAuthTokenRequestMessage.prototype.getMessageId = function() {
    return 6346;
};

KrosmasterAuthTokenRequestMessage.prototype.getClassName = function() {
    return 'KrosmasterAuthTokenRequestMessage';
};

module.exports.id = 6346;
module.exports.KrosmasterAuthTokenRequestMessage = KrosmasterAuthTokenRequestMessage;
var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var KrosmasterAuthTokenRequestMessage = module.exports = function() {


    return this;
};

require('util').inherits(KrosmasterAuthTokenRequestMessage, d2com.NetworkMessage.class);

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
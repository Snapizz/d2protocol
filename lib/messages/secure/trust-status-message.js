var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var TrustStatusMessage = module.exports = function() {
    this.trusted = false;

    return this;
};

require('util').inherits(TrustStatusMessage, d2com.NetworkMessage.class);

TrustStatusMessage.prototype.serialize = function(output) {
    this.serializeAs_TrustStatusMessage(output);
};

TrustStatusMessage.prototype.deserialize = function(input) {
    this.deserializeAs_TrustStatusMessage(input);
};

TrustStatusMessage.prototype.serializeAs_TrustStatusMessage = function(param1) {
    param1.writeBoolean(this.trusted);
};

TrustStatusMessage.prototype.deserializeAs_TrustStatusMessage = function(param1) {
    this.trusted = param1.readBoolean();
};

TrustStatusMessage.prototype.getMessageId = function() {
    return 6267;
};

TrustStatusMessage.prototype.getClassName = function() {
    return 'TrustStatusMessage';
};

module.exports.id = 6267;
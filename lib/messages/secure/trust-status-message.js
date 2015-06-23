var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var TrustStatusMessage = function() {
    this.trusted = false;
    this.certified = false;
};

require('util').inherits(TrustStatusMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new TrustStatusMessage();
};

TrustStatusMessage.prototype.serialize = function(output) {
    this.serializeAs_TrustStatusMessage(output);
};

TrustStatusMessage.prototype.deserialize = function(input) {
    this.deserializeAs_TrustStatusMessage(input);
};

TrustStatusMessage.prototype.serializeAs_TrustStatusMessage = function(param1) {
    var _loc2_ = 0;
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.trusted);
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.certified);
    param1.writeByte(_loc2_);
};

TrustStatusMessage.prototype.deserializeAs_TrustStatusMessage = function(param1) {
    var _loc2_ = param1.readByte();
    this.trusted = BooleanByteWrapper.getFlag(_loc2_, 0);
    this.certified = BooleanByteWrapper.getFlag(_loc2_, 1);
};

TrustStatusMessage.prototype.getMessageId = function() {
    return 6267;
};

TrustStatusMessage.prototype.getClassName = function() {
    return 'TrustStatusMessage';
};

module.exports.id = 6267;
module.exports.TrustStatusMessage = TrustStatusMessage;
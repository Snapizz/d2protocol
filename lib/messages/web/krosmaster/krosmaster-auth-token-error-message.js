var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var KrosmasterAuthTokenErrorMessage = function() {
    this.reason = 0;
};

require('util').inherits(KrosmasterAuthTokenErrorMessage, d2com.NetworkMessage.class);

KrosmasterAuthTokenErrorMessage.prototype.serialize = function(output) {
    this.serializeAs_KrosmasterAuthTokenErrorMessage(output);
};

KrosmasterAuthTokenErrorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_KrosmasterAuthTokenErrorMessage(input);
};

KrosmasterAuthTokenErrorMessage.prototype.serializeAs_KrosmasterAuthTokenErrorMessage = function(param1) {
    param1.writeByte(this.reason);
};

KrosmasterAuthTokenErrorMessage.prototype.deserializeAs_KrosmasterAuthTokenErrorMessage = function(param1) {
    this.reason = param1.readByte();
    if (this.reason < 0) {
        throw new Error("Forbidden value (" + this.reason + ") on element of KrosmasterAuthTokenErrorMessage.reason.");
    } else {
        return;
    }
};

KrosmasterAuthTokenErrorMessage.prototype.getMessageId = function() {
    return 6345;
};

KrosmasterAuthTokenErrorMessage.prototype.getClassName = function() {
    return 'KrosmasterAuthTokenErrorMessage';
};

module.exports.id = 6345;
module.exports.class = KrosmasterAuthTokenErrorMessage;
module.exports.getInstance = function() {
    return new KrosmasterAuthTokenErrorMessage;
};
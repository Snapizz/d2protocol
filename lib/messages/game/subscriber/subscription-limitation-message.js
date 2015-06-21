var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var SubscriptionLimitationMessage = function() {
    this.reason = 0;
};

require('util').inherits(SubscriptionLimitationMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new SubscriptionLimitationMessage();
};

SubscriptionLimitationMessage.prototype.serialize = function(output) {
    this.serializeAs_SubscriptionLimitationMessage(output);
};

SubscriptionLimitationMessage.prototype.deserialize = function(input) {
    this.deserializeAs_SubscriptionLimitationMessage(input);
};

SubscriptionLimitationMessage.prototype.serializeAs_SubscriptionLimitationMessage = function(param1) {
    param1.writeByte(this.reason);
};

SubscriptionLimitationMessage.prototype.deserializeAs_SubscriptionLimitationMessage = function(param1) {
    this.reason = param1.readByte();
    if (this.reason < 0) {
        throw new Error("Forbidden value (" + this.reason + ") on element of SubscriptionLimitationMessage.reason.");
    } else {
        return;
    }
};

SubscriptionLimitationMessage.prototype.getMessageId = function() {
    return 5542;
};

SubscriptionLimitationMessage.prototype.getClassName = function() {
    return 'SubscriptionLimitationMessage';
};

module.exports.id = 5542;
module.exports.SubscriptionLimitationMessage = SubscriptionLimitationMessage;
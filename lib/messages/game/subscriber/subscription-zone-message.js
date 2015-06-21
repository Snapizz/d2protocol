var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var SubscriptionZoneMessage = function() {
    this.active = false;
};

require('util').inherits(SubscriptionZoneMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new SubscriptionZoneMessage();
};

SubscriptionZoneMessage.prototype.serialize = function(output) {
    this.serializeAs_SubscriptionZoneMessage(output);
};

SubscriptionZoneMessage.prototype.deserialize = function(input) {
    this.deserializeAs_SubscriptionZoneMessage(input);
};

SubscriptionZoneMessage.prototype.serializeAs_SubscriptionZoneMessage = function(param1) {
    param1.writeBoolean(this.active);
};

SubscriptionZoneMessage.prototype.deserializeAs_SubscriptionZoneMessage = function(param1) {
    this.active = param1.readBoolean();
};

SubscriptionZoneMessage.prototype.getMessageId = function() {
    return 5573;
};

SubscriptionZoneMessage.prototype.getClassName = function() {
    return 'SubscriptionZoneMessage';
};

module.exports.id = 5573;
module.exports.SubscriptionZoneMessage = SubscriptionZoneMessage;
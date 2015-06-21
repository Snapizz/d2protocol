var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GuestLimitationMessage = function() {
    this.reason = 0;
};

require('util').inherits(GuestLimitationMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GuestLimitationMessage();
};

GuestLimitationMessage.prototype.serialize = function(output) {
    this.serializeAs_GuestLimitationMessage(output);
};

GuestLimitationMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuestLimitationMessage(input);
};

GuestLimitationMessage.prototype.serializeAs_GuestLimitationMessage = function(param1) {
    param1.writeByte(this.reason);
};

GuestLimitationMessage.prototype.deserializeAs_GuestLimitationMessage = function(param1) {
    this.reason = param1.readByte();
    if (this.reason < 0) {
        throw new Error("Forbidden value (" + this.reason + ") on element of GuestLimitationMessage.reason.");
    } else {
        return;
    }
};

GuestLimitationMessage.prototype.getMessageId = function() {
    return 6506;
};

GuestLimitationMessage.prototype.getClassName = function() {
    return 'GuestLimitationMessage';
};

module.exports.id = 6506;
module.exports.GuestLimitationMessage = GuestLimitationMessage;